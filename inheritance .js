class Parent{
    name;
    age;
        constructor(name,age){
        this.name=name;
        this.age=age;
    }
    display(){
        console.log("name:"+this.name);
        console.log("age:"+this.age);
    }
} 
class Child extends Parent{
     dept;
     reg;
        constructor(name,age,dept,reg){
        super(name,age);
        this.dept=dept;
        this.reg=reg;
}
    display(){
        console.log("child class");
        super.display();
        console.log("dept:"+this.dept);
        console.log("reg:"+this.reg);
    }
}

let student1 =new Child("sandy",20,"bca",101);
student1.display();