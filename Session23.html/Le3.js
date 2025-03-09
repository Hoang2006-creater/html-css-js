let arr=[];
let n=parseInt(prompt("Moi ban nhap so phan tu: "));
let count=0;
for(let i =0;i<n;i++){
    let number=parseFloat(prompt("Moi ban nhap cac gia tri vao mang: "));
    arr.push(number);
    if(number<0){
        count++;
    }
}
console.log(`So phan tu nguyen am la ${count}`);
