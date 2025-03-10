let numbers = [];
let choice;
do {
    choice = prompt(`Chọn chức năng:
1. Nhập mảng
2. Hiển thị mảng
3. Tìm các phần tử chẵn và lẻ
4. Tính trung bình cộng của mảng
5. Xóa phần tử tại vị trí chỉ định
6.  Tìm phần tử lớn thứ hai trong mảng
7. Thoát`);
    switch (choice) {
        case '1':
            let n = parseInt(prompt("Nhập số phần tử của mảng: "));
            for (let i = 0; i < n; i++) {
                numbers.push(parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`)));
            }
            break;
        case '2':
            alert(`Các phần tử trong mảng:${numbers}`);
            break;
        case '3':
            if (numbers.length === 0) {
                alert("Mảng rỗng, vui lòng nhập mảng trước.");
            } else {
                for(let i =0;i<numbers.length;i++){
                    if(numbers[i] %2==0){
                        alert(`Phan tu chan la ${numbers[i]}`);
                    }else{
                        alert(`Phan tu le la: ${numbers[i]}`);
                    }
                }
            }
            break;
        case '4':
            let result = 0;
            let sum = 0;
            for (let i = 0; i < numbers.length; i++) {
                sum += numbers[i];
                result=sum / numbers.length;
            }
            alert("Trung binh cong cua mang la : "+result );
            break;
        case '5':
            let index = prompt("Moi ban nhap vi tri can xoa: ");
            let value = prompt("Moi ban nhap gia tri can xoa");
            numbers.splice(index,value);
            alert(`Mang sau khi sap xep la ${numbers}`);
            break;
        case '6':
            if (numbers.length < 2) {
                alert("Mảng phải có ít nhất hai phần tử!");
            } else {
                let max = numbers[0];
                let secondMax = numbers[1];
            
                if (max < secondMax) {
                    let temp = max;
                    max = secondMax;
                    secondMax = temp;
                }
                for (let i = 2; i < numbers.length; i++) {
                    if (numbers[i] > max) {
                        secondMax = max;
                        max = numbers[i];
                    } else if (numbers[i] > secondMax && numbers[i] < max) {
                        secondMax = numbers[i];
                    }
                }
            
                if (max === secondMax) {
                    alert("Không có phần tử lớn thứ hai!");
                } else {
                    alert("Phần tử lớn thứ hai là: " + secondMax);
                }
            }
            break;
        case '7':
            alert("Thoát chương trình");
            break;
        default:
            alert("Vui lòng nhập lựa chọn hợp lệ!");
    }
} while (choice !== '7');
