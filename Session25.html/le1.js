function findMinValue(arr) {
    if (!Array.isArray(arr)) {
        return "giá trị không hợp lệ";
    }
    if (arr.length === 0) {
        return "mảng không chứa phần tử";
    }

    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (typeof arr[i] !== "number") {
            return "giá trị không hợp lệ";
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return `phần tử nhỏ nhất trong mảng là ${min}`;
}

console.log(findMinValue([2, 4, 8, 1, 9])); 
console.log(findMinValue("abc")); 

