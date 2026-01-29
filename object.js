let student={
    name:'sandhiya',
    course:'bca',
    age:18,
}

console.log(student);
delete student.age ;
console.log(student);
delete student.course;
console.log(student);
delete student.name;
console.log(student);
student['subject']='english';
student['reg']=12;
student['team']=1;
console.log(student);
