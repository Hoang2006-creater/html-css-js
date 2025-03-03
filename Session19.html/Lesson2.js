let alpha =(prompt("Mời bạn nhập ký tự bất kỳ: "));
if(alpha >='a' && alpha <='z' ||alpha >= 'A'  && alpha <='Z') {
    alert(` Ký tự ${alpha} là chữ cái`);
} else{
    alert(` Ký tự ${alpha} không phải chữ cái`);
}