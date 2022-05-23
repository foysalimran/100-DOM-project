/**
 * Project Requirements:
 * - Change teh background color by generating random hex color by clicking a button
 * - Also display the hex code to a disabled input field
 * Add a button to copy the color code
 * Add a toast message when copied
 */

// Steps

// Globals
let div = null;

// Step 1 - Create on load handler
window.onload = () => (
    main()
)

function main() {
    let changeBtn = document.getElementById('change-btn');
    let output = document.getElementById('output');
    let btnCopy = document.getElementById('copy-btn')
    let root = document.getElementById('root');

    changeBtn.addEventListener('click', function() {
        const bgColor = generateRGBcode()
        root.style.backgroundColor = bgColor;
        output.value = bgColor.substring(1);
    });

    btnCopy.addEventListener('click', function() {
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

// Step 2: Random color generator function

function generateRGBcode() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
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

// Step 3 - collect all necessary refactors

// Step 4 - Handle the change button click event

// Step 5 - handle the copy button click event

// Step 6 - Activated toast message

// Step 7 - Create dynamic toast message

// Step 8 - Clear toast message

// step 9 - create isHexValid function

// step 10 - implement change handler on input field

// step 11 - prevent copying hex code if it is not valid