console.log("Test...")
var c =document.getElementById("myCanvas")
var ctx= c.getContext("2d");
ctx.arc(150,150,100,0,6.28)
ctx.strokeStyle = "blue";
ctx.stroke()
ctx.fillStyle = "cyan";
ctx.fill();
ctx.beginPath();
ctx.moveTo(150,20);
ctx.lineTo(10,150);
ctx.lineTo(290,150);
ctx.closePath();
ctx.strokeStyle = "green";
ctx.stroke();
ctx.fillStyle = "lightgreen";
ctx.fill();
var c1 =document.getElementById("j");
var ctx1= c1.getContext("2d");
ctx1.beginPath();
ctx1.moveTo(0,0);
ctx1.lineTo(300,300);
ctx1.lineTo(300,0);
ctx1.lineTo(0,300);
ctx1.closePath();
ctx1.strokeStyle = "red";
ctx1.stroke();