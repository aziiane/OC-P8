const decimalInput = document.querySelector('#decimalInput');
const binaryResult = document.querySelector('#binaryResult');
function convertToBinary() {
    binaryResult.textContent = '';
    const decimalValue = Number(decimalInput.value);
    const binaryValue = decimalValue.toString(2);
    if (isNaN(decimalValue)) {
        return;
    }
    binaryResult.textContent = binaryValue;
    return binaryValue;
}