/**
 * Project Requirements:
 * - Change teh background color by generating random hex color by clicking a button
 * - Also display the hex code to a disabled input field
 * - Add a button to copy the color code
 * - Add a toast message when copied
 * - User can type their own hex code too
 * - Show rgb color too, but do not need to edit it
 * - User can also copy the RGB color
 */

// Steps

// Globals
let div = null;

window.onload = () => (
    main()
)

function main() {
    let root = document.getElementById('root');
    let output = document.getElementById('output');
    let output2 = document.getElementById('output2');
    let changeBtn = document.getElementById('change-btn');
    let copyBtn = document.getElementById('copy-btn')
    
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
    
    output.addEventListener('keyup', function(e) {
        const color = e.target.value
        if(color){
            output.value = color.toUpperCase()

            if(color && isValidHex(color)){
                root.style.backgroundColor = `#${color}`;
            }
        }

    })

}

// function 1 - generate three random decimal number for red, green and blue
// return as an object

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

 // function 2 - generate hex color code

 function generateHexColor({ red, green, blue }) {

    const getTwoCode = (value) => {
        const hex = value.toString(16)
        return hex.length == 1 ? `0${hex}` : hex
    }

    return `#${getTwoCode(red)}${getTwoCode(green)}${getTwoCode(blue)}`.toUpperCase();
}


// function 3 - generate RGBA color code
function generateRGBColor({red, green, blue}) {
    return `rgb(${red}, ${green}, ${blue})`
}

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

/**
 * 
 * @param {string} color : ;
 */
function isValidHex(color) {
    if(color.length !== 6) return false;
    return /^[0-9A-Fa-f]{6}$/i.test(color)
}

// Step 1 - Create on load handler

// Step 2: Random color generator function

// Step 3 - collect all necessary refactors

// Step 4 - Handle the change button click event

// Step 5 - handle the copy button click event

// Step 6 - Activated toast message

// Step 7 - Create dynamic toast message

// Step 8 - Clear toast message

// step 9 - create isHexValid function

// step 10 - implement change handler on input field

// step 11 - prevent copying hex code if it is not valid

// step 12 - refactor the color generator function

// step 13 - update color code to display rgb colors