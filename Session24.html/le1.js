let numbers = [];
let choice;
do {
    choice = prompt(`Chọn chức năng:
1. Nhập mảng
2. Hiển thị mảng
3. Tìm phần tử lớn nhất và nhỏ nhất
4. Tính tổng các phần tử
5. Tìm số lần xuất hiện của một phần tử
6. Sắp xếp mảng tăng dần
7. Thoát`);

    switch (choice) {
        case '1':
            let n = parseInt(prompt("Nhập số phần tử của mảng: "));
            for (let i = 0; i < n; i++) {
                numbers.push(parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`)));
            }
            break;
        case '2':
            console.log(`Các phần tử trong mảng:${numbers}`);
            break;
        case '3':
            if (numbers.length === 0) {
                alert("Mảng rỗng, vui lòng nhập mảng trước.");
            } else {
                let max = numbers[0];
                let min = numbers[0];
                for (let i = 1; i < numbers.length; i++) {
                    if (numbers[i] > max) max = numbers[i];
                    if (numbers[i] < min) min = numbers[i];
                }
                console.log(`Giá trị lớn nhất:${max}`);
                console.log(`Giá trị nhỏ nhất:${min}`);
                break;
            }
            break;
        case '4':
            let sum = 0;
            for (let i = 0; i < numbers.length; i++) {
                sum += numbers[i];
            }
            alert("Tổng các phần tử trong mảng: " + sum);
            break;
        case '5':
            let target = Number(prompt("Nhập số cần tìm trong mảng:"));
            let count = 0;
            for (let i = 0; i < numbers.length; i++) {
                if (numbers[i] === target) {
                    count++;
                }
            }
            alert(`Số ${target} xuất hiện ${count} lần trong mảng.`);
            break;
        case '6':
            for (let i = 0; i < numbers.length - 1; i++) {
                for (let j = i + 1; j < numbers.length; j++) {
                    if (numbers[i] > numbers[j]) {
                        let temp = numbers[i];
                        numbers[i] = numbers[j];
                        numbers[j] = temp;
                    }
                }
            }
            alert("Mảng sau khi sắp xếp: " + numbers.join(", "));
            break;
        case '7':
            alert("Thoát chương trình");
            break;
        default:
            alert("Vui lòng nhập lựa chọn hợp lệ!");
    }
} while (choice !== '7');
