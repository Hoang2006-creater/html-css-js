let number = parseInt(prompt("Mời bạn nhập số bất kỳ: "));
if (!isNaN(number) && number > 0) {
    let sum = 0;
    for (let i = 5; i <= number; i+=5) {
        sum += i;
    }
    alert(`Các số chia hết cho 5 từ 1 đến ${number} là ${sum}`);
} else {
    alert("Dữ liệu nhập không hợp lệ.");
}
