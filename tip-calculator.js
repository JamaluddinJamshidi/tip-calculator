// Tip Calculator - Homework Week 9

// The original bill amount
const bill = 120;

// Tip percentage
const tipPercent = 15;

// Calculate the tip using multiplication and division
const tip = bill * (tipPercent / 100);

// Calculate the total bill including the tip
const total = bill + tip;

// Split the total bill between 4 friends
const friends = 4;
const perPerson = total / friends;

// Round the per-person amount to two decimal places
const roundedPerPerson = perPerson.toFixed(2);

// Create receipt lines
const line1 = `Bill: $${bill}`;
const line2 = `Tip: $${tip.toFixed(2)}`;
const line3 = `Total: $${total.toFixed(2)}`;
const line4 = `Friends: ${friends}`;
const line5 = `Each person pays: $${roundedPerPerson}`;

// Use trim() to remove unnecessary spaces
const cleanLine1 = line1.trim();

// Print every receipt line in uppercase
console.log(cleanLine1.toUpperCase());
console.log(line2.toUpperCase());
console.log(line3.toUpperCase());
console.log(line4.toUpperCase());
console.log(line5.toUpperCase());