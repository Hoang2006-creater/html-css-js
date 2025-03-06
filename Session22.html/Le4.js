let number = prompt("Mời bạn nhập vào dãy số cách nhau bằng dấu cách:");
let arr = number.split(" ").map(Number); 
let max = arr[0]; 

if (arr.some(isNaN)) {
    alert("Mời bạn nhập lại dãy số hợp lệ!");
} else {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    alert("Số lớn nhất trong dãy là: " + max);
}