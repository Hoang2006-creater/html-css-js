function capitalizeWords(str) {
    let words = str.toLowerCase().split(' ');
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 0) {
            words[i] = words[i][0].toUpperCase() + words[i].slice(1);
        }
    }
    return words.join(' ');
}

let input = prompt("Nhập vào một chuỗi:");
if (input !== null) {
    let output = capitalizeWords(input);
    alert(`Chuỗi sau khi chuyển đổi: "${output}"`);
}
