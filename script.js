const userInput = document.getElementById("user-input");
const convertBtn = document.getElementById("convert-btn");
const resetBtn = document.getElementById("reset-btn");
const lengthInput = document.getElementById("length-input");
const volumeInput = document.getElementById("volume-input");
const massInput = document.getElementById("mass-input");


convertBtn.addEventListener("click", function () {

    lengthInput.textContent = ""
    volumeInput.textContent = ""
    massInput.textContent = ""

    if (userInput.value === "0") {

        lengthInput.textContent = ""
        volumeInput.textContent = ""
        massInput.textContent = ""

    } else if (userInput.value !== "") {

        lengthInput.textContent += `${userInput.value} meters = ${Number(userInput.value * 3.281).toFixed(3)} feet | ${userInput.value} feet = ${Number(userInput.value / 3.281).toFixed(3)} meters`

        volumeInput.textContent += `${userInput.value} liters = ${Number(userInput.value * 0.264).toFixed(3)} gallons | ${userInput.value} gallons = ${Number(userInput.value / 0.264).toFixed(3)} liters`

        massInput.textContent += `${userInput.value} kilos = ${Number(userInput.value * 2.204).toFixed(3)} pounds | ${userInput.value} pounds = ${Number(userInput.value / 2.204).toFixed(3)} kilos`

    }
})

resetBtn.addEventListener("click", function () {
    lengthInput.textContent = ""
    volumeInput.textContent = ""
    massInput.textContent = ""
    userInput.value = ""
})