function filterValidEmails(emailList) {
    if (!Array.isArray(emailList)) {
        return "Dữ liệu không hợp lệ";
    }
    if (emailList.length === 0) {
        return "Mảng không có phần tử nào";
    }

    let isValidEmail = (email) => email.includes("@") && email.indexOf(" ") === -1;

    let validEmails = emailList.filter(isValidEmail);

    return validEmails;
}

console.log(filterValidEmails(["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space@out.com"])); 
console.log(filterValidEmails([])); 
console.log(filterValidEmails("abc")); 
