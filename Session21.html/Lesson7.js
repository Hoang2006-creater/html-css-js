
let principal = parseFloat(prompt("Nhập số tiền gửi ban đầu: "));
let interestRate = parseFloat(prompt("Nhập lãi suất hàng tháng (%): ")) / 100;
let months = parseInt(prompt("Nhập số tháng gửi: "));

if (isNaN(principal) || isNaN(interestRate) || isNaN(months) || principal <= 0 || interestRate <= 0 || months <= 0) {
    console.log("Vui lòng nhập số hợp lệ!");
} else {
    let totalAmount = principal;
    for (let i = 1; i <= months; i++) {
        let interest = totalAmount * interestRate;
        totalAmount += interest;
        console.log(`Tháng ${i}: Tiền lãi = ${interest.toFixed(2)}, Tổng tiền = ${totalAmount.toFixed(2)}`);
    }
    
    console.log(`\nSau ${months} tháng, tổng số tiền nhận được: ${totalAmount.toFixed(2)}`);
}
