
// Generate hex code

window.onload = () => {
    main()
}

function main() {
    let root = document.getElementById('root')
    let button = document.getElementById('change-btn')
    let input = document.getElementById('input')

    button.addEventListener('click', function() {
        root.style.backgroundColor = generateHexCode();
        input.value = generateHexCode()
    })

}

function generateHexCode() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}
