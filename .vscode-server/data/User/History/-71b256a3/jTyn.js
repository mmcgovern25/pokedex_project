// TODO: Write your gambling application here.
const balance = document.querySelector("#balance");
const scratchcards = document.querySelectorAll(".scratchcard");
const price = 10;

scratchcards.forEach((scratchcard) => {
  scratchcard.addEventListener("click", () => {
    const currentBalance = parseInt(balance.innerText, 10);
    const scratchcardAmount = parseInt(scratchcard.dataset.amount, 10);
    if (currentBalance > 0 && scratchcard.dataset.scratched !== "true") {
      scratchcard.dataset.scratched = "true";
      balance.innerText = currentBalance - price + scratchcardAmount;
      scratchcard.innerText = `${scratchcardAmount}€`;
    }
  });
});
