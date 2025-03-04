let number = parseInt(prompt("Mời bạn nhập số bất kỳ: "));
if (!isNaN(number) && number > 0) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum += i;
    }
    alert(`Tổng các số từ 1 đến ${number} là: ${sum}`);
} else {
    alert("Vui lòng nhập một số nguyên dương hợp lệ.");
}