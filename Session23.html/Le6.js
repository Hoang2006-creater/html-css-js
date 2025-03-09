let arr = [0, 1, false, 2, '', 3, null, 'hello', undefined, NaN, 'world', true];
let fix = []
for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
        fix.push(arr[i]);
    }
}
console.log(`Mảng sau khi loại bỏ các giá trị falsy ${fix}`);

