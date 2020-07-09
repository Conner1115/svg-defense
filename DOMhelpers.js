var $ = function(prop){
  return document.querySelector(prop);
};
var mouseX,mouseY,mouseMoved = false, clicked = false, mouseOver = true, mouseIsPressed = false, mouseDragged = false,mouseOut = false;
var frameRate = 100;
var draw = function(){};
$("body").addEventListener("mousemove",function(e){
  mouseX = e.x;
  mouseY = e.y;
  mouseMoved = true;
});
$("body").addEventListener("click",function(){
  clicked = true;
  setTimeout(function(){clicked = false},1000/frameRate)
})
$("body").addEventListener("mouseover",function(){
  mouseOver = true;
  mouseOut = false;
})
$("body").addEventListener("mouseout",function(){
  mouseOver = false;
  mouseOut = true;
})
$("body").addEventListener("mousedown",function(){
  mouseIsPressed = true;
})
$("body").addEventListener("mouseup",function(){
  mouseIsPressed = false;
})
$("body").addEventListener("drag",function(){
  mouseDragged = true;
})
setInterval(draw,1000/frameRate);
