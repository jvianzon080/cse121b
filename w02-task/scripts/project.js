// When the DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Display current date and time
  displayCurrentDateTime();

  // Add event listener to the form for year input
  const form = document.getElementById('yearForm');
  form.addEventListener('submit', function(event) {
    // Prevent form submission
    event.preventDefault();

    // Get user input for the year
    const yearInput = document.getElementById('year');
    const year = parseInt(yearInput.value);

    // Check if input is a valid number
    if (isNaN(year)) {
      alert('Please enter a valid year.');
      return;
    }

    // Get result div and display leap year status
    const resultDiv = document.getElementById('result');
    if (isLeapYear(year)) {
      resultDiv.textContent = `${year} is a leap year.`;
    } else {
      resultDiv.textContent = `${year} is not a leap year.`;
    }
  });
});

// Function to display current date and time
function displayCurrentDateTime() {
  const dateTimeDiv = document.getElementById('currentDateTime');
  const now = new Date();
  const dateTimeString = now.toLocaleString();
  dateTimeDiv.textContent = `Current Date and Time: ${dateTimeString}`;
}

// Function to check if a year is a leap year
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}