canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
//1st circle
color="blue";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=3;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();
//2nd circle
color="yellow";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=3;
ctx.arc(243,234,40,0,2*Math.PI);
ctx.stroke();
//3rd circle
color="black";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=3;
ctx.arc(300,191,40,0,2);
ctx.stroke();
//4th circle
color="green";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=3;
ctx.arc(353,215,40,0,2*Math.PI);
ctx.stroke();
//5th circle
color="red";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=3;
ctx.arc(412,185,40,0,2*Math.PI);
ctx.stroke();
//ze end!!