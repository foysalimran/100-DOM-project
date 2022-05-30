/**
 * Date: 30 May 2022
 * Author: Foysal Imran
 * Description: Color picker application with huge dom functionalities.
 */

// Globals
let div = null;

// onload handler
window.onload = () => (
    main()
)

// main or boot function, this function will take care of getting all the DOM references
function main() {
    let root = document.getElementById('root');
    let output = document.getElementById('output');
    let output2 = document.getElementById('output2');
    let changeBtn = document.getElementById('change-btn');
    let copyBtn = document.getElementById('copy-btn');
    let copyBtn2 = document.getElementById('copy-btn-2')
    
    changeBtn.addEventListener('click', function() {
        const color = generateColorDecimal();
        const hex = generateHexColor(color);
        const rgb = generateRGBColor(color);
        root.style.backgroundColor = hex;
        output.value = hex.substring(1);
        output2.value = rgb;
    });

    copyBtn.addEventListener('click', function() {
        navigator.clipboard.writeText(`#${output.value}`);
        if(div !== null) {
            div.remove()
            div = null;
        }
        if(isValidHex(output.value)){
            generateToastMessage(`#${output.value} copied` )
        } else{
            alert("Invalid Color Code")
        }
    })

    

    copyBtn2.addEventListener('click', function() {
        navigator.clipboard.writeText(`#${output2.value}`);
        if(div !== null) {
            div.remove()
            div = null;
        }
        if(isValidHex(output.value)){
            generateToastMessage(`${output2.value} copied` )
        } else{
            alert("Invalid Color Code")
        }
    })
    
    output.addEventListener('keyup', function(e) {
        const color = e.target.value
        if(color){
            output.value = color.toUpperCase()

            if(color && isValidHex(color)){
                root.style.backgroundColor = `#${color}`;
                output2.value = hexToRGB(color);
            }
        }

    })

}


// Event handlers

// DOM functions
function generateToastMessage(msg) {
    div = document.createElement('div')
    div.innerText = msg;

    div.className = 'toast-message toast-message-slide-in';

    div.addEventListener('click', function(){
        this.classList.remove('toast-message-slide-in');
        this.classList.add('toast-message-slide-out');

        div.addEventListener('animationend', function(){
            this.remove();
            div = null;
        })

    });
    document.body.appendChild(div)
}

function updateColorCodeToDom(color) {
    
}

// Utils


/**
 * generate and return an object of three color decimal values
 * @returns {object}
 */

function generateColorDecimal() {
	const red = Math.floor(Math.random() * 255);
	const green = Math.floor(Math.random() * 255);
	const blue = Math.floor(Math.random() * 255);

	return {
		red,
		green,
		blue,
	};
}

/**
 * Take a color object of three decimal values and return a hexadecimal color code.
 * @param {object} color 
 * @returns {string}
 */

 function generateHexColor({ red, green, blue }) {

    const getTwoCode = (value) => {
        const hex = value.toString(16)
        return hex.length == 1 ? `0${hex}` : hex
    }

    return `#${getTwoCode(red)}${getTwoCode(green)}${getTwoCode(blue)}`.toUpperCase();
}


/**
 * Take a color object of three decimal values and return a rgb color code.
 * @param {object} color 
 * @returns {string}
 */
function generateRGBColor({red, green, blue}) {
    return `rgb(${red}, ${green}, ${blue})`
}



/**
 * convert hex color to rgb
 * @param {string} hex 
 */
function hexToRGB(hex) {
    const red = parseInt(hex.slice(0,2), 16);
    const green = parseInt(hex.slice(2,4), 16);
    const blue = parseInt(hex.slice(4), 16);

    return `rgb(${red}, ${green}, ${blue})`
}

/**
 * Validate hex color code 
 * @param {string} color;
 * @returns {boolean}
 */
function isValidHex(color) {
    if(color.length !== 6) return false;
    return /^[0-9A-Fa-f]{6}$/i.test(color)
}
