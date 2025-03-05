let sum = 0;
for (let i = 0; i < 5; i++) {
    let a = parseInt(prompt("Mời bạn nhập số bất kỳ: "));
    if (!isNaN(a) && a > 0 && a % 2 !== 0) {
        sum += a;
    } else {
        alert("Vui lòng nhập một số lẻ hợp lệ.");
    }
}
alert(`Tổng 5 số nguyên lẻ là ${sum}`);
