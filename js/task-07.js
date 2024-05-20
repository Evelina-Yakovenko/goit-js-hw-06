const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

text.style.fontSize = `${input.value}px`;

input.addEventListener("input", onFontSizeControlText);

function onFontSizeControlText(event) {
    text.style.fontSize = `${event.currentTarget.value}px`;
}