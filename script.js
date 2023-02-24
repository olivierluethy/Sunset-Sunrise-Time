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
    document.getElementById("dataNotAvailable").innerHTML ="";
    // Convert the sunrise and sunset timestamps to local time and format as a string
    const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
    const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();
    
    document.getElementById("sunrise-image").src="images/sunrise icon.png";
    document.getElementById("sunset-image").src="images/sunset icon.png";

    // Update the HTML output with the sunrise and sunset times
    sunriseOutput.textContent = `Sunrise: ${sunrise}`;
    sunsetOutput.textContent = `Sunset: ${sunset}`;    
  } else {
    // If the API did not return valid data, update the HTML output with an error message
    sunriseOutput.textContent = "";
    sunsetOutput.textContent = "";
    document.getElementById("sunrise-image").src="";
    document.getElementById("sunset-image").src="";

    document.getElementById("dataNotAvailable").innerHTML ="No data available";
  }
});