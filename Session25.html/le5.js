function count(arr) {
    if (!Array.isArray(arr)) {
        return "Dữ liệu không hợp lệ";
    }

    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number" && arr[i] > 0 && Number.isInteger(arr[i])) {
            count++;
        }
    }

    if (count === 0) {
        return "Mảng không có số nguyên dương";
    }

    return count;
}
console.log(count([1, 2, 3, -1, 4.5, 0, 7])); 
console.log(count([-3, -2, -1, 0]));          
console.log(count(["text", 3, 4, 5.5, 10]));  
console.log(count("abc"));                    
