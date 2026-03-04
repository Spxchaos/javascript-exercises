/*
 const firstName = "Aman"//First name: Carlos
 const lastName = "Naik" //Last name: Stevenson
 const thisYear = 2026 //This year: 1965
 const birthYear = 1999 //Birth year: 1947

 The greeting should read: "Hello! My name is Carlos Stevenson and I am 18 years old."
*/

// Add your code right below, good luck!

 const firstName = "Carlos";//First name: Carlos
 const lastName = "Stevenson"; //Last name: Stevenson
 const thisYear = 1965; //This year: 1965
 const birthYear = 1947; //Birth year: 1947
 const fullName = firstName+" "+lastName;
 const age = Number(thisYear)-Number(birthYear);


const greeting = "Hello! My name is "+ fullName + " and" + " I am " + age + " years old.";

console.log(greeting);
console.log(fullName);
console.log(age);


// Do not change this
module.exports = {
  firstName: typeof firstName === 'undefined' ? undefined : firstName,
  lastName: typeof lastName === 'undefined' ? undefined : lastName,
  thisYear: typeof thisYear === 'undefined' ? undefined : thisYear,
  birthYear: typeof birthYear === 'undefined' ? undefined : birthYear,
  greeting: typeof greeting === 'undefined' ? undefined : greeting,
  fullName: typeof fullName === 'undefined' ? undefined : fullName,
  age: typeof age === 'undefined' ? undefined : age
}
