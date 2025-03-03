let num1 = prompt("Mời bạn nhập số thứ nhất bất kỳ: ");
let num2 = prompt("Mời bạn nhập số thứ hai bất kỳ: ");
let num3 = prompt("Mời bạn nhập số thứ ba bất kỳ: ");
if (num1 > num2 && num1 > num3) {
    alert(` Số ${num1} là số lớn nhất.`);
} else if(num2 > num1 && num2 > num3){
    alert(` Số ${num2} là số lớn nhất.`);
} else if(num3 > num1 && num3 > num2) {
    alert(` Số ${num3} là số lớn nhất.`);
}
