let array = [];

while (true) {
    let choice = parseInt(prompt(`
                        MENU
        1. Nhập số phần tử cần nhập và giá trị các phần tử
        2. In ra giá trị các phần tử đang quản lý
        3. In ra giá trị các phần tử chẵn và tính tổng
        4. In ra giá trị lớn nhất và nhỏ nhất trong mảng
        5. In ra các phần tử là số nguyên tố trong mảng và tính tổng
        6. Nhập vào một số và thống kê trong mảng có bao nhiêu phần tử đó
        7. Thêm một phần tử vào vị trí chỉ định\n
        8. Thoát
        Lựa chọn của bạn:`));

    switch (choice) {
        case 1:
            let n = parseInt(prompt("Nhập số phần tử của mảng: "));
            array = [];
            for (let i = 0; i < n; i++) {
                array.push(parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`)));
            }
            break;

        case 2:
            console.log(`Các phần tử trong mảng:${array}`);
            break;

        case 3:
            let evenNumbers = [];
            let evenSum = 0;
            for (let i = 0; i < array.length; i++) {
                if (array[i] % 2 === 0) {
                    evenNumbers.push(array[i]);
                    evenSum += array[i];
                }
            }
            console.log(`Các phần tử chẵn:${evenNumbers}` );
            console.log(`Tổng các số chẵn:${evenSum}`);
            break;

        case 4:
            let max = array[0];
            let min = array[0];
            for (let i = 1; i < array.length; i++) {
                if (array[i] > max) max = array[i];
                if (array[i] < min) min = array[i];
            }
            console.log(`Giá trị lớn nhất:${max}`);
            console.log(`Giá trị nhỏ nhất:${min}`);
            break;

        case 5:
            let primes = [];
            let primeSum = 0;
            for (let i = 0; i < array.length; i++) {
                let num = array[i];
                let isPrime = num > 1;
                for (let j = 2; j * j <= num; j++) {
                    if (num % j === 0) {
                        isPrime = false;
                        break;
                    }
                }
                if (isPrime) {
                    primes.push(num);
                    primeSum += num;
                }
            }
            console.log(`Các số nguyên tố: ${primes}`);
            console.log(`Tổng các số nguyên tố:${primeSum}`);
            break;
        case 6:
            let searchNum = parseInt(prompt("Nhập số cần tìm: "));
            let count = 0;
            for (let i = 0; i < array.length; i++) {
                if (array[i] === searchNum) count++;
            }
            console.log(`Số lần xuất hiện của ${searchNum}:`, count);
            break;

        case 7:
            let value = parseInt(prompt("Nhập giá trị cần thêm: "));
            let index = parseInt(prompt("Nhập vị trí cần chèn: "));
            if (index >= 0 && index <= array.length) {
                for (let i = array.length; i > index; i--) {
                    array[i] = array[i - 1];
                }
                array[index] = value;
                console.log("Mảng sau khi thêm phần tử:", array);
                alert("Mảng sau khi thêm phần tử: " + array);
            } else {
                alert("Vị trí không hợp lệ!");
            }
            break;

        case 8:
            alert("Thoát chương trình.");
            console.log("Thoát chương trình.");
            exit();
            break;

        default:
            alert("Lựa chọn không hợp lệ, vui lòng nhập lại.");
            break;
    }
}
