
colors = ["Aqua", "Coral", "Lime", "Red", "Cyan", "DeepPink", "GreenYellow", "Purple", "Yellow"];

speed = 500;

function randomColor() {
	return '#'+(0x1000000+(Math.random()/2 + 0.5)*0xffffff).toString(16).substr(1,6);
	// return colors[Math.floor(Math.random() * colors.length)];
}

(function changeColor() {
	$("body").css({backgroundColor: randomColor()}, speed);
	setTimeout(arguments.callee, speed)
})();

