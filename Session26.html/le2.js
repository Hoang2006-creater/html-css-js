function filterArray(arr) {
         arr = [];
        for (let i = 0; i < 2; i++) {
            let input = prompt("Mời bạn nhập giá trị vào mảng:");
            arr.push(input);
        }
    if (!Array.isArray(arr)) {
        return "Dữ liệu không hợp lệ";
    }
    if (arr.length === 0) {
        return "Mảng không có phần tử nào";
    }
    let result = arr.filter(function (element) {
        return typeof element === "string" && element.length > 5;
    });
    if (result.length === 0) {
       return "Không có chuỗi nào dài hơn 5 ký tự";
   } else {
       return result;
   }
 }
 
 console.log(filterArray());
 