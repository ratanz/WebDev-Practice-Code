const myCheckbox = document.getElementById("myCheckbox");
const visaButton = document.getElementById("visaButton");
const masterCard = document.getElementById("masterCard");
const paypal = document.getElementById("paypal");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function () {
  if (myCheckbox.checked) {
    subResult.textContent = `you are subscribed`;
  } else {
    `you are not subscribed`;
  }
  if (visaButton.checked) {
    paymentResult.textContent = `you are paying with visa`;
  } else if (masterCardButton.checked) {
    paymentResult.textContent = `you are paying with mastercard`;
  } else if (paypalButton.checked) {
    paymentResult.textContent = `you are paying with PayPal`;
  } else {
    paymentResult.textContent = `you must select a payment type`;
  }
};
