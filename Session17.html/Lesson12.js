const n = parseInt(prompt("Nhập một số: "));
let binary = "";
let num = n;

while (num > 0) {
    binary = (num % 2) + binary;
    num = Math.floor(num / 2);
} 

alert(binary);