let matrix = [];
let rows, cols;
let choice;
do {
    choice = parseInt(prompt(
        "Chọn chức năng:\n" +
        "1. Nhập mảng 2 chiều\n" +
        "2. Hiển thị mảng 2 chiều\n" +
        "3. Tính tổng các phần tử trong mảng\n" +
        "4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó\n" +
        "5. Tính trung bình cộng các phần tử của một hàng cụ thể\n" +
        "6. Đảo ngược các hàng trong mảng\n" +
        "7. Thoát chương trình"
    ));

    switch (choice) {
        case 1:
            rows = parseInt(prompt("Nhập số hàng: "));
            cols = parseInt(prompt("Nhập số cột: "));
            matrix = [];
            for (let i = 0; i < rows; i++) {
                matrix[i] = [];
                for (let j = 0; j < cols; j++) {
                    matrix[i][j] = parseInt(prompt(`Nhập phần tử tại vị trí [${i}][${j}]:`));
                }
            }
            break;
        
        case 2:
            let output = "";
            for (let i = 0; i < matrix.length; i++) {
                output += matrix[i].join(" ") + "\n";
            }
            alert(output);
            break;
        
        case 3:
            let sum = 0;
            for (let i = 0; i < matrix.length; i++) {
                for (let j = 0; j < matrix[i].length; j++) {
                    sum += matrix[i][j];
                }
            }
            alert("Tổng các phần tử trong mảng: " + sum);
            break;
        case 4:
            let max = matrix[0][0];
            let maxRow = 0, maxCol = 0;
            for (let i = 0; i < matrix.length; i++) {
                for (let j = 0; j < matrix[i].length; j++) {
                    if (matrix[i][j] > max) {
                        max = matrix[i][j];
                        maxRow = i;
                        maxCol = j;
                    }
                }
            }
            alert(`Phần tử lớn nhất: ${max} tại vị trí [${maxRow}][${maxCol}]`);
            break;
        
        case 5:
            let rowIndex = parseInt(prompt("Nhập chỉ số hàng: "));
            if (rowIndex >= 0 && rowIndex < matrix.length) {
                let sumRow = 0;
                for (let j = 0; j < matrix[rowIndex].length; j++) {
                    sumRow += matrix[rowIndex][j];
                }
                let avg = sumRow / matrix[rowIndex].length;
                alert(`Trung bình cộng của hàng ${rowIndex}: ${avg}`);
            } else {
                alert("Chỉ số hàng không hợp lệ!");
            }
            break;
        case 6:
            for (let i = 0; i < matrix.length; i++) {
                matrix[i].reverse();
            }
            alert("Các hàng trong mảng đã được đảo ngược!");
            break;
        
        case 7:
            alert("Thoát chương trình.");
            break;
        
        default:
            alert("Lựa chọn không hợp lệ, vui lòng nhập lại");
   }
        }while(choice!=7);