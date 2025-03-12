function maxValue(arr) {
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
    let max= arr[0];
    let maxIndex=0;
    arr.forEach((value,index) => {
        if(value>max){
            max=value;
            maxIndex=index;
    }
    });
    console.log(`Gia tri lon nhat co trong mang la:${max}`);
    console.log(`Vi tri cua gia tri lon nhat la :${maxIndex}`);
}
maxValue();