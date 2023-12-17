let slide = 0; 

const slider = function(){

const subtractButton = document.getElementById('portfolio-Button-Previous')
const addButton = document.getElementById('portfolio-Button-Next')

subtractButton.addEventListener('click', subtract);
addButton.addEventListener('click', add);


function subtract() {
    slide = (slide - 1) < 0 ? 4 : slide - 1;
    // updateNumber();
    console.log('subtracting -')
    return slide;
}
function add() {
    slide = (slide + 1) > 4 ? 1 : slide + 1;
    // updateNumber();
    console.log('adding +')
    return slide;
}
function updateNumber() {
    console.log(`Current slide: ${slide}`);
}
};

export default slider

// Saving for potential future use. This function currently on has one use-case in the protfolio carousel so it makes no sense for it to be its own file.