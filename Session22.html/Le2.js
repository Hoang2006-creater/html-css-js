let numbers = [5, 10, 15, 20, 25, 30, 35, 40];
let userInput = +prompt("Nhập vào một số bất kỳ:");
if (isNaN(userInput)) {
    console.log("Vui lòng nhập một số hợp lệ");
} else {
    if (numbers.includes(userInput)) {
        console.log("Bingo");
    } else {
        console.log("Chúc bạn may mắn lần sau");
    }
}
