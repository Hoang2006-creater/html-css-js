let arr=[];
let n=parseInt(prompt("Moi ban nhap so phan tu: "));
let sum=0;
for(let i =0;i<n;i++){
    let number=parseFloat(prompt("Moi ban nhap cac gia tri vao mang: "));
    arr.push(number);
    if(!isNaN(value) && value !== ""){
        sum+=parseFloat(value);
    }
}
console.log(`Tong cac ky tu la ${sum}`);
