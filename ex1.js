// Given the following arrays:
//
var color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
var order = ["th","st","nd","rd"];
// Write a program to display the colors in the following way:
//
// "1st choice is Blue."
// "2nd choice is Green."
// "3rd choice is Red."
// // Etc…

function display(color) {
  for (i = 0; i < color.length; i++) {
    var number = undefined;
    switch(i) {
      case 0:
        number = order[1];
        break;
      case 1:
        number = order[2];
        break;
      case 2:
        number = order[3];
        break;
      default:
        number = order[0];
        break;
    }
    console.log((i+1) + number + " choice is " + color[i])
  }
};

display(["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"]);
