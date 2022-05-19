/**
 * Project Requirements:
 * - Change teh background color by generating random hex color by clicking a button
 * - Also display the hex code to a disabled input field
 * Add a button to copy the color code
 * Add a toast message when copied
 */

// Steps

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
        output.value = bgColor;
    });

    btnCopy.addEventListener('click', function() {
        navigator.clipboard.writeText(output.value);
        generateToastMessage(`${output.value} copied` )
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
    const div = document.createElement('div')
    div.innerText = msg;

    div.className = 'toast-message'

    document.body.appendChild(div)
}

// Step 3 - collect all necessary refactors

// Step 4 - Handle the change button click event

// Step 5 - handle the copy button click event

// Step 6 - Activated toast message

// Step 7 - Create dynamic toast message

// Step 8 - Clear toast message