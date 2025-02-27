let x=parseInt(prompt("Mời bạn nhập vào một số: "));
x = x.toLocaleString('vi', {style : 'currency', currency : 'VND'});
alert(x);