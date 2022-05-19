
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
        navigator.clipboard.writeText(output.value)
    })

}

// Step 2: Random color generator function

function generateRGBcode() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}