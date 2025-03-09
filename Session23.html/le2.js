let numbers = [];
for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt(`Nhập số nguyên thứ ${i + 1}:`)); // Nhập số từ người dùng
    numbers.push(num); 
}
let maxValue = numbers[0];
let maxIndex = 0;
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxValue) {
        maxValue = numbers[i]; 
        maxIndex = i;    
     }
}
console.log("Mảng đã nhập:", numbers);
console.log("Số lớn nhất:", maxValue);
console.log("Vị trí của số lớn nhất:", maxIndex);
