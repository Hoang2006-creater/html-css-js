let students =[
    "Nguyen",
    "Vu",
    "Hoang",
    "Tran",
];
for (let student of students){
    console.log(student);
}
for(let index in students){
    console.log(index);
}
//Them dau
students.unshift("lo");
console.log(students);
//Them vao cuối
students.push("Huy");
console.log(students);
//Them giua
students.splice(1,0,"Hello world");
console.log(students);
//update
students[7]="hoanh"
console.log(students);
//Xoa dau
students.shift();
console.log(students);
//Xoa cuoi
students.pop();
console.log(students);
//xoa tai vi tri bat ky
students.splice(3,1);
console.log(students);




