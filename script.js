// Get references to HTML elements
const submitBtn = document.querySelector('#submit-btn');
const locationInput = document.querySelector('#location-input');
const sunriseOutput = document.querySelector('#sunrise-output');
const sunsetOutput = document.querySelector('#sunset-output');

// Add event listener for button click
submitBtn.addEventListener('click', async function() {
  // Get the user input location
  const location = locationInput.value;
  // Build the API URL with the user input location and the API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
  
  // Send a request to the API and wait for the response
  const response = await fetch(url);
  const data = await response.json();
  
  // Check if the API returned valid data
  if (data.sys) {
    // Remove "No data available" error message if it was previously displayed
    document.getElementById("dataNotAvailable").innerHTML = "";
    
    // Convert the sunrise and sunset timestamps to local time and format as a string
    const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
    const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();

    // Get the current date and format as a string
    const currentDate = new Date().toLocaleDateString();

    // Update the HTML output with the sunrise and sunset times and current date
    sunriseOutput.innerHTML = `<img src="images/sunrise icon.png" alt="Sunrise icon"><br>Sunrise: ${sunrise}<br>Date: ${currentDate}`;
    sunsetOutput.innerHTML = `<img src="images/sunset icon.png" alt="Sunset icon"><br> Sunset: ${sunset}<br>Date: ${currentDate}`;
  } else {
    // If the API did not return valid data, update the HTML output with an error message
    sunriseOutput.innerHTML = "";
    sunsetOutput.innerHTML = "";
    document.getElementById("sunrise-image").src = "";
    document.getElementById("sunset-image").src = "";
    document.getElementById("dataNotAvailable").innerHTML = "No data available";
  }
});