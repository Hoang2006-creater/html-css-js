let a, b, c;
let isNumber;

do {
    a = parseFloat(prompt("Mời bạn nhập số a: "));
    b = parseFloat(prompt("Mời bạn nhập số b: "));
    c = parseFloat(prompt("Mời bạn nhập số c: "));
    isNumber = !isNaN(a) && !isNaN(b) && !isNaN(c);
    if (!isNumber) {
        console.log("Bạn nhập sai! Vui lòng nhập lại số hợp lệ.");
    }
} while (!isNumber);

let result = b * b - 4 * a * c;
if (result < 0) {
    alert("Phương trình vô nghiệm");
} else if (result === 0) {  
    let x = -b / (2 * a);
    alert(`Phương trình có nghiệm kép: x = ${x}`);
} else {
    let x1 = (-b + Math.sqrt(result)) / (2 * a);
    let x2 = (-b - Math.sqrt(result)) / (2 * a);
    alert(`Phương trình có 2 nghiệm phân biệt: x1 = ${x1}, x2 = ${x2}`);
}
