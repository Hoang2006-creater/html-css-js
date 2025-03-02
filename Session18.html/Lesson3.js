let name = prompt("Mời bạn nhập tên của người dùng:" );
if( name === "ADMIN") {
    let password=prompt("Mời bạn nhập mật khẩu: ");
    if( password === "TheMaster"){
        alert("Welcome");
    }
    else if(password === null || password === ""){
        alert("Cancelled");
    }
    else{
        alert("Wrong password");
    }
}else if(password === null || password === ""){
    alert("Cancelled");
}else{
    alert("I Don't know you");
}