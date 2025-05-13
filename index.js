const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("paypalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function () {
    if (myCheckBox.checked) {
        subResult.textContent = "You are subscribed to our newsletter!";
    } else {
        subResult.textContent = "You are not subscribed to our newsletter!";
    }

    if (visaBtn.checked) {
        paymentResult.textContent = "You have selected Visa as your payment method!";
    } else if (masterCardBtn.checked) {
        paymentResult.textContent = "You have selected MasterCard as your payment method!";
    } else if (payPalBtn.checked) {
        paymentResult.textContent = "You have selected PayPal as your payment method!";
    } else {
        paymentResult.textContent = "Please select a payment method!";
    }
};
