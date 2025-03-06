let numbers=[2,5,7,4,1,8,6,2,5,7];
let input= +prompt("Moi ban nhap so bat ky: ");
let result=0;
if(isNaN(input)){
    alert("Ban nhap sai du lieu");
}else{
    for(let i =0;i<numbers.length;i++){
        if(numbers[i]===input){
            result++;
        }
    }
    console.log(` Số ${input} xuất hiện ${result} lần `);
}