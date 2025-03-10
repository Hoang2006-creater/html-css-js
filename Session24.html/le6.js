let str = "";
let choice;

do {
    choice = parseInt(prompt(
        "Chọn chức năng:\n" +
        "1. Nhập chuỗi\n" +
        "2. Hiển thị chuỗi\n" +
        "3. Tính độ dài của chuỗi\n" +
        "4. Đếm số lần xuất hiện của một ký tự\n" +
        "5. Kiểm tra chuỗi có phải là chuỗi đối xứng không\n" +
        "6. Chuyển đổi chuỗi thành chữ in hoa các ký tự đầu tiên của từ\n" +
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
                alert("Độ dài của chuỗi: " + str.length);
            }
            break;

        case 4:
            if (str === "") {
                alert("Chuỗi chưa được nhập!");
            } else {
                let charToFind = prompt("Nhập ký tự cần đếm:");
                let count = 0;
                for (let i = 0; i < str.length; i++) {
                    if (str[i] === charToFind) {
                        count++;
                    }
                }
                alert(`Ký tự '${charToFind}' xuất hiện ${count} lần trong chuỗi.`);
            }
            break;

        case 5:
            if (str === "") {
                alert("Chuỗi chưa được nhập!");
            } else {
                let reversedStr = str.split("").reverse().join("");
                if (str === reversedStr) {
                    alert("Chuỗi là chuỗi đối xứng.");
                } else {
                    alert("Chuỗi không phải là chuỗi đối xứng.");
                }
            }
            break;

        case 6:
            if (str === "") {
                alert("Chuỗi chưa được nhập!");
            } else {
                let words = str.split(" ");
                for (let i = 0; i < words.length; i++) {
                    if (words[i].length > 0) {
                        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
                    }
                }
                str = words.join(" ");
                alert("Chuỗi sau khi chuyển đổi: " + str);
            }
            break;

        case 7:
            alert("Thoát chương trình.");
            break;

        default:
            alert("Lựa chọn không hợp lệ, vui lòng nhập lại.");
    }
} while (choice !== 7);
