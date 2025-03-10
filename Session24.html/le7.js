let str = "";
let choice;
do {
    choice = parseInt(prompt(
        "Chọn chức năng:\n" +
        "1. Nhập chuỗi\n" +
        "2. Hiển thị chuỗi\n" +
        "3. Loại bỏ các khoảng trắng ở đầu và cuối chuỗi\n" +
        "4. Đảo ngược chuỗi ký tự\n" +
        "5. Đếm số lượng từ trong chuỗi ký tự\n" +
        "6. Tìm kiếm và thay thế ký tự trong chuỗi\n" +
        "7. Thoát chương trình"
    ));

    switch (choice) {
        case 1:
            str = prompt("Nhập chuỗi:");
            break;

        case 2:
            if (str === "") {
                alert("Chuỗi chưa được nhập!");
            } else {
                alert("Chuỗi hiện tại: " + str);
            }
            break;

        case 3:
            if (str === "") {
                alert("Chuỗi chưa được nhập!");
            } else {
                str = str.trim(); 
                alert("Chuỗi sau khi loại bỏ khoảng trắng: " + str);
            }
            break;

        case 4:
            if (str === "") {
                alert("Chuỗi chưa được nhập!");
            } else {
                let reversedStr = str.split("").reverse().join("");
                alert("Chuỗi sau khi đảo ngược: " + reversedStr);
            }
            break;

        case 5:
            if (str === "") {
                alert("Chuỗi chưa được nhập!");
            } else {
                let count = 0;
                let inWord = false;
        
                for (let i = 0; i < str.length; i++) {
                    if (str[i] !== " ") {
                        if (!inWord) {
                            count++;  // Bắt đầu một từ mới
                            inWord = true;
                        }
                    } else {
                        inWord = false;
                    }
                }
        
                alert("Số lượng từ trong chuỗi: " + count);
            }
            break;

        case 6:
            if (str === "") {
                alert("Chuỗi chưa được nhập!");
            } else {
                let charToFind = prompt("Nhập ký tự cần tìm:");
                if (!str.includes(charToFind)) {
                    alert(`Ký tự '${charToFind}' không có trong chuỗi.`);
                } else {
                    let charToReplace = prompt(`Nhập ký tự thay thế cho '${charToFind}':`);
                    let newStr = "";
        
                    for (let i = 0; i < str.length; i++) {
                        if (str[i] === charToFind) {
                            newStr += charToReplace;
                        } else {
                            newStr += str[i]; 
                        }
                    }
        
                    alert("Chuỗi sau khi thay thế: " + newStr);
                }
            }
            break;

        case 7:
            alert("Thoát chương trình.");
            break;

        default:
            alert("Lựa chọn không hợp lệ, vui lòng nhập lại.");
    }
} while (choice !== 7);
