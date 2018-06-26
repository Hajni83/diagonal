$(function() {
    var canvas=document.getElementById('MyCanvas');
    var context=canvas.getContext('2d');
    var x=0;
    var y=450;
    var z=300;
    context.beginPath();
    context.moveTo(x,x);
    context.lineTo(y,z);
    context.strokeStyle="red";
    context.stroke();
    context.beginPath();
    context.moveTo(y,x);
    context.lineTo(x,z);
    context.stroke();
  });