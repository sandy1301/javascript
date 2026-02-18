// class User {
//     name;
//     age; 

// display(){
//     console.log(this.name);
//     console.log(this.age);
// }
// }
// let user1 = new User("sandhiya", 20);
// user1.display();

// class User {
//     #name
//     constructor(name, age){
//         this.#name = name;
//         this.age = age;
//     }

// display(){
//     console.log("name:",this.#name);
//     console.log("age:",this.age);
// }
// getname(){
//     return this.#name;
// }
// setname(name){
//     this.#name = name;
// }
// }
// let sandhiya =new User('bharatha',27);
// sandhiya.setname('sandy');
// console.log(sandhiya.getname())


class User{
    dep='bca';
    reg=101;

display(){
    console.log("Department:" + this.dep);
    console.log("Registration Number:" + this.reg);
}
}
let student = new User();
console.log(student);

class User1{
    name;
    class;
     
    constructor(name,cls){
        this.name=name;
        this.class=cls;
    }
    display(){
        console.log("name:"+this.name);
        console.log("class:"+this.cls);
    }
    getname(){
        return this.name;
    }
}
let student1=new User1('andy','bca');
console.log(student1);
student1.name='ak';
console.log(student1.getname());







