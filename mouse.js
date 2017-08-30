// Move the mouse across the screen as a sine wave.
var robot = require("robotjs");

// Speed up the mouse.
robot.setMouseDelay(2);

var twoPI = Math.PI * 2.0;
var screenSize = robot.getScreenSize();
var height = (screenSize.height / 2) - 10;
var width = screenSize.width;


// Try using Math.tan or Math.cos
// in the function for different effects
// Logging values of x and y throughout the motion
for (var x = 0; x < width; x++) {
	y = height * Math.sin((twoPI * x) / width) + height;
	robot.moveMouse(x, y);
  console.log([x],[y], [x] + [y])
}
