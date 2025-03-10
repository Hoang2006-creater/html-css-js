let numbers = [];
let choice;
do {
    choice = prompt(`Chọn chức năng:
1. Nhập mảng
2. Hiển thị mảng
3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó
4. Tính tổng và trung bình cộng của các số dương trong mảng
5. Đảo ngược mảng
6. Kiểm tra mảng có đối xứng không
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
                let max=numbers[0];
                let maxIndex=0;
                for(let i =1;i<numbers.length;i++){
                    if(numbers[i]>max){
                        max=numbers[i];
                        maxIndex=i;
                        alert(`Phan tu lon nhat la ${max}`);
                        alert(`Vi tri phan tu lon nhat la ${maxIndex}`);

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
            alert(" Tong cua mang la : "+sum)
            alert("Trung binh cong cua mang la : "+result );
            break;
        case '5':
            let newNumbers=numbers.reverse();
            alert(`Mang sau khi sap xep la: ${newNumbers}`);
            break;
        case '6':
            let isSymmetric = true;
            for (let i = 0; i < numbers.length / 2; i++) {
                if (numbers[i] !== arr[numbers.length - 1 - i]) {
                    isSymmetric = false;
                    break;
                }
            }
            console.log(isSymmetric ? "Mảng đối xứng" : "Mảng không đối xứng");
        case '7':
            alert("Thoát chương trình");
            break;
        default:
            alert("Vui lòng nhập lựa chọn hợp lệ!");
    }
} while (choice !== '7');
