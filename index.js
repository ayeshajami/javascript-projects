const input = document.getElementById("tempInput");
const result = document.getElementById("result");
const convertBtn = document.getElementById("convertBtn");

convertBtn.onclick = function () {
    let celsius = parseFloat(input.value);
    if (!isNaN(celsius)) {
        let fahrenheit = (celsius * 9/5) + 32;
        result.textContent = `${fahrenheit.toFixed(2)} °F`;
    } else {
        result.textContent = "Please enter a valid number.";
    }
}
