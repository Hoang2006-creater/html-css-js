function isPalindrome(str) {
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

let input = prompt("Nhập vào một chuỗi:");
if (input !== null) {
    if (isPalindrome(input)) {
        alert(`"${input}" là chuỗi đối xứng`);
    } else {
        alert(`"${input}" không phải chuỗi đối xứng`);
    }
}
