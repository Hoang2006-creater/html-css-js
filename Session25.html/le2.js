function sumTwoIntegers(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return "dữ liệu không hợp lệ";
    }
    return a + b;
}
console.log(sumTwoIntegers(2, 6));      
console.log(sumTwoIntegers(3, "text")); 
console.log(sumTwoIntegers(7, -7));     
console.log(sumTwoIntegers(4.5, 3));    
