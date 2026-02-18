let map = new Map();
map.set(1,'sandhiya')
    .set(2,"bharath")
console.log(map); 
console.log(map.get(1))
console.log(map.size);  

for(value of map.values()){
    console.log(value);
}

let set = new Set();
set.add(9843025509)
 console.log(set.has(9843025509));
 set.clear();
    console.log(set);
