var canvas = document.createElement('canvas');
canvas.id = "CursorLayer";
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.zIndex = 99;
canvas.style.position = "absolute";
canvas.style.x = 0;
canvas.style.y = 0;

var body = document.getElementsByTagName("body")[0];
var theFirstChild = body.firstChild;   // poluchaem silku na pervij dochernij element
console.log(theFirstChild);
body.insertBefore(canvas,theFirstChild);

var ctx = canvas.getContext("2d");

function draw() {
	var y = 0;
	for (var i = 1; i < canvas.height/100; i++) {
		ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
		ctx.fillRect(0, y + 50, canvas.width, 50);
		y = y + 100;
	}
}

function drawhorizontal() {
	var x = 0;
	for (var i = 1; i < canvas.width/100; i++) {
		ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
		ctx.fillRect(x + 50,0,50,canvas.height);
		x = x + 100;
	}
}

draw();
drawhorizontal();