// Defining function to determine the level of school
const whichSchool = function (age) {
  var result;
  if (age < 13) {
    result = "Elementary school";
  } else if (age >= 13 && age <= 18) {
    result = "Secondary school";
  } else if (age > 18) {
    result = "Lighthouse Labs";
  }
  return result;
}

console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));

console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));

console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));