let n = parseInt(prompt("Mời bạn nhập một số n bất kỳ: "));

if (isNaN(n)) {
    alert("Vui lòng nhập một số hợp lệ.");
} else if (n < 0) {
    alert(`Số ${n} không phải là số chính phương.`);
} else if (Number.isInteger(Math.sqrt(n))) {
    alert(`Số ${n} là số chính phương.`);
} else {                 
    alert(`Số ${n} không phải là số chính phương.`);
}
         