//Ex 1:
//Loop and If Statement
//Write a program that prints all the even numbers from 1 to 20
//Use a for loop and if statement to check if a number is even
a = [];
for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0) a.push(i);
}
console.log(a[i]);

//Ex 2:
//Array manipulation
//Given an array of nums, find the sum of all positive nums in the array.
//If the array is empty, print it.
a = [-2, 5, 6, 1, 0, -5, -2];
if (a == "") {
  console.log("Array is empty");
} else {
  for (let i = 0; i < a.lenght; i++) {
    if (a[i] * -1 != a[i]) a.push(i);
  }
  console.log(a[i]);
}
//Ex 3:
//Object manipulation
//Create an object representing a student with properties name, age and grade.
//Write a function that adds a new property to the student object, like for ex. "school" with a value "High School"
let student = {
  name: "Dragana Korunoska",
  age: 20,
  year: 2,
};
function addProp(studentObject, schoolValue) {
  studentObject.school = schoolValue;
}
addProp(student, "University");
console.log(student);

//Ex 4:
//Loop and array
//Write a program that takes an array of names and prints a welcome message for each name.
//Use  a for-of loop for iteration.
const names = ["Ana", "Ema", "Ivan", "Petar"];
function printWelcome(nameArray) {
  for (const name of nameArray) {
    console.log("Welcome  ${name}.");
  }
}
printWelcome(names);

//Ex 5:
//Create 2 objects representing two books with properties like title and author. Add
// "yearPublished" property to each obj.
//Write a function that compares the publication years of th two books and prints the older one.
const book_1 = {
  title: "The Catcher in the Rye",
  author: "J.D. Salinger",
  yearPublished: 2023,
};
const book_2 = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  yearPublished: 2022,
};
function compareYearPublished(book_1, book_2) {
  if (book_1.yearPublished < book_2.yearPublished) {
    console.log(book_1);
  } else {
    console.log(book_2);
  }
}

//Ex 6:
//Write a function that takes an array of strings and modifies it by
// adding the word "Code" to the end of each string
const languages = ["Python", "JavaScript", "Java", "C#", "C++"];
function wordAppend(array) {
  for (let i = 0; i < array.lenght; i++) {
    array[i] += " Code";
  }
}
wordAppend(languages);
console.log(wordAppend);

//Ex 7:
////Ex 1:
//Loop and If Statement
//Write a program that prints all the odd numbers from 1 to 20
//Use a for loop and if statement to check if a number is even
a = [];
for (let i = 0; i <= 20; i++) {
  if (i % 2 != 0) {
    a.push(i);
  }
  console.log(a[i]);
}
