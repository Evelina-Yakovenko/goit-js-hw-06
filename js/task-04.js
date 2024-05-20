const decrementBtn = document.querySelector("[data-action=decrement]");
const incrementtBtn = document.querySelector("[data-action=increment]");
const value = document.querySelector("#value");

let counterValue = 0;

decrementBtn.addEventListener("click", onClickBtnDecrement);
incrementtBtn.addEventListener("click", onClickBtnIncrement);

function onClickBtnDecrement(event) {
    value.textContent = `${counterValue -= 1} `;
}

function onClickBtnIncrement(event) {
    value.textContent = `${counterValue += 1} `; 
}