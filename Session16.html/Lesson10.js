let string=prompt("Mời bạn nhập chuỗi bất kỳ:");
let newString= string.trim();
let count=1;
for(let i =0;i<newString.length-1;i++){
    if(newString[i]!== " "&& newString[i+1]==" "){
        count++;
    }

}
alert(`Số lượng từ trong chuỗi ${string} là : ${count}`);