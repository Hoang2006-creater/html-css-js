let viethoa = prompt("Mời bạn nhập ký tự cần viết hoa: ");

function vietHoaChuDau(str) {
  let array1 = str.split(' ');
  let newarray1 = [];

  for (let x = 0; x < array1.length; x++) {
    newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
  }

  return newarray1.join(' ');
}

let ketQua = vietHoaChuDau(viethoa);
alert(ketQua);