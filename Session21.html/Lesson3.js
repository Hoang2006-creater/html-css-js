let password = "hello";
let loop = true;

while (loop === true) {
    let answer = prompt("Mời bạn nhập vào mật khẩu cần đoán");
   
    if (answer === password) {
        alert("Bạn đã nhập đúng");
        loop = false;
    } else {
        console.log("Sai rồi, mời bạn nhập lại mật khẩu !!!");
    }
}