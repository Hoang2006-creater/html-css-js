let input = prompt("Mời bạn nhập chuỗi bất kỳ: ");
let search = prompt("Mời bạn nhập ký tự cần tìm kiếm: ");
let found = false; 

for (let i = 0; i < input.length; i++) {
    if (input[i] === search) {
        found = true;
        break; 
    }
}

if (found) {
    alert("Ký tự có trong chuỗi");
} else {
    alert("Ký tự không có trong chuỗi");
}
