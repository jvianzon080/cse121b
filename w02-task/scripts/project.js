// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Display current date and time when the page loads
  displayCurrentDateTime();

  // Select the form element by its ID
  const form = document.getElementById('yearForm');

  // Add event listener for form submission
  form.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the value of the year input field
    const yearInput = document.getElementById('year').value;

    // Parse the year input to an integer
    const year = parseInt(yearInput);

    // Check if the input is a valid number
    if (isNaN(year)) {
      alert('Please enter a valid year.');
      return;
    }

    // Fetch leap years data from an external JSON file
    fetch('leap_years.json')
      .then(response => response.json()) // Parse the JSON response
      .then(leapYears => {
        // Check if the input year is in the leap years array
        const isLeapYear = leapYears.includes(year);

        // Get the result div element
        const resultDiv = document.getElementById('result');

        // Generate message based on whether the year is a leap year or not
        const leapYearMessage = isLeapYear ? `${year} is a leap year.` : `${year} is not a leap year.`;

        // Display the result in the result div
        resultDiv.textContent = leapYearMessage;
      })
      .catch(error => console.error('Error fetching leap years:', error)); // Log any errors that occur during fetch
  });
});

// Function to display the current date and time
function displayCurrentDateTime() {
  // Get the div element where the date and time will be displayed
  const dateTimeDiv = document.getElementById('currentDateTime');

  // Get the current date and time
  const now = new Date();

  // Convert the date and time to a string format
  const dateTimeString = now.toLocaleString();

  // Display the current date and time in the dateTimeDiv
  dateTimeDiv.textContent = `Current Date and Time: ${dateTimeString}`;
}
