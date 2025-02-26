//A map is unordered collection of key-value pairs of any data type. Both keys and values can be of any data type. Maps are iterable unlike objects.
//Maps do not create keys by default unlike objects thus there is no conflict between keys and properties.

const map = new Map([['a', 1], ['b', 2]]);

map.set('c', 3);
console.log(map.has('a')); 
map.delete('c');
console.log(map.size);
map.clear();


for (const [key, value] of map) {
    console.log(`${key} : ${value}`)
}