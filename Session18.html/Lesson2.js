let num1 = parseFloat(prompt("Mời bạn nhập điểm môn Toán: "));
let num2 = parseFloat(prompt("Mời bạn nhập điểm môn Văn: "));
let num3 = parseFloat(prompt("Mời bạn nhập điểm môn Anh: "));
let result = (num1+num2+num3)/3;
if (result >=8.0){
    alert(`Trung bình điểm ${result} thuộc học sinh giỏi`);
}
else if (result >= 6.5 && result <= 7.9) {
    alert(`Trung bình điểm ${result} thuộc học sinh khá`);
} else if(result >= 5.0 && result<= 6.4){
    alert(`Trung bình điểm ${result} thuộc học sinh trung bình`);    
}else{
    alert(`Trung bình điểm ${result} thuộc học sinh yếu`);    
}
    

