function convert() {
    const inputValue = document.getElementById("input-value").value
    const lengthResult = document.getElementById("length-result")
    const volumeResult = document.getElementById("volume-result")
    const massResult = document.getElementById("mass-result")

    const metersToFeet = (inputValue * 3.28084).toFixed(3)
    const feetToMeters = (inputValue / 3.28084).toFixed(3)
    const litersToGallons = (inputValue * 0.264172).toFixed(3)
    const gallonsToLiters = (inputValue / 0.264172).toFixed(3)
    const kilosToPounds = (inputValue * 2.20462).toFixed(3)
    const poundsToKilos = (inputValue / 2.20462).toFixed(3)

    lengthResult.textContent = `${inputValue} meters = ${metersToFeet} feet | ${inputValue} feet = ${feetToMeters} meters`
    volumeResult.textContent = `${inputValue} liters = ${litersToGallons} gallons | ${inputValue} gallons = ${gallonsToLiters} liters`
    massResult.textContent = `${inputValue} kilos = ${kilosToPounds} pounds | ${inputValue} pounds = ${poundsToKilos} kilos`
}

function toggleDarkMode() {
    const body = document.body;
    const themeButton = document.getElementById("toggleThemeBtn")
    const headerTitle = document.querySelector(".header h1")
    body.classList.toggle("dark-theme")

    if (body.classList.contains("dark-theme")) {
        themeButton.textContent = "🌞"
        headerTitle.style.color = "white"
    } else {
        themeButton.textContent = "🌙"
        headerTitle.style.color = "black"
    }
}