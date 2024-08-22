const decimalInput = document.querySelector('#decimalInput');
const binaryResult = document.querySelector('#binaryResult');

function convertToBinary() {
    let decimalValue = decimalInput.value
    if (decimalValue === 0) {
        return '0';
    }

    let binary = 0;
    while (decimalValue > 0) {
        let remainder = decimalValue % 2;
        binary = remainder + binary;
        decimalValue = Math.floor(decimalValue / 2);
    }
    binaryResult.textContent = binary;
    return binary;
}