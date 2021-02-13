const binaryInput = document.querySelector('input#binary-input');
binaryInput.addEventListener('keypress', e => {
    const numbers = [0, 1];
    const keyPressed = Number(e.key);
    if (!numbers.includes(keyPressed)) e.preventDefault();
});
binaryInput.addEventListener('keyup', e => {
    const conversionTotal = convertBinaryToDecimal(e.target.value);
    return renderTotalInInputs(conversionTotal);
});

const decimalInput = document.querySelector('input#decimal-input');
decimalInput.addEventListener('keyup', e => {
    const conversionTotal = convertDecimalToBinary(e.target.value);
    return renderTotalInInputs(conversionTotal);
});
decimalInput.addEventListener('keypress', e => {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const keyPressed = Number(e.key);
    if (!numbers.includes(keyPressed)) e.preventDefault();
});

function convertBinaryToDecimal(value) {
    const reversedValue = String(value).split('').reverse();
    console.log(reversedValue);
    const total = {
        binary: String(value),
        decimal: 0,
    };
    reversedValue.forEach((item, key) => {
        const base = Math.pow(2, key);
        const value = base * Number(item);
        total.decimal += value;
    });
    total.decimal = String(total.decimal);

    return total;
}

function convertDecimalToBinary(value) {
    const total = {
        binary: '',
        decimal: String(value),
    };
    value = Number(value);
    if (value === 0) {
        total.decimal = '';
        return total;
    }
    const totalBinary = [];

    for (let i = 0; value !== 0; i++) {
        const rest = value % 2;
        value = Math.floor(value / 2);
        totalBinary.unshift(String(rest));
    }
    total.binary = String(totalBinary.join(''));

    return total;
}

function renderTotalInInputs(conversionTotal) {
    document.querySelector('input#binary-input').value =
        conversionTotal.binary === 0 ? '' : conversionTotal.binary;
    document.querySelector('input#decimal-input').value =
        conversionTotal.decimal === 0 ? '' : conversionTotal.decimal;
}
