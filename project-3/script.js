
window.onload = () => (
    main()
)

function main() {

    let changeBtn = document.getElementById('change-btn');
    let output = document.getElementById('output')
    let root = document.getElementById('root');


    changeBtn.addEventListener('click', function() {
        const bgColor = generateRGBcode()
        root.style.backgroundColor = bgColor;
        output.value = bgColor;
    });

}

// Step 2: Random color generator function

function generateRGBcode() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}