let matrix = [];
let rows, cols;
let choice;

do {
    choice = parseInt(prompt(
        "Chọn chức năng:\n" +
        "1. Nhập mảng 2 chiều\n" +
        "2. Hiển thị mảng 2 chiều\n" +
        "3. Tính tổng các phần tử trong mảng\n" +
        "4. Tính tổng đường chéo chính\n" +
        "5. Tính tổng đường chéo phụ\n" +
        "6. Tính trung bình cộng các phần tử trong một hàng hoặc một cột\n" +
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
            if (matrix.length === 0) {
                alert("Mảng chưa được nhập!");
                break;
            }
            let output = matrix.map(row => row.join(" ")).join("\n");
            alert(output);
            break;

        case 3:
    if (matrix.length === 0) {
        alert("Mảng chưa được nhập!");
        break;
    }
    let sum = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            sum += matrix[i][j];
        }
    }
    alert("Tổng các phần tử trong mảng: " + sum);
    break;
        case 4: 
            if (matrix.length === 0 || rows !== cols) {
                alert("Mảng phải là ma trận vuông!");
                break;
            }
            let sumMainDiagonal = 0;
            for (let i = 0; i < rows; i++) {
                sumMainDiagonal += matrix[i][i];
            }
            alert("Tổng đường chéo chính: " + sumMainDiagonal);
            break;

        case 5: 
            if (matrix.length === 0 || rows !== cols) {
                alert("Mảng phải là ma trận vuông!");
                break;
            }
            let sumSecondaryDiagonal = 0;
            for (let i = 0; i < rows; i++) {
                sumSecondaryDiagonal += matrix[i][cols - 1 - i];
            }
            alert("Tổng đường chéo phụ: " + sumSecondaryDiagonal);
            break;

        case 6:
            if (matrix.length === 0) {
                alert("Mảng chưa được nhập!");
                break;
            }
            let option = parseInt(prompt("Chọn tính trung bình:\n1. Theo hàng\n2. Theo cột"));
            if (option === 1) { 
                let rowIndex = parseInt(prompt("Nhập chỉ số hàng: "));
                if (rowIndex >= 0 && rowIndex < rows) {
                    let sumRow = 0;
                    for (let j = 0; j < cols; j++) {
                        sumRow += matrix[rowIndex][j];
                    }
                    let avgRow = sumRow / cols;
                    alert(`Trung bình cộng của hàng ${rowIndex}: ${avgRow}`);
                } else {
                    alert("Chỉ số hàng không hợp lệ!");
                }
            } else if (option === 2) {
                let colIndex = parseInt(prompt("Nhập chỉ số cột: "));
                if (colIndex >= 0 && colIndex < cols) {
                    let sumCol = 0;
                    for (let i = 0; i < rows; i++) {
                        sumCol += matrix[i][colIndex];
                    }
                    let avgCol = sumCol / rows;
                    alert(`Trung bình cộng của cột ${colIndex}: ${avgCol}`);
                } else {
                    alert("Chỉ số cột không hợp lệ!");
                }
            } else {
                alert("Lựa chọn không hợp lệ!");
            }
            break;
        case 7:
            alert("Thoát chương trình.");
            break;

        default:
            alert("Lựa chọn không hợp lệ, vui lòng nhập lại.");
    }
} while (choice !== 7);
