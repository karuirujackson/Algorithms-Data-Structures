const set = new Set([1,2,3]);
set.add(4.5);
set.add(3)

console.log(set.has(4.5));

set.delete(3);

console.log(set.size);

for(const item of set) {
    console.log(item);
}