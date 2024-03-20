let listOfNumbers = [4, 80, 85, 59, 37, 25, 5, 64, 66, 81, 20, 64, 41, 22, 76, 76, 55, 96, 2, 68];

// Your code here
function mergeTwoList(arr1) {
    let odd = [];
    let even = [];
    let oddEven = [];
    arr1.forEach(element => {
        if (element % 2 === 0) {
            even.push(element);
        } else if (element % 2 != 0) {
            odd.push(element);
        }
    });

    console.log(odd);
    console.log(even);

    return oddEven = odd.concat(even);
}
mergeTwoList([5, 84, 2, 65, 94, 32, 85, 1, 29, 6, 4, 7, 13, 14, 95]);