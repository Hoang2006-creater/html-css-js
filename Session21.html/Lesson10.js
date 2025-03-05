let number;
do {
    let number1 = parseInt(prompt("Mời bạn nhập số nguyên bất kỳ: "));
} while (!isNaN(number1) && number1 > 0);
    for (let i = 2; i <=number1; i++) {
        if (number % i === 0) {
            found = false;
            break;
        }
    }
if (found) {
    console.log(`${number} là số nguyên tố.`);
} else {
    console.log(`${number} không phải là số nguyên tố.`);
}