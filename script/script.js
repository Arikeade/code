let counterDisplayElem = document.querySelector('.counter_display');
let counterMinusElem = document.querySelector('.counter_minus');
let counterPlusElem = document.querySelector('.counter_plus');

let count = 0;
let maxCount = 50;
let minCount = 0;


updateDisplay();

counterPlusElem.addEventListener("click", () => {
    if (count == maxCount) {
        count = 0
    } else {
        count++;
    };
    updateDisplay();
});

counterMinusElem.addEventListener("click", () => {
    if (count > minCount) {
        count--;
        updateDisplay();
    }
    
});

function updateDisplay(){
    counterDisplayElem.innerHTML = count;
};
