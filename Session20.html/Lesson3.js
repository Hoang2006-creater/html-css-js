let inputNumber = prompt("Nhập một số nguyên: ");
let num = parseInt(inputNumber);

if (!isNaN(num)) {
    let str = num.toString();
    let length = str.length;
    
    if (str[0] === str[length - 1]) {
        console.log(`${num} là số đối xứng`);
    } else {
        console.log(`${num} không phải số đối xứng.`);
    }
} else {
    console.log("Vui lòng nhập một số nguyên hợp lệ.");
}
