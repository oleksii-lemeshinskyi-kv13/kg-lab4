const WIDTH = 1000;
const HEIGHT = 1000;
const STEP_X = 10;
const STEP_Y = 10;
const SX = 0.005;
const SY = 0.005;
const DX = -250;
const DY = -135;
const COUNT_ITER = 1000;
const BAIL_OUT = 30;

var canvas1 = document.getElementById('mandelbrot');
var context1 = canvas1.getContext('2d');
context1.beginPath();
context1.stroke();
context1.closePath();
drawClouds(context1, HEIGHT, WIDTH);

function draw(x, y, ctx) {
	ctx.fillStyle = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
	ctx.fillRect(Math.round(x), Math.round(y), 1, 1);
	ctx.stroke();
}

function drawClouds(ctx, height, width) {
	for (var i = 0; i < width; i += STEP_X) {
		for (var j = 0; j < height; j += STEP_Y) {
			var c = SX * (i + DX),
				d = SY * (j + DY),
				x = c, y = d, t;
			for (var k = 0; x * x + y * y < BAIL_OUT && k < COUNT_ITER; k++) {
				t = x * x - y * y + c;
				y = 2 * x * y + d;
				x = t;
				draw(400 + x / SX - DX, 100 + y / SY - DY, ctx);
			}
		}
	}
}