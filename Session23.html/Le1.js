let numbers = [];
for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt(`Nhập số nguyên thứ ${i + 1}:`)); // Nhập số từ người dùng
    numbers.push(num); 
}
for(let i =0;i<numbers.length;i++){
    if(numbers[i]>= 10){
        console.log(`${numbers[i]}`);
    }
}