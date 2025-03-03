let choice = parseFloat(prompt("Mời bạn nhập đổi tiền (VND) sang USD và ngược lại (1 hay 2)"));
switch (choice) {
    case 1:
        let cash = prompt("Mời bạn nhập số tiền cần đổi: ");
        let change = cash / 23000;
        alert(`${change} USD`);
        break;
    case 2:
        let cashUSD = prompt("Mời bạn nhập số tiền cần đổi: ");
        let changed = cashUSD * 23000;
        alert(`${changed} VND`);
        break;
    default:
        alert("Lựa chọn của bạn không hợp lệ");
}