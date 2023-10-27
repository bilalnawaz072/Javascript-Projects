let bill = document.getElementById("bill");
let tip = document.getElementById("tip");
let people = document.getElementById("people");
let calculate = document.getElementById("calculate");
let result = document.getElementById("result");

calculate.addEventListener("click", function () {
  let billValue = bill.value;
  let tipValue = tip.value;
  let peopleValue = people.value;

  if (billValue === "" || tipValue === "" || peopleValue === "") {
    result.innerHTML = "Please enter all fields";
  } else {
    let tipAmount = (billValue * tipValue) / 100;
    let totalAmount = (billValue * (1 + tipValue / 100)) / peopleValue;
    result.innerHTML = `Tip: <span style="color: purple;">$${tipAmount.toFixed(
      2
    )}</span><br>Total: <span style="color: teal;">$${totalAmount.toFixed(
      2
    )}</span>`;
  }
});
