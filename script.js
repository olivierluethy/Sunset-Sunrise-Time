// Get references to HTML elements
const submitBtn = document.querySelector('#submit-btn');
const locationInput = document.querySelector('#location-input');
const sunriseOutput = document.querySelector('#sunrise-output');
const sunsetOutput = document.querySelector('#sunset-output');
const sunriseTitle = document.getElementById("sunrise-title");
const sunsetTitle = document.getElementById("sunset-title");

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
        // Set options for formatting the time string
        const options = {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
            timeZone: 'Europe/London'
        };

        // Convert the Unix timestamps for sunrise and sunset to local time and format as a string using the specified options
        const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString('en-US', options);
        const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString('en-US', options);

        // Get the current date and format as a string
        const currentDate = new Date().toLocaleDateString();

        sunriseTitle.innerHTML = "Sunrise";
        sunsetTitle.innerHTML = "Sunset";

        // Update the HTML output with the sunrise and sunset times and current date
        sunriseOutput.innerHTML = `<img src="images/sunrise icon.png" alt="Sunrise icon"><br>Time: <strong>${sunrise}</strong><br>Date: ${currentDate}`;
        sunsetOutput.innerHTML = `<img src="images/sunset icon.png" alt="Sunset icon"><br>Time: <strong>${sunset}</strong><br>Date: ${currentDate}`;
    } else {
        // If the API did not return valid data, update the HTML output with an error message
        sunriseOutput.innerHTML = "";
        sunsetOutput.innerHTML = "";
        sunriseTitle.innerHTML = "";
        sunsetTitle.innerHTML = "";
        document.getElementById("dataNotAvailable").innerHTML = "No data available";
        console.log("No data available");
    }
});