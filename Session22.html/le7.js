let numbers = [7, 2, 9, 1, 5, 8, 3, 4, 6, 0];
for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 0; j < numbers.length - 1 - i; j++) {
        if (numbers[j] > numbers[j + 1]) {
            let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
}
console.log("Mảng sau khi sắp xếp:", numbers);
alert("Mảng sau khi sắp xếp: " + numbers.join(", "));