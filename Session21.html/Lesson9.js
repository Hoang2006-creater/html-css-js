let number = parseInt(prompt("Nhập một số nguyên: "));
let found = true;

if (number < 2) {
    found = false;
} else {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            found = false;
            break;
        }
    }
}

if (found) {
    console.log(`${number} là số nguyên tố.`);
} else {
    console.log(`${number} không phải là số nguyên tố.`);
}
