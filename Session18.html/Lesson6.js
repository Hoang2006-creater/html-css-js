let year = prompt("Mời bạn nhập năm bất kỳ: ");
if((year % 4 == 0 ) && (year % 100 !=0 ) || (year % 400 == 0)){
    alert(` ${year} là năm nhuận`);
}else{
    alert(` ${year} là năm không nhuận`);
}