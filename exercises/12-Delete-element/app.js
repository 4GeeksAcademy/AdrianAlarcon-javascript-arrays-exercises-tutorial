let people = ['juan', 'ana', 'michelle', 'daniella', 'stefany', 'lucy', 'barak', 'emilio'];

// Your code below
let newArr = [];
function deletePerson(nombre) {

    newArr = people.filter((elemento) => elemento != nombre);

    return newArr;
}
console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));
