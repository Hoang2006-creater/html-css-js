function evenNumber(arr) {
    if (!Array.isArray(arr)) {
        return "Dữ liệu không hợp lệ";
    }
    
    let evenNumbers = []; 
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        }
    }
    
    if (evenNumbers.length === 0) {
        return "Mảng không có số chẵn";
    }
    
    return evenNumbers.join(", "); 
}

console.log(evenNumber([2, 4, 8, 1, 9])); 
console.log(evenNumber([1, 3, 5, 7])); 
console.log(evenNumber("hello")); 
