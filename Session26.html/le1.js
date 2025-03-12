function filterArray(arr) {
    if (!Array.isArray(arr)) {
        arr = [];
        for (let i = 0; i < 10; i++) {
            let num = prompt("Mời bạn nhập giá trị vào mảng:");
            num = Number(num); 
            if (!isNaN(num)) {
                arr.push(num); 
            }
        }
    }
    if (!Array.isArray(arr)) {
        return "Dữ liệu không hợp lệ";
    }
    if (arr.length === 0) {
        return "Mảng không có phần tử nào";
    }
 
    let result = arr.filter(function (element) {
        return typeof element === "number" && element >= 10;
    });
 
    return result;
 }
 
 console.log(filterArray());
 