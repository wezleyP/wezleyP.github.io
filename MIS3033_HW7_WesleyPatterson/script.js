let total = 0.00;
let input = document.querySelector("#input");
let btn = document.querySelector("#btn");
let btn2 = document.querySelector("#btn2");
let text = document.querySelector("#total");

function buttonClicked() {

  let inputValue = input.value.trim();
  if (inputValue !== "" && !isNaN(parseFloat(inputValue))) {

    let numericValue = parseFloat(inputValue);
  
    total += (numericValue * 44.99);


    text.textContent = total.toFixed(2); 
    input.value = "";
  } else {
    alert("Please enter a valid number.");
  }
}

function buttonClicked2() {
  total = 0.00;
  text.textContent = total.toFixed(2);
  input.value = "";
}
btn.addEventListener("click", buttonClicked);
btn2.addEventListener("click", buttonClicked2);

