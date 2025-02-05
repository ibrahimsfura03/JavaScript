"use strict";

////Problem :- we need to automet the process of calculating CGPA

// a) Understand the problem
//    -what will happend if user inputs wrong values?
//      user will be notifed that the values are invalid.
//    -Is it necessary user most input subjects?
//      the only required fields are "Grade" and "Credit Unit".
//    -What if user has somany subjects to fill in there?
//      user can simply click add more fiealds button to add as many diealds he wants.
//    -How would a user knows his CGPA after he has inputed his data?
//      by simply clicking the calculate Button at the extreme end.

// b) Divide it in to sub-problem
//    -create a function that will carry the tasks
//    -create two parameters that will hold the cresit unit and the grade respectively
//    -create a for loop that will go throug each element the array
//    -compare the elemts with corresponding Grades to decides what the score is
//    -sum of the array and divide it by the total credit unit
//    -return final value as the result

///Solution
/* const cgpa = (grade, creditUnit) => {
  let gradeSum = 0;
  for (let i = 0; i < grade.length; i++) {
    gradeSum += grade[i];
  }
  console.log(gradeSum);

  let creditUnitSum = 0;
  for (let i = 0; i < creditUnit.length; i++) {
    creditUnitSum += creditUnit[i];
  }
  console.log(creditUnitSum);
  return creditUnitSum / gradeSum;
};

const grade = [10, 15, 8, 15, 15, 15, 15];
const creditUnit = [2, 3, 3, 3, 3, 3];

console.log(cgpa(grade, creditUnit)); */
// console.log(cgpa(grade, creditUnit));
/* const content = document.querySelector(".content");
const calculate = document.querySelector(".calculate");
const inputs = document.querySelectorAll(Number(".creditUnit"));

let creditUnitSum = 1110;
inputs.forEach((input) => {
  for (let i = 0; i < inputs.length; i++) {
    creditUnitSum += input;
  }
});
  
calculate.addEventListener("click", () => {
  content.textContent = creditUnitSum;
});

console.log(creditUnitSum); */

document.addEventListener("DOMContentLoaded", () => {
  // Add new row dynamically
  addRowButton.addEventListener("click", () => {
    const rowCount = subjectRows.rows.length + 1;
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>${rowCount}</td>
      <td><input type="text" class="dataFielsd" /></td>
      <td><input type="text" class="dataFielsd grade" /></td>
      <td><input type="number" class="dataFielsd creditUnit" /></td>
    `;
    subjectRows.appendChild(newRow);
  });

  // Function to map grade letters to grade points
  function gradeToPoints(grade) {
    switch (grade.toUpperCase()) {
      case "A":
        return 5;
      case "B":
        return 4;
      case "C":
        return 3;
      case "D":
        return 2;
      case "E":
        return 1;
      case "F":
        return 0;
      default:
        return -1; // Invalid grade
    }
  }

  // Main function to calculate CGPA
  function calculateCGPA() {
    const grades = document.querySelectorAll("input[type='text']"); // Select all grade inputs
    const creditUnits = document.querySelectorAll("input.creditUnit"); // Select all credit unit inputs
    const content = document.querySelector(".content"); // Output field for CGPA

    let totalGradePoints = 0;
    let totalCreditUnits = 0;

    for (let i = 0; i < grades.length; i++) {
      const gradeValue = gradeToPoints(grades[i].value); // Get numeric value of the grade
      const creditUnitValue = Number(creditUnits[i].value); // Get numeric value of the credit unit

      // Check for invalid inputs
      if (gradeValue === -1) {
        alert("Invalid grade entered. Please use A, B, C, D, E, or F.");
        return;
      }
      if (isNaN(creditUnitValue) || creditUnitValue <= 0) {
        alert("Invalid credit unit entered. Please enter a valid number.");
        return;
      }

      totalGradePoints += gradeValue * creditUnitValue; // Multiply grade points by credit unit
      totalCreditUnits += creditUnitValue; // Sum of credit units
    }

    // Calculate CGPA
    const cgpa = totalGradePoints / totalCreditUnits;

    // Display CGPA in the content span
    content.textContent = `CGPA: ${cgpa.toFixed(2)}`;
  }

  // Add event listener for the calculate button
  document.querySelector(".calculate").addEventListener("click", calculateCGPA);
});
