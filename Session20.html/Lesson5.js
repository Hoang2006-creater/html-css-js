
let a = parseInt(prompt("Nhập số a:"));
let b = parseInt(prompt("Nhập số b:"));
let result = 1;
if (!isNaN(a) && !isNaN(a)) {
for (let i = 0; i < b; i++) {
    result *= a;
}
alert(`${a}^${b} = ${result}`);
}else{
    alert("số không hợp lệ .")
}
