let date1 =new Date(prompt("Mời bạn nhập ngày tháng thứ nhất (YYYY-MM-DD): "));
let date2 =new Date(prompt("Mời bạn nhập ngày tháng thứ 2 (YYYY-MM-DD): "));
let time = date2 - date1;
let dateChange= time/(1000 * 60 * 60 * 24);
alert(`Số ngày chênh lệch là:` +dateChange );

