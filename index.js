const inputEl = document.getElementById("hero-input-el")
const inputBtn = document.getElementById("hero-button-el")
const lengthEl = document.getElementById("length-conv-el")
const volumeEl = document.getElementById("volume-conv-el")
const massEl = document.getElementById("mass-conv-el")

inputEl.addEventListener("input", function () {
    this.style.width = "120px";
    this.style.width = this.scrollWidth + 'px';
})

inputBtn.addEventListener("click", function () {
    let numberToConvert = Number(inputEl.value)
    convert(numberToConvert)
})

function convert(value) {
    lengthEl.textContent = ` 
    ${value} meters = ${(value * 3.2808399).toFixed(3)} feet | 
    ${value} feet = ${(value / 3.2808399).toFixed(3)} meters 
    `

    volumeEl.textContent = `
    ${value} liters = ${(value * 0.26417205).toFixed(3)} gallons | 
    ${value} gallons = ${(value / 0.26417205).toFixed(3)} liters
    `

    massEl.textContent = `
    ${value} kilos = ${(value * 2.20462262).toFixed(3)} pounds | 
    ${value} pounds = ${(value / 2.20462262).toFixed(3)} kilos
    `
}

