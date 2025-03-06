let input = prompt("Mời bạn nhập vào mảng (các số cách nhau bởi dấu phẩy)");
let arr = input.split(",");

let check = true;
for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) { 
        check = false;
        break;
    }
}

if (check) {
    let numberArr = arr.map(Number); 
    let reversedArr = numberArr.reverse();
    console.log("Mảng đảo ngược:", reversedArr);
} else {
    console.log("Dữ liệu nhập vào không hợp lệ!");
}
