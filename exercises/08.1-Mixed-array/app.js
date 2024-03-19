let mix = [42, true, "towel", [2, 1], 'hello', 34.4, { "name": "juan" }];
let newArr = [];
// Your code here
for (let i = 0; i < mix.length; i++) {
    let tipo =typeof(mix[ i]);
    newArr.push(tipo);
}
console.log(newArr);