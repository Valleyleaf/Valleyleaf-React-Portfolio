let slide = 0; 


function updateNumber() {
    const numberDisplay = document.getElementById('numberDisplay');
    numberDisplay.textContent = slide;
}

function subtract() {
    slide = (slide - 1) < 0 ? 4 : slide - 1;
    updateNumber();
}

function add() {
    slide = (slide + 1) > 4 ? 1 : slide + 1;
    updateNumber();
}