let soLe = 0;
let soChan=0;
for(let i = 0;i<5;i++){
    let a = parseInt(prompt("Mời bạn nhập số bất kỳ: "));
    if (!isNaN(a) && a > 0 && a % 2 !== 0) {
        soLe+=1;
    } else if((!isNaN(a) && a > 0 && a % 2 == 0)) {
        soChan+=1;
    }else{
        alert("Mời bạn nhập số hợp lệ");
    }
}
alert(` Số lượng số chẵn lẻ là: ${soChan} và ${soLe}`);