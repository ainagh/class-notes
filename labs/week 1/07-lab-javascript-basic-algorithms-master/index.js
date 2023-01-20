// Iteration 1: Names and Input
let hacker1 = "Filo"
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Fiona"
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
// Variation 1
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else if (hacker1.length == hacker2.length){
    console.log(`Wow, you both have equally long names ${hacker1.length}`)
}

//Variation 2



// Iteration 3: Loops

let newName = "Filo"
console.log(newName.toUpperCase() + " ");
let reservedName = "";
for (let i = 0; i < newName.length; i++) {
    reservedName += newName[i] + " ".toUpperCase();
}
console.log(reservedName);
