# Sunset-Sunrise-Time
This is a JavaScript program that fetches weather data from the OpenWeatherMap API based on the location input by the user and displays the sunrise and sunset times for that location in the local time zone. It also displays the current date along with the icons for sunrise and sunset. If the API does not return valid data, it displays an error message instead. The program uses event listeners to detect button clicks and updates the HTML output accordingly.

## Setup
To use this project, you'll need to create an account at [OpenWeather](https://openweathermap.org/), as the project pulls data from their API.

Once you've created an account, navigate to your profile by clicking on your name in the top navigation between <strong>For Business</strong> and <strong>Support</strong>. From there, click on <strong>My API Keys</strong>. If you don't have an API key, create one.

Next, create a new file in the project called <strong>apikey.js</strong>. In that file, write the following code and paste your API key:
```javascript
const apiKey = "YOUR_API_KEY";
```
Finally, save the file and you're ready to go!
