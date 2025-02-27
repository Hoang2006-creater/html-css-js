let cash = parseInt(prompt("Mời bạn nhập số tiền cần gửi: "));
let month= parseFloat(prompt("Mời bạn nhập số tháng cần gửi: "));
let rate = month*(4.3/100/12);
let result=cash*month;
alert(result);
