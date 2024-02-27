"use strict";
// Array of magician's name
const magicianNames = ["Harry Porter", "David Copperfield", "Professor Albus Dumbledore", "Ron Weasley"];
function show_magicians(magicians) {
    for (const item of magicians) {
        console.log(item);
    }
}
function makeGreat(magicians) {
    const greatMagicians = magicians.map(magician => `the Great ${magician}`);
    return greatMagicians;
}
// Modify the array to add  "The Great" to each magician's name
const greatMagiciansNames = makeGreat(magicianNames);
// Call the function to show the original  magician's names
console.log("Original Magicians");
show_magicians(magicianNames);
// Call the function to show the great magician's names.
console.log("\nGreat Magicians:");
show_magicians(greatMagiciansNames);
