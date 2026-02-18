let student='{"name":"sandhiya","age":22,"dept":"bca"}';
console.log(JSON.parse(student));

let user= { name: 'sandhiya', age: 22, dept: 'bca' };
console.log(JSON.stringify(user));


let dbay = new Date()
console.log(dbay);

function multiplication(n){
   if(n==0)
      return 1;
   return n*multiplication(n-1);
}
console.log(multiplication(5))