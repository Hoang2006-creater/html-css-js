let n = parseInt(prompt("Nhập số phần tử của mảng: "));
if (n < 0) {
    console.log("Số lượng phần tử không được nhỏ hơn 0");
} else {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(parseInt(prompt(`Nhap phan tu vao mang`)));
    }
    
    if (arr.length < 2) {
        console.log("Không có số lớn thứ hai");
        alert("Không có số lớn thứ hai");
    } else {
        let max1 = arr[0], max2 = arr[0];
        for (let num of arr) {
            if (num > max1) {
                max2 = max1;
                max1 = num;
            } else if (num > max2 && num < max1) {
                max2 = num;
            }
        }
        
        if (max1 === max2) {
            console.log("Không có số lớn thứ hai");
        } else {
            console.log("Số lớn thứ hai trong mảng là:", max2);
        }
    }
}
