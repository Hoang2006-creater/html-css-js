let a =parseInt(prompt("Mời bạn nhập số a: "));
let b =parseInt(prompt("Mời bạn nhập số b: "));
let operation = prompt("Mời bạn nhập các phép tính (+,-,*,/)");
let result;
if (operation == "+"){
    result=a+b;
}else if(operation == "-"){
    result=a-b;
}else if(operation == "*"){
    result=a*b;
}else if(operation == "/"){
    result=a/b;
}
alert(result);
