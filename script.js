/*
Find out about how the JavaScript Math.sqrt() function works:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt

Features to add:

- calculate the result for the hypotenuse
- display the hypotenuse result where it currently reads "result"
- validate that the input values entered are greater than 0
- display an error message for the user if the input values they are 0 or less

*/

document.getElementById('calculate').addEventListener('click', function() {
  var width = document.getElementById('width').value;
  var height = document.getElementById('height').value;
  document.getElementById('triangle').setAttribute('width', width);
  document.getElementById('triangle').setAttribute('height', height);
  document.getElementById('hypotenuse').value = 'result';
});
