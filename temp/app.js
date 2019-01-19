console.log("Test...")
var c =document.getElementById("myCanvas")
var ctx= c.getContext("2d");
ctx.moveTo(50,50);
ctx.lineTo(250,250);
ctx.moveTo(250,50);
ctx.lineTo(50,250);
ctx.strokeStyle = "rgo(50,255,50)";
ctx.lineWidth = 5;
ctx.stroke();
ctx.fillStyle = "darkgreen";
ctx.fillRect(100,100,100,100);
ctx.strokeStyle = "red";
ctx.strokeRect(50,50,200,200)
ctx.clearRect(125,125,50,50);
var c1 =document.getElementById("j")
var ctx1= c1.getContext("2d");
ctx1.moveTo(50,50);
ctx1.lineTo(250,250);
ctx1.moveTo(250,50);
ctx1.lineTo(50,250);
ctx1.strokeStyle = "rgb(150,255,205)";
ctx1.lineWidth = 55;
ctx.stroke();
ctx.fillStyle = "pink";
ctx.fillRect(100,100,100,100);
ctx.strokeStyle = "grey";
ctx.strokeRect(50,50,200,200)
ctx.clearRect(125,125,50,50);
ctx1.fillRect(150,150,150,150);
ctx1.fillRect(0,0,150,150);