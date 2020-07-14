var svg_name = "#svg-canvas";
var BODY = document.body;
var $ = function(prop){
  return document.querySelector(prop);
};
var currentFill = "rgb(0,0,0)", currentStroke = "rgb(0,0,0)", currentStrokeWeight = 1, currentTranslation = [0,0], mouseX = 0, mouseY = 0, currentFillRule = "evenodd", currentRectMode = "corner", currentEllipseMode = "center", FRAMEINT = 10, frameCount = 0, currentTextSize = 15, currentLineHeight = 15, currentTextFont = "monospace", currentTextAlign = "center";
BODY.addEventListener("mousemove",function(e){
  mouseX = e.x;
  mouseY = e.y;
});
var draw = function(){
  
},
rect = function(x,y,w,h,r){
  if(currentRectMode !== "center"){
  $(svg_name).innerHTML+= 
  "<rect rx='"+r+"' ry='"+r+"' x='"+(x+currentTranslation[0])+"' y='"+(y+currentTranslation[1])+"' width='"+w+"' height='"+h+"' style='fill:"+currentFill+";stroke-width:"+currentStrokeWeight+";stroke:"+currentStroke+";' />";
  }if(currentRectMode === "center"){
    $(svg_name).innerHTML+= 
  "<rect rx='"+r+"' ry='"+r+"' x='"+(x-(w/2)+currentTranslation[0])+"' y='"+(y-(h/2)+currentTranslation[1])+"' width='"+w+"' height='"+h+"' style='fill:"+currentFill+";stroke-width:"+currentStrokeWeight+";stroke:"+currentStroke+";' />";
  }
},
background = function(r,g,b){
  currentFill = "rgb("+r+","+g+","+b+")";
  rect(-100,-100,10000,10000);
},
ellipse = function(x,y,w,h){
  if(currentEllipseMode === "center"){
  $(svg_name).innerHTML+="<ellipse cx='"+(x+currentTranslation[0])+"' cy='"+(y+currentTranslation[1])+"' rx='"+(w/2)+"' ry='"+(h/2)+"' style='fill:"+currentFill+";stroke-width:"+currentStrokeWeight+";stroke:"+currentStroke+"'/>";
  }
  if(currentEllipseMode !== "center"){
  $(svg_name).innerHTML+="<ellipse cx='"+(x+currentTranslation[0]-(w/2))+"' cy='"+(y+currentTranslation[1]-(h/2))+"' rx='"+(w/2)+"' ry='"+(h/2)+"' style='fill:"+currentFill+";stroke-width:"+currentStrokeWeight+";stroke:"+currentStroke+"'/>";
  }
},
line = function(x,y,x2,y2){
 $(svg_name).innerHTML+="<line x1='"+(x+currentTranslation[0])+"' y1='"+(y+currentTranslation[1])+"' x2='"+(x2+currentTranslation[0])+"' y2='"+(y2+currentTranslation[1])+"' style='fill:"+currentFill+";stroke-width:"+currentStrokeWeight+";stroke:"+currentStroke+"'/>";
},
polygon = function(path){
  $(svg_name).innerHTML+="<polygon points='"+path+"' style='fill:"+currentFill+";stroke-width:"+currentStrokeWeight+";stroke:"+currentStroke+";fill-rule="+currentFillRule+"' />";
},
polyline = function(path){
  $(svg_name).innerHTML+="<polyline points='"+path+"' style='fill:"+currentFill+";stroke-width:"+currentStrokeWeight+";stroke:"+currentStroke+";fill-rule="+currentFillRule+"' />";
},
fill = function(r,g,b,a){
  if(r !== undefined&&g !== undefined&&b !== undefined&&a !== undefined){
  currentFill = "rgba("+r+","+g+","+b+","+a+")";
  }
  if(a === undefined){
  currentFill = "rgb("+r+","+g+","+b+")";
  }
  if(g === undefined&&b === undefined&&a === undefined){
    currentFill = "rgb("+r+","+r+","+r+")";
  }
  if(b === undefined&&a === undefined){
    currentFill = "rgba("+r+","+r+","+r+","+g+")";
  }
},
stroke = function(r,g,b,a){
  if(r !== undefined&&g !== undefined&&b !== undefined&&a !== undefined){
  currentStroke = "rgba("+r+","+g+","+b+","+a+")";
  }
  if(a === undefined){
  currentStroke = "rgb("+r+","+g+","+b+")";
  }
  if(g === undefined&&b === undefined&&a === undefined){
    currentStroke = "rgb("+r+","+r+","+r+")";
  }
  if(b === undefined&&a === undefined){
    currentStroke = "rgba("+r+","+r+","+r+","+g+")";
  }
},
strokeWeight = function(w){
  currentStrokeWeight = w;
},
noStroke = function(){
  currentStrokeWeight = 0;
},
fillRule = function(i){
  currentFillRule = i;
},
rectMode = function(m){
  currentRectMode = m;
},
ellipseMode = function(m){
  currentEllipseMode = m;
},
text = function(t,x,y){
  $(svg_name).innerHTML+="<text x="+(x+currentTranslation[0])+" y="+(y+currentTranslation[1])+" fill="+currentFill+" style = 'font-size:"+currentTextSize+";font-family:"+currentTextFont+";text-align:"+currentTextAlign+"'>"+t+"</text>";
},
textSize = function(s){
  currentTextSize = s;
},
textFont = function(f){
  currentTextFont = f;
},
textAlign = function(a){
  currentTextAlign = a;
},
setText = function(s,f,a){
  textSize(s);
  textFont(f);
  textAlign(a);
};
setInterval(function(){
  frameCount++;
  draw();
},FRAMEINT);
