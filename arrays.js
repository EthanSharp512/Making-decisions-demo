let backpack = []

backpack.push("Hatchet", "Water");
backpack.unshift("Mac and cheese");
backpack.push("Sleeping bag");

let belt = backpack.splice(1, 1);

backpack.pop();
backpack.push("Sleeping bag");

let backpack2 = backpack.slice(1, 3)

backpack2.push("Blanket", "Knife");

for(let i = 0; i < backpack.length; i++) {
    console.log(backpack[i]);
}

// for(let i = 0; i < backpack2.length; i++) {
//     console.log(backpack2[i]);
// }
