let slide = 0; 

const slider = function(){

const subtractButton = document.getElementById('portfolio-Button-Previous')
const addButton = document.getElementById('portfolio-Button-Next')

subtractButton.addEventListener('click', subtract);
function subtract() {
    console.log('Subtracting')
    slide = (slide - 1) < 0 ? 4 : slide - 1;
    updateNumber();
}

addButton.addEventListener('click', add);
function add() {
    console.log('Adding')
    slide = (slide + 1) > 4 ? 1 : slide + 1;
    updateNumber();
}


function updateNumber() {
    console.log(`Current slide: ${slide}`);
}
};

export default {slider}