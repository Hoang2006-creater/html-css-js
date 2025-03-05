let n = 8;
console.log("a.");
for (let i = n; i > 0; i--) {
    console.log('*'.repeat(i));
}
console.log("\n"); 
console.log("b.");
for (let i = 1; i <= n; i++) {
    console.log('*'.repeat(i));
}
console.log("\n");
console.log("c.");
for (let i = 1; i <= n; i++) {
    console.log(' '.repeat(n - i) + '*'.repeat(i));
}
console.log("\n");
console.log("d.");
for (let i = n; i > 0; i--) {
    console.log(' '.repeat(n - i) + '*'.repeat(i));
}
