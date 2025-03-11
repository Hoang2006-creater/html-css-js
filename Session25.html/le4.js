function primeNumber(num) {
    if (num != Math.floor(num) || num < 1) {
        return "dữ liệu không hợp lệ";
    }

    if (num < 2) {
        return "không phải là số nguyên tố";
    }

    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return "không phải là số nguyên tố";
        }
    }
    
    return "là số nguyên tố";
}
console.log(primeNumber(17));   
console.log(primeNumber(6));     
console.log(primeNumber("text"));
console.log(primeNumber(4.5));   
console.log(primeNumber("7"));  
