// Function to perform calculations
function calculate() {
  // Get values from input fields and parse them as floats
  var num1 = parseFloat(document.getElementById('num1').value);
  var num2 = parseFloat(document.getElementById('num2').value);

  // Perform calculations
  var sum = num1 + num2;
  var difference = num1 - num2;
  var product = num1 * num2;
  var quotient = num1 / num2;

  // Display results
  var results = document.getElementById('results');
  results.innerHTML = "<p>Sum: " + sum + "</p>" +
                      "<p>Difference: " + difference + "</p>" +
                      "<p>Product: " + product + "</p>" +
                      "<p>Quotient: " + quotient + "</p>";
}
