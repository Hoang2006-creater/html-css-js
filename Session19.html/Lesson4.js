let number = parseFloat(prompt("Mời bạn nhập một sô bất kỳ"));
if (number % 3 == 0 && number % 5 == 0 ) {
    alert(`Số ${number} chia hết cho cả 3 và 5 `);
}else{
    alert(`Số ${number} không chia hết cho cả 3 và 5 `);
}