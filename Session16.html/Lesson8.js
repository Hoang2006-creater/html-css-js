const a = parseFloat(prompt("Nhap so tu nhien a: "));
const b = parseFloat(prompt("Nhap so tu nhien b: "));
const c = parseFloat(prompt("Nhap so tu nhien c: "));
let largest;
if(a>=b && a>=c){
    largest=a;
}else if(b>=a && b>= c){
    largest=b;
}else { 
    largest=c;
}
alert("Số lớn nhất là: " +largest);