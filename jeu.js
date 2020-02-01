var x2 = 22;
var y2 = 225;
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var x = 22;
var y = 225;
var x0 = 250;
var y0 = 150;
var dx = 50;
var dy = -50;
var ex = -50;
var ey = 50;
var temps = 0;
var a = 1;
var start = 0;
ctx.fillStyle = "dark";
ctx.fillRect(10, 210, 50, 50);
ctx.fillRect(10, 160, 50, 50);
ctx.fillRect(10, 110, 50, 50);
ctx.fillRect(10, 60, 50, 50);
ctx.fillRect(60, 60, 50, 50);
ctx.fillRect(110, 60, 50, 50);
ctx.fillRect(110, 110, 50, 50);
ctx.fillRect(110, 160, 50, 50);
ctx.fillRect(110, 210, 50, 50);
ctx.fillRect(160, 210, 50, 50);
ctx.fillRect(210, 210, 50, 50);
ctx.fillRect(210, 160, 50, 50);
ctx.fillRect(210, 110, 50, 50);
ctx.fillRect(210, 60, 50, 50);
ctx.fillRect(260, 60, 50, 50);
ctx.fillStyle = "blue";
ctx.fillRect(260, 10, 50, 50);
function temp() {
if (start === 1) {
temps += a;
}
};
setInterval(temp,100);

function gagne() {
if (x === 272) {
if (y === 75) {
document.getElementById('MaDiv').innerHTML='<b>GG vous avez gagné en </b>' + temps + "<b> dixièmes de seconde</b>";
console.log(start);

};
};
};
function draw() {
ctx.fillStyle = "red";
ctx.fillRect(x, y, 25, 25);
};
setInterval(draw, 10);
const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++){
buttons[i].addEventListener("click", function() {
const bouttona = buttons[i].innerHTML
gagne()
if (bouttona === "haut" && start === 1){

ctx.clearRect(x, y, 25, 25);
y += dy;
};
if (bouttona === "droite" && start === 1){
if (y === 75 && x === 72) {
ctx.clearRect(x, y, 25, 25);
x += dx;
};
if (y === 75 && x === 22) {
ctx.clearRect(x, y, 25, 25);
x += dx;
};
if (y === 225 && x === 172) {
ctx.clearRect(x, y, 25, 25);
x += dx;
};
if (y === 225 && x === 122) {
ctx.clearRect(x, y, 25, 25);
x += dx;
};
if (y === 75 && x === 222) {
ctx.clearRect(x, y, 25, 25);
x += dx;
};
};
if (bouttona === "bas" && start === 1){
ctx.clearRect(x, y, 25, 25);
y += ey;
};
if (bouttona === "start"){

start += a;
};

});
}
