let month = parseInt(prompt("Mời bạn nhập tháng bất kỳ (1-12): "));

switch (month) {
    case 1: case 2: case 3:
        alert(` Mùa xuân`);
        break;
    case 4: case 5: case 6:
        alert(` Mùa hạ`);
        break;
    case 7: case 8: case 9:
        alert(` Mùa thu`);
        break;
    case 10: case 11: case 12:
        alert(` Mùa đông`);
        break;
    default:
        alert("Số tháng bạn nhập không hợp lệ! Vui lòng nhập từ 1 đến 12.");
}
