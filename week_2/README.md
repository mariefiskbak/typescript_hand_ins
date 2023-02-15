Class Exercises 1
Let's start with a simple callback example to warm up:

a) Create a new folder called callbacks and create a new file called callbacks.js
b) Create a function called calculate that takes 3 parameters: x, y and a callback called operation
c) Create another function called add that takes 2 parameters: x and y and returns the sum of x and y
d) Call the calculate function with the appropriate parameters to test your code
Right now our calculator only supports addition, that makes that calculator pretty useless. Let's add some more operations by adding some more functions:

- subtraction
- multiplication
- division
  f) call the function calculate with the appropriate parameters to test your code.
  Class Exercises 2 Implement your own Promises
  a) Create a new folder called promises and create a new file called promises.js

The above calculator exercise was a good warm up, but we can do better. Let's create our own promise that will do the same thing as the calculate function from the previous exercise.

b) Change the calculate function to return a promise instead of a value and call the appropriate resolve or reject function depending on the result of the operation function call. Make sure to reject the promise if the operation function throws an error like divide by zero!

c) Call the new calculate function with the appropriate parameters to test your code.

d) Now try to chain add, subtract, divide and multiply using the .then syntax to the new calculator functions that returns a promise. How is that possible?? Explain!!

e) Change the calculate function to use the async/await syntax instead of promises

Class Exercises 3
Great!! Now that we are warmed up, let's try to make a litte weather app that will get the user's location and then get the weather for that location

a) Create a new folder called weather-app and create a new file called weather.js

b) Inside the weather folder create a new node project with the following command:

npm init -y
c) We will need to use the following npm packages:

npm install node-navigator
npm install xmlhttprequest
npm install lite-server
in package.json add the following line to the scripts object: "start": "lite-server weather.js"
d) First we need to get the user's location:

const {Navigator} = require("node-navigator");
const navigator = new Navigator();

function getLocation(callback) {
navigator.geolocation.getCurrentPosition(function (position) {
callback(position);
});
}
Now we need to get the weather for that location:
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function getWeather(coords, callback) {
const apiKey = "YOUR KEY HERE";
const url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + coords.latitude + '&lon=' + coords.longitude + '&apiKey=' + apiKey
const req = new XMLHttpRequest();
req.open('GET', url);
req.onload = function () {
if (req.status === 200) {
callback(JSON.parse(req.responseText));
} else {
callback(new Error(req.statusText));
}
};
req.send();
}
Now let's call the functions:
getLocation(function (coords) {
getWeather(coords, function (weather) {
console.log(weather);
});
});
e) Your assignment is now to make the above code more readable and understandable. You can do this by using promises. Both functions above needs to return a promise. You can use the following code as a starting point:
function getLocation() {
return new Promise(function (resolve, reject) {
try {
navigator.geolocation.getCurrentPosition(function (position) {
resolve(position);
});
} catch (e) {
reject(new Error(e));
}
});
}
The getWeather function you need to create yourself.

f) Now call both functions and log the weather to the console using the .then() and .catch() methods.

g) Now I want you to make the code even more readable by using async/await. You can use the following code as a starting point:

async function getWeather() {
try {
// your code here
} catch (e) {
// your code here
}
}
Class Exercises 4 Weather APP
a) Now that you have the weather, you can display it to the user. Create a new file called index.html and add the following code:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Weather App</title>
</head>
<body>
<h1>Weather App</h1>
<div id="weather"></div>
<script src="weather.js"></script>
</body>
</html>
b) Now add the following code to the weather.js file:
document.getElementById('weather').innerHTML = weather.main.temp;
c) Now run the following command to start a local server:
npm start
d) Now open your browser and go to localhost:3000, and you should see the temperature of your location.