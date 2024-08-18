const calcDisplay = document.querySelector("#display");
function appendToDisplay(value) {
  calcDisplay.value += value;
}
function clearDisplay() {
  calcDisplay.value = "";
}
function calculateResult() {
    const result = eval(calcDisplay.value);
    console.log(typeof result);
    if(typeof result !== "number" || result === Infinity){
        calcDisplay.value = "Division by zero is not allowed";
        setTimeout(clearDisplay, 1000);
    }else{
        calcDisplay.value = result;
    }
}
