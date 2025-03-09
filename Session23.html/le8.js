let n = parseInt(prompt("Moi ban nhap so phan tu cua mang: "));
if(n<0){
    console.log("So luong phan tu khong duoc nho hon 0");
}else{
    let arr=[];
    for(let i=0;i<n;i++){
        arr.push(parseInt(prompt(`Moi ban nhap phan tu vao mang: `)));
    }
}
let isFibonacci = true;
if(arr.length <2){
    isFibonacci = false;
} else{
    for(let i=2;i <arr.length;i++){
        if (arr[i] !== arr[i - 1] + arr[i - 2]) {
            isFibonacci = false;
            break;
    }
}
}
console.log(`${isFibonacci}`);