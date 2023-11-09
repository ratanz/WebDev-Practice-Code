const decreaseButton = document.getElementById("decreasedButton");
const resetButton = document.getElementById("resetButton");
const increaseButton = document.getElementById("increasedButton");
const countLabel = document.getElementById("countLabel");

let count = 0;

increaseButton.onclick = function () {
  count++;
  countLabel.textContent = count;
};
decreaseButton.onclick = function () {
  count--;
  countLabel.textContent = count;
};

resetButton.onclick = function () {
  count = 0;
  countLabel.textContent = count;
};
