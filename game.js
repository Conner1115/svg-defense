
var game_content = function(pjs) {
    with (pjs) {
    size(1200, 600);
    

    smooth();
    frameRate(100);
    
    
    
    var TOWERS = [
  //basic turret class
  ["Basic turret","Battlecry turret","PANTHER-3BG8","Elexiron turret","Dual Elexiron","CAMO destroyer"],
  //machinegun classes
  ["Machinegun turret","Tri-gattler","BL00DSHED gattler","BL00DSHED X3 gattler","HEX gattler","Vulcan Hex Destroyer","Hex BL00DSHED Destroyer"],
  //AA gun classes
  ["AA gun","Sniper AA gun","Gattling AA gun","Dual AA gun","Laser cannon AA","Guided Missile AA","Triple Sniper AA"],
  //Sniper classes
  ["Sniper tower","SAVAGE sniper tower","Minotaur-87HD","TAKEDOWN sniper","TITANCRUSH sniper","SOULSCAR sniper"],
  //freezer classes
  ["Freezer turret","Atomic Freezer turret","Frostbite turret","ATOMSTRIKE-X","HAILSTORM-36"],
  //laser cannon classes
  ["Laser cannon","Dual Laser cannon","Heavy Laser cannon","SCARBEAM Laser","Dual SCARBEAM","Dual Heavy Laser","Death Ray Laser","REAPER Laser","DEATHSTAR Laser","RAGNOROK-7DX"],
  //Demolition Tower Classes
  ["Demolition Tower","Bio-Bomb","Flamethrower","Grenade Launcher","Nuke cannon","Boulder Thrower"],
];
    var ENEMIES = [
  //basic enemies
  ["rifleman","pistolman","barreta-M9 soldier","medic","suicide bomber","spy","rocket soldier"],
  //cars, tanks, any enemies that carry others
  ["tank","mammoth tank","MAGNUS tank","ranger","DRACULA tank","APC","gattling tank","Army Transporter"],
  //naval units
  ["gunboat","destroyer","cruiser","submarine","aircraft carrier"],
  //aircraft
  ["helicopter","Phoenix helicopter","warplane","B39 bomber","V2 rocket","Nuke"],
  //titans
  ["titan mech","mini-titan"],
  //bosses
  ["Magmoroth","UNDEFINED"],
  //technological
  ["forcefield trooper","flame trooper","plasma trooper","quasicon trooper","dimension opener","teleporter","DEMOLISH mech"],
];  
    var BULLETS = [
      "bullet","bulletSmall","bulletBig","bulletElexiron","bulletPanther","laserGreen","guidedMissile","bulletSlow","laserBlue","laserRed","laserYellow","bioBomb","greade","boulder","nukeGrenade","explosion"
    ];
    var particles = [];
    var enemies = [];
    var towers = [];
    var bullets = [];
    var tracks = [
      [
        [100,0],
        [200,300],
        [100,600],
        []
      ],
      [
        [200,0],
        [100,300],
        [200,600],
        []
      ],
      [
        [300,0],
        [400,300],
        [300,600],
        []
      ],
      [],
    ];
    var navalTracks = [
      [
        [400,0],
        [300,300],
        [400,600],
      ],
      [
        [500,0],
        [600,300],
        [500,600],
      ],
      [
        [600,0],
        [500,300],
        [600,600],
        []
      ],
      [],
    ];
    var airTracks = [
      [
        [700,0],
        [700,600],
        []
      ],
      [
        [800,0],
        [800,600],
        []
      ],
      [
        [900,0],
        [900,600],
        []
      ],
      [],
    ];
    var money = 0;
    var lives = 100;
      {
    var polygon = function(path){
      beginShape();
      for(var i = 0; i < path.length; i++){
        vertex(path[i][0],path[i][1]);
      }
      endShape();
    };
    var ang = function(a){
      return a*(Math.PI/180);
    };
    var startMatrix = function(x,y,r,s){
      pushMatrix();
      translate(x,y);
      rotate(ang(r));
      scale(s);
    };
    
      
    var basicTowerBase = function(){
      pushMatrix();
      translate(-100,-100);
fill(50,50,50);
rect(100,100,30,60);
rect(100,100,60,30);
fill(100,100,100);
rect(100,100,50,50);
fill(80,80,80);
polygon([
  [75,75],
  [75,125],
  [85,115],
  [85,85],
]);
polygon([
  [125,75],
  [125,125],
  [115,115],
  [115,85],
]);
fill(120,120,120);
rect(100,100,30,30);
      popMatrix();
};
var gattlingTowerBase = function(){
  fill(50,50,50);
  rect(100,100,60,30);
  rect(100,100,30,50);
  fill(100,100,100);
  rect(90,100,30,40,5);
  rect(105,100,30,40);
  fill(110,110,110);
  rect(120,100,20,30);
  rect(127,100,10,5);
  rect(127,110,10,5);
  rect(127,90,10,5);
  fill(120,120,120);
  rect(97,85,45,10,10);
  fill(80,80,80);
  rect(97,115,45,10,10);
};
var basicTowerBarrel = function(w,h,excessY,c){
  if(excessY === undefined){
    excessY = 0;
  }
  if(c === undefined){
    c = 100;
  }
  pushMatrix();
  translate(-100,-100);
  noStroke();
  fill(c,c,c);
  rect(100+w,100+excessY,w,h);
ellipse(100+w/2,100+excessY,h/2,h);
stroke(c,c,c);
strokeWeight(2);
fill(0);
ellipse(100+(w*1.5),100+excessY,h/2,h-2);
  popMatrix();
};
var AAgunBase = function(){
  fill(50,50,50);
  noStroke();
  rect(100,100,30,60);
  rect(100,100,60,30);
  fill(100,100,100);
  ellipse(100,100,50,50);
  fill(120,120,120);
  ellipse(102,98,40,40);
  fill(140,140,140);
  ellipse(105,95,30,30);
};
var sniperTowerBase = function(){
  fill(50,50,50);
rect(100,100,30,60,5);
rect(100,100,60,30,5);
fill(100,100,100);
rect(100,100,50,50,10);
fill(80,80,80);
polygon([[75,82], [75,118], [85,115], [85,85]]);
polygon([[125,82], [125,118], [115,115], [115,85]]);
fill(120,120,120);
rect(100,100,30,30);
};
var soldierGraphic = function(){
  
  fill(0,0,0);
stroke(80,80,80);
strokeWeight(5);
line(100,90,125,113);
line(100,113,117,116);
noStroke();
fill(100,100,100);
rect(100,100,15,30,5);
noStroke();
fill(255,210,150);
ellipse(100,100,20,20);
fill(60,60,60);
rect(115,115,50,7);
fill(150,0,0);
rect(115,117,10,2);
fill(120,120,120);
ellipse(95,100,14,20);
}; 
var basicTankBarrel = function(w,h,excessY,excessX,c){
  if(excessY === undefined){
    excessY = 0;
  }
  if(c === undefined){
    c = 100;
  }
  noStroke();
  fill(c[0],c[1],c[2]);
  rect(excessX+100+w,100+excessY,w,h);
ellipse(excessX+100+w/2,100+excessY,h/2,h);
stroke(c[0],c[1],c[2]);
strokeWeight(2);
fill(0);
ellipse(excessX+100+(w*1.5),100+excessY,h/2,h-1);
};
var tankBase = function(c){
  noStroke();
  if(c[0] <= 0){
    c[0] = 0;
  }
  if(c[1] <= 0){
    c[1] = 0;
  }
  if(c[2] <= 0){
    c[2] = 0;
  }
  fill(80,80,80);
  rect(100,100,65,75,5);
  fill(c[0]-20,c[1]-20,c[2]-20);
  rect(100,70,50,20);
  rect(100,130,50,20);
  fill(c[0],c[1],c[2]);
  rect(100,100,80,60,5);
    fill(c[0]-20,c[1]-20,c[2]-20);
  strokeWeight(1);
  stroke(c[0]-40,c[1]-40,c[2]-40);
rect(100,100,40,40,10);
  noStroke();
  rect(115,100,20,20,5);
  fill(c[0]-10,c[1]-10,c[2]-10);
  rect(110,100,20,20,5);
  fill(c[0]-40,c[1]-40,c[2]-40);
  rect(90,100,20,40,10);
  fill(c[0]-30,c[1]-30,c[2]-30);
    rect(95,100,10,40);

  noStroke();
  
    
};
var apcBase = function(c){
  fill(c[0],c[1],c[2]);
  rect(100,100,80,60,5);
  fill(c[0]+20,c[1]+20,c[2]+20);
  rect(100,100,40,30);
  fill(c[0]+40,c[1]+40,c[2]+40);
  quad(65,70,135,70,120,85,80,85);
  quad(65,130,135,130,120,115,80,115);
};
var carBase = function(c){
  noStroke();
  fill(0,0,0);
  rect(100,100,80,20*2);
  rect(115+9,100,9*2,30*2,3*2);
  rect(82.5-9,100,9*2,30*2,3*2);
  fill(c[0],c[1],c[2]);
  rect(110+20,100,20*2,25*2,5);
  rect(85-10,100,10*2,25*2);
  fill(c[0]-10,c[1]-10,c[2]-10);
  rect(122.5+7.5,100,7.5*2,25*2,2*2);
  rect(77.5-10,100,7.5*2,25*2,2*2);
  fill(c[0]-30,c[1]-30,c[2]-30);
  rect(95,95-8,8*2,8*2);
  rect(95,105+8,8*2,8*2);
  fill(c[0]-50,c[1]-50,c[2]-50);
  rect(90-3,95-8,3*2,8*2);
  rect(90-3,105+8,3*2,8*2);
  fill(20,100,0);
  rect(95,95-7.5,4*2,9*2);
  rect(95,105+7.5,4*2,9*2);
  fill(235,190,130);
  ellipse(95,95-7.5,2.5*4,2.5*4);
  ellipse(95,105+7.5,2.5*4,2.5*4);
  
};
var hexagon = function(){
  pushMatrix();
  translate(-100,-100);
  polygon([
    [100,50],
    [125,50],
    [160,100],
    [125,150],
    [75,150],
    [40,100],
    [75,50],
  ]);
  popMatrix();
};
var Particle = function(t,x,y){
  this.t = t;
  this.x = x;
  this.y = y;
  this.xVel = random(-2,2);
  this.yVel = random(-2,2);
  this.s = random(5,30);
  this.dead = false;
  if(this.t === 1){
    this.s = random(0,20);
    this.yVel = random(-1,1);
  }
  if(this.t === 2){
    this.s = random(0,20);
    this.yVel = random(-1,1);
  }
};
Particle.prototype.run = function(){
  if(this.t === 0){
    noStroke();
    fill(0);
    ellipse(this.x,this.y,this.s,this.s);
    this.x+=this.xVel;
    this.y+=this.yVel;
    this.s-=0.25;
    if(this.s <= 0){
      this.dead = true;
    }
  }
  if(this.t === 1){
    noStroke();
    fill(200,100,0,50);
    ellipse(this.x,this.y,this.s,this.s);
    this.y+=this.yVel;
    this.x-=abs(this.xVel);
    this.s-=0.25;
  }
  if(this.t === 2){
    noStroke();
    fill(0,0,0,50);
    ellipse(this.x,this.y,this.s,this.s);
    this.y+=this.yVel;
    this.x-=abs(this.xVel);
    this.s-=0.25;
  }
};
var drawTower = function(type,x,y,r){
      rectMode(CENTER);
      noStroke();
  strokeWeight(1);
      //basic turret classes
      switch(type){
        case TOWERS[0][0]:{
          pushMatrix();
          translate(x,y);
          rotate(ang(r));
          basicTowerBase(0,0);
          basicTowerBarrel(40,20);
          popMatrix();
        }break;
        case TOWERS[0][1]:{
          noStroke();
          pushMatrix();
          translate(x,y);
          rotate(ang(r));
          pushMatrix();
      translate(-100,-100);
fill(50,50,50);
rect(100,100,20,60);
rect(100,100,60,20);
fill(100,100,100);
rect(100,100,50,50,10);
fill(80,80,80);
polygon([
  [75,82],
  [75,118],
  [85,115],
  [85,85],
]);
polygon([
  [125,82],
  [125,118],
  [115,115],
  [115,85],
]);
fill(120,120,120);
rect(100,100,30,30);
      popMatrix();
          basicTowerBarrel(40,12);
          fill(100,0,150);
          rect(12,0,6,3);
          rect(12,-5,6,3);
          rect(12,5,6,3);
          rect(0,22,3,6);
          rect(-5,22,3,6);
          rect(5,22,3,6);
          rect(0,-22,3,6);
          rect(-5,-22,3,6);
          rect(5,-22,3,6);
          popMatrix();
        }break;
        case TOWERS[0][2]:{
          pushMatrix();
          translate(x,y);
          rotate(ang(r));
          basicTowerBase(0,0);
          fill(0);
          quad(85-100,75-100,115-100,75-100,110-100,80-100,90-100,80-100);
          quad(75-100,85-100,75-100,115-100,80-100,110-100,80-100,90-100);
          quad(85-100,75-100+50,115-100,75-100+50,110-100,80-100+40,90-100,80-100+40);
          rect(0,0,30,5);
          rect(5,-12,3,6);
          rect(0,-12,3,6);
          rect(-5,-12,3,6);
          rect(5,12,3,6);
          rect(0,12,3,6);
          rect(-5,12,3,6);
          basicTowerBarrel(40,20);
          popMatrix();
        }break;
        case TOWERS[0][3]:{
          pushMatrix();
      translate(x,y);
          rotate(ang(r));
          translate(-100,-100);
fill(0,100,150);
rect(100,100,30,60);
rect(100,100,60,30);
fill(0,150,200);
rect(100,100,50,50);
fill(0,125,175);
polygon([
  [75,75],
  [75,125],
  [85,115],
  [85,85],
]);
          fill(80,80,80);
polygon([
  [125,75],
  [125,125],
  [115,115],
  [115,85],
]);
fill(120,120,120);
rect(100,100,30,30);
          translate(100,100);
          basicTowerBarrel(40,20);
          fill(0,150,200);
          rect(0,0,30,5);
          rect(0,0,5,30);
          rect(0,0,15,15);
      popMatrix();
        }break;
        case TOWERS[0][4]:{
          pushMatrix();
      translate(x,y);
          rotate(ang(r));
          translate(-100,-100);
fill(0,100,150);
rect(100,100,30,60);
rect(100,100,60,30);
fill(0,150,200);
rect(100,100,50,50);
fill(0,125,175);
polygon([
  [75,75],
  [75,125],
  [85,115],
  [85,85],
]);
          fill(80,80,80);
polygon([
  [125,75],
  [125,125],
  [115,115],
  [115,85],
]);
fill(120,120,120);
rect(100,100,30,30);
          translate(100,100);
          basicTowerBarrel(40,15,10);
          basicTowerBarrel(40,15,-10);
          fill(0,150,200);
          rect(0,0,30,5);
          rect(0,0,5,30);
          rect(0,0,15,15);
      popMatrix();
        }break;
        case TOWERS[0][5]:{
          pushMatrix();
      translate(x,y);
          rotate(ang(r));
          translate(-100,-100);
fill(75,25,0);
rect(100,100,30,60);
rect(100,100,60,30);
fill(0,100,0);
rect(100,100,50,50);
fill(100,50,0);
polygon([
  [75,75],
  [75,125],
  [85,115],
  [85,85],
]);
polygon([
  [125,75],
  [125,125],
  [115,115],
  [115,85],
]);
fill(0,120,0);
rect(100,100,30,30);
          translate(100,100);
          basicTowerBarrel(40,15,10);
          basicTowerBarrel(40,15,-10);
          noStroke();
          fill(0,0,0);
          rect(0,0,30,5);
          rect(0,0,5,30);
          rect(0,0,15,15);
      popMatrix();
        }break;
      }
      //machinegun/gattler classes
      switch(type){
        case TOWERS[1][0]:{
          startMatrix(x,y,r);
          translate(-100,-100);
          gattlingTowerBase();
          translate(100,100);
          basicTowerBarrel(40,10);
          popMatrix();
        }break;
        case TOWERS[1][1]:{
          startMatrix(x,y,r);
          translate(-100,-100);
          gattlingTowerBase();
          translate(100,100);
          basicTowerBarrel(40,10,0,60);
          basicTowerBarrel(37,10,5,70);
          basicTowerBarrel(37,10,-5,80);
          popMatrix();
        }break;
        case TOWERS[1][2]:{
          startMatrix(x,y,r);
          translate(-100,-100);
          gattlingTowerBase();
          translate(100,100);
          basicTowerBarrel(40,10);
          stroke(255,0,0);
          fill(255);
          strokeWeight(0.5);
          rect(0,0,2,20);
          rect(20,0,40,2);
          ellipse(0,0,10,10);
          popMatrix();
        }break;
        case TOWERS[1][3]:{
          startMatrix(x,y,r);
          translate(-100,-100);
          gattlingTowerBase();
          translate(100,100);
          basicTowerBarrel(40,10,0,60);
          basicTowerBarrel(37,10,5,70);
          basicTowerBarrel(37,10,-5,80);
          stroke(255,0,0);
          fill(255);
          strokeWeight(0.5);
          rect(0,0,2,20);
          rect(20,0,40,2);
          rect(40,5,20,2);
          rect(40,-5,20,2);
          ellipse(0,0,10,10);
          popMatrix();
        }break;
        case TOWERS[1][4]:{
          startMatrix(x,y,r);
          translate(-100,-100);
          gattlingTowerBase();
          translate(100,100);
          basicTowerBarrel(40,8,6,60);
          basicTowerBarrel(40,8,-6,60);
          basicTowerBarrel(42,8,0,60);
          basicTowerBarrel(37,8,4,70);
          basicTowerBarrel(37,8,-4,80);
          popMatrix();
        }break;
        case TOWERS[1][5]:{
          startMatrix(x,y,r);
          translate(-100,-100);
          gattlingTowerBase();
          translate(100,100);
          basicTowerBarrel(40,8,6,60);
          basicTowerBarrel(40,8,-6,60);
          basicTowerBarrel(42,8,0,60);
          basicTowerBarrel(37,8,4,70);
          basicTowerBarrel(37,8,-4,80);
          strokeWeight(2);
          stroke(0,150,200);
          fill(0,200,250);
          rect(-5,0,30,5);
          strokeWeight(1);
          rect(0,-15,3,6);
          rect(5,-15,3,6);
          rect(10,-15,3,6);
          rect(-5,-15,3,6);
          rect(-10,-15,3,6);
          rect(0,15,3,6);
          rect(5,15,3,6);
          rect(10,15,3,6);
          rect(-5,15,3,6);
          rect(-10,15,3,6);
          rect(25,-5,4,2);
          rect(30,-5,4,2);
          rect(35,-5,4,2);
          rect(40,-5,4,2);
          rect(45,-5,4,2);
          rect(50,-5,4,2);
          rect(25,5,4,2);
          rect(30,5,4,2);
          rect(35,5,4,2);
          rect(40,5,4,2);
          rect(45,5,4,2);
          rect(50,5,4,2);
          popMatrix();
        }break;
        case TOWERS[1][6]:{
          startMatrix(x,y,r);
          translate(-100,-100);
          gattlingTowerBase();
          translate(100,100);
          basicTowerBarrel(40,8,6,60);
          basicTowerBarrel(40,8,-6,60);
          basicTowerBarrel(42,8,0,60);
          basicTowerBarrel(37,8,4,70);
          basicTowerBarrel(37,8,-4,80);
          strokeWeight(2);
          stroke(200,0,0);
          fill(250,0,0);
          rect(-5,0,30,5);
          strokeWeight(1);
          rect(0,-15,3,6);
          rect(5,-15,3,6);
          rect(10,-15,3,6);
          rect(-5,-15,3,6);
          rect(-10,-15,3,6);
          rect(0,15,3,6);
          rect(5,15,3,6);
          rect(10,15,3,6);
          rect(-5,15,3,6);
          rect(-10,15,3,6);
          rect(25,-5,4,2);
          rect(30,-5,4,2);
          rect(35,-5,4,2);
          rect(40,-5,4,2);
          rect(45,-5,4,2);
          rect(50,-5,4,2);
          rect(25,5,4,2);
          rect(30,5,4,2);
          rect(35,5,4,2);
          rect(40,5,4,2);
          rect(45,5,4,2);
          rect(50,5,4,2);
          popMatrix();
        }break;
      }
      //AA gun classes
      switch(type){
        case TOWERS[2][0]:{
          startMatrix(x,y,r);
          translate(-100,-100);
          AAgunBase();
          translate(100,100);
          basicTowerBarrel(25,25);
          popMatrix();
        }break;
        case TOWERS[2][1]:{
          startMatrix(x,y,r);
          translate(-100,-100);
          AAgunBase();
          translate(100,100);
          basicTowerBarrel(25,25);
          stroke(150,0,0);
          strokeWeight(2);
          fill(200,0,0);
          ellipse(-10,0,7.5,7.5);
          rect(0,0,10,5,3);
          rect(13,0,10,5,3);
          ellipse(25,0,5,5);
          popMatrix();
        }break;
        case TOWERS[2][2]:{
          startMatrix(x,y,r);
          translate(-100,-100);
          AAgunBase();
          translate(100,100);
          basicTowerBarrel(50,15);
          stroke(0,50,150);
          strokeWeight(2);
          fill(0,100,200);
          ellipse(-10,0,7.5,7.5);
          rect(0,0,10,5,3);
          rect(13,0,10,5,3);
          rect(45,0,10,5,3);
          rect(35,0,10,5,3);
          rect(55,0,10,5,3);
          ellipse(65,0,5,5);
          popMatrix();
        }break;
        case TOWERS[2][3]:{
          startMatrix(x,y,r);
          translate(-100,-100);
          AAgunBase();
          translate(100,100);
          basicTowerBarrel(25,25,-12);
          basicTowerBarrel(25,25,12,90);
          stroke(150,0,0);
          strokeWeight(2);
          fill(200,0,0);
          ellipse(-10,0,7.5,7.5);
          rect(0,0,10,5,3);
          rect(20,-15,20,3);
          rect(20,15,20,3);
          popMatrix();
        }break;
        case TOWERS[2][4]:{
          startMatrix(x,y,r);
          translate(-100,-100);
          AAgunBase();
          translate(100,100);
          basicTowerBarrel(35,15);
          stroke(0,150,50);
          strokeWeight(2);
          fill(0,200,100);
          ellipse(-10,0,7.5,7.5);
          rect(5,0,15,5,3);
          rect(30,0,25,5);
          popMatrix();
        }break;
        case TOWERS[2][5]:{
          startMatrix(x,y,r);
          translate(-100,-100);
          AAgunBase();
          translate(100,100);
          basicTowerBarrel(30,30);
          stroke(150,0,0);
          strokeWeight(2);
          fill(200,0,0);
          rect(-5,0,10,10,3);
          rect(2,0,5,3,2);
          rect(5,0,5,3,2);
          rect(10,0,7,5,2);
          rect(15,0,9,7,2);
          rect(25,0,11,9,2);
          popMatrix();
        }break;
        case TOWERS[2][6]:{
          startMatrix(x,y,r);
          translate(-100,-100);
          AAgunBase();
          translate(100,100);
          basicTowerBarrel(35,20,0,80);
          basicTowerBarrel(30,20,-10,90);
          basicTowerBarrel(30,20,10);
          stroke(150,0,0);
          strokeWeight(2);
          fill(200,0,0);
          rect(-5,0,10,10,3);
          rect(2,-10,5,3,2);
          rect(5,-10,5,3,2);
          rect(10,-10,7,5,2);
          rect(15,-10,9,7,2);
          rect(25,-10,11,9,2);
          rect(2,10,5,3,2);
          rect(5,10,5,3,2);
          rect(10,10,7,5,2);
          rect(15,10,9,7,2);
          rect(25,10,11,9,2);
          popMatrix();
        }break;
      }
      //sniper tower classes
      switch(type){
        case TOWERS[3][0]:{
          startMatrix(x,y,r,1);
          translate(-100,-100);
          sniperTowerBase();
          translate(100,100);
          noFill();
          strokeWeight(2);
          stroke(150,0,0);
          ellipse(0,0,20,20);
          rect(0,0,30,1);
          rect(0,0,1,30);
          basicTowerBarrel(40,15);
          popMatrix();
        }break;
        case TOWERS[3][1]:{
          startMatrix(x,y,r,1);
          translate(-100,-100);
          sniperTowerBase();
          translate(100,100);
          noFill();
          strokeWeight(2);
          stroke(150,0,0);
          ellipse(0,0,20,20);
          rect(0,0,30,1);
          rect(0,0,1,30);
          rect(0,-23,1,5);
          rect(5,-23,1,5);
          rect(-5,-23,1,5);
          rect(0,23,1,5);
          rect(5,23,1,5);
          rect(-5,23,1,5);
          basicTowerBarrel(40,15);
          popMatrix();
        }break;
        case TOWERS[3][2]:{
          startMatrix(x,y,r,1);
          translate(-100,-100);
          sniperTowerBase();
          translate(100,100);
          noFill();
          strokeWeight(2);
          stroke(0,100,200);
          ellipse(0,0,20,20);
          rect(0,0,30,1);
          rect(0,0,1,30);
          rect(0,-23,1,5);
          rect(5,-23,1,5);
          rect(-5,-23,1,5);
          rect(0,23,1,5);
          rect(5,23,1,5);
          rect(-5,23,1,5);
          basicTowerBarrel(40,15);
          fill(0,100,200);
          translate(25,0);
          rect(2,0,5,3,2);
          rect(5,0,5,3,2);
          rect(10,0,7,5,2);
          rect(15,0,9,7,2);
          rect(25,0,11,9,2);
          popMatrix();
        }break;
        case TOWERS[3][3]:{
          startMatrix(x,y,r,1);
          translate(-100,-100);
          sniperTowerBase();
          translate(100,100);
          noFill();
          strokeWeight(2);
          stroke(100,0,200);
          ellipse(0,0,20,20);
          rect(0,0,30,1);
          rect(0,0,1,30);
          rect(-23,0,5,1);
          rect(-23,5,5,1);
          rect(-23,-5,5,1);
          noStroke();
          fill(0);
          quad(85-100,75-100,115-100,75-100,110-100,80-100,90-100,80-100);
          quad(85-100,75-100+50,115-100,75-100+50,110-100,80-100+40,90-100,80-100+40);
          basicTowerBarrel(40,15);
          popMatrix();
        }break;
        case TOWERS[3][4]:{
          startMatrix(x,y,r,1);
          translate(-100,-100);
          sniperTowerBase();
          translate(100,100);
          noFill();
          strokeWeight(2);
          stroke(0,100,200);
          ellipse(0,0,20,20);
          rect(0,0,30,1);
          rect(0,0,1,30);
          noStroke();
          fill(0,150,200);
          quad(85-100,75-100,115-100,75-100,110-100,80-100,90-100,80-100);
          quad(75-100,85-100,75-100,115-100,80-100,110-100,80-100,90-100);
          quad(85-100,75-100+50,115-100,75-100+50,110-100,80-100+40,90-100,80-100+40);
          basicTowerBarrel(50,15);
          popMatrix();
        }break;
        case TOWERS[3][5]:{
          startMatrix(x,y,r,1);
          translate(-100,-100);
          gattlingTowerBase();
          translate(100,100);
          noFill();
          strokeWeight(2);
          stroke(200,0,0);
          ellipse(0,0,20,20);
          rect(0,0,30,1);
          rect(0,0,1,30);
          noStroke();
          fill(150,0,0);
          quad(85-100,75-100,115-100,75-100,110-100,80-100,90-100,80-100);
          quad(75-100,85-100,75-100,115-100,80-100,110-100,80-100,90-100);
          quad(85-100,75-100+50,115-100,75-100+50,110-100,80-100+40,90-100,80-100+40);
          basicTowerBarrel(50,15);
          popMatrix();
        }break;
      }
      //freezer tower classes
      switch(type){
        case TOWERS[4][0]:{
          startMatrix(x,y,r,1);
          translate(-100,-100);
          noStroke();
          AAgunBase();
          translate(100,100);
          basicTowerBarrel(30,15,15,100);
          basicTowerBarrel(25,15,0,100);
          noStroke();
          translate(-100,-100);
          fill(100,100,100);
  ellipse(100,100,50,50);
  fill(120,120,120);
  ellipse(102,98,40,40);
  fill(140,140,140);
  ellipse(105,95,30,30);
          translate(100,100);
          basicTowerBarrel(30,15,-15,140);
          noStroke();
          fill(0,150,200);
          ellipse(45,-15,7.5,15);
          ellipse(45,15,7.5,15);
          popMatrix();
        }break;
        case TOWERS[4][1]:{
          startMatrix(x,y,r,1);
          translate(-100,-100);
          noStroke();
          AAgunBase();
          translate(100,100);
          basicTowerBarrel(30,15,15,100);
          basicTowerBarrel(25,15,0,100);
          noStroke();
          translate(-100,-100);
          fill(100,100,100);
  ellipse(100,100,50,50);
  fill(120,120,120);
  ellipse(102,98,40,40);
  fill(140,140,140);
  ellipse(105,95,30,30);
          translate(100,100);
          basicTowerBarrel(30,15,-15,140);
          noStroke();
          fill(0,150,200);
          ellipse(45,-15,7.5,15);
          ellipse(45,15,7.5,15);
          strokeWeight(2);
          stroke(0,50,100);
          fill(0,100,200);
          ellipse(0,0,15,15);
          rect(0,-20,3,6);
          rect(0,20,3,6);
          rect(-20,0,6,3);
          rect(20,0,6,3);
          popMatrix();
        }break;
        case TOWERS[4][2]:{
          startMatrix(x,y,r,1);
          translate(-100,-100);
          noStroke();
          AAgunBase();
          translate(100,100);
          basicTowerBarrel(30,15,15,100);
          basicTowerBarrel(25,15,0,100);
          noStroke();
          translate(-100,-100);
          fill(100,100,100);
  ellipse(100,100,50,50);
  fill(120,120,120);
  ellipse(102,98,40,40);
  fill(140,140,140);
  ellipse(105,95,30,30);
          translate(100,100);
          basicTowerBarrel(30,15,-15,140);
          strokeWeight(1);
          noStroke();
          fill(0,150,200);
          stroke(255);
          ellipse(45,-15,7.5,15);
          ellipse(45,15,7.5,15);
          stroke(255);
          fill(0,100,200);
          ellipse(0,0,15,15);
          rect(0,-20,3,6);
          rect(0,20,3,6);
          rect(-20,0,6,3);
          rect(20,0,6,3);
          popMatrix();
        }break;
        case TOWERS[4][3]:{
          startMatrix(x,y,r,1);
          translate(-100,-100);
          noStroke();
          AAgunBase();
          translate(100,100);
          basicTowerBarrel(30,15,15,100);
          basicTowerBarrel(25,15,0,100);
          noStroke();
          translate(-100,-100);
          fill(100,100,100);
  ellipse(100,100,50,50);
  fill(120,120,120);
  ellipse(102,98,40,40);
  fill(140,140,140);
  ellipse(105,95,30,30);
          translate(100,100);
          basicTowerBarrel(30,15,-15,140);
          strokeWeight(1);
          noStroke();
          fill(0,150,200);
          stroke(150,0,0);
          ellipse(45,-15,7.5,15);
          ellipse(45,15,7.5,15);
          stroke(100,0,0);
          fill(150,0,0);
          ellipse(0,0,15,15);
          rect(0,-20,3,6);
          rect(0,20,3,6);
          rect(-20,0,6,3);
          rect(20,0,6,3);
          popMatrix();
        }break;
        case TOWERS[4][4]:{
          startMatrix(x,y,r,1);
          translate(-100,-100);
          noStroke();
          AAgunBase();
          translate(100,100);
          basicTowerBarrel(30,15,15,100);
          basicTowerBarrel(25,15,0,100);
          noStroke();
          translate(-100,-100);
          fill(100,100,100);
  ellipse(100,100,50,50);
  fill(120,120,120);
  ellipse(102,98,40,40);
  fill(140,140,140);
  ellipse(105,95,30,30);
          translate(100,100);
          basicTowerBarrel(30,15,-15,140);
          strokeWeight(1);
          noStroke();
          fill(0,150,200);
          stroke(0,100,150);
          strokeWeight(2);
          line(-10,-10,10,10);
          line(-10,10,10,-10);
          strokeWeight(1);
          ellipse(45,-15,7.5,15);
          ellipse(45,15,7.5,15);
          stroke(0,100,150);
          fill(0,150,200);
          ellipse(0,0,15,15);
          rect(0,-20,3,6);
          rect(0,20,3,6);
          rect(-20,0,6,3);
          rect(20,0,6,3);
          popMatrix();
        }break;
      }
      //laser cannon classes
      switch(type){
        case TOWERS[5][0]:{
          startMatrix(x,y,r,1);
          translate(-100,-100);
          AAgunBase();
          translate(100,100);
          basicTowerBarrel(40,10);
          stroke(150,0,0);
          fill(200,0,0);
          ellipse(0,0,15,15);
          rect(13,0,8,3,2);
          rect(25,0,8,3,2);
          rect(37,0,8,5,2);
          rect(49,0,8,3,2);
          popMatrix();
        }break;
        case TOWERS[5][1]:{
          startMatrix(x,y,r,1);
          translate(-100,-100);
          AAgunBase();
          translate(100,100);
          basicTowerBarrel(40,10,-10);
          basicTowerBarrel(40,10,10);
          stroke(150,0,0);
          fill(200,0,0);
          ellipse(0,0,15,15);
          rect(13,0,8,3,2);
          rect(25,10,8,3,2);
          rect(37,10,8,5,2);
          rect(49,10,8,3,2);
          rect(25,-10,8,3,2);
          rect(37,-10,8,5,2);
          rect(49,-10,8,3,2);
          popMatrix();
        }break;
        case TOWERS[5][2]:{
          startMatrix(x,y,r,1);
          translate(-100,-100);
          AAgunBase();
          translate(100,100);
          basicTowerBarrel(40,20);
          stroke(150,0,0);
          fill(200,0,0);
          ellipse(0,0,15,15);
          rect(13,0,8,3,2);
          rect(25,0,8,5,2);
          rect(37,0,8,8,2);
          rect(49,0,8,5,2);
          popMatrix();
        }break;
        case TOWERS[5][3]:{
          startMatrix(x,y,r,1);
          translate(-100,-100);
          AAgunBase();
          translate(100,100);
          basicTowerBarrel(40,15);
          stroke(0,150,0);
          fill(0,200,0);
          ellipse(0,0,15,15);
          rect(13,0,8,3,2);
          rect(25,0,8,3,2);
          rect(37,0,8,5,2);
          rect(49,0,8,3,2);
          popMatrix();
        }break;
        case TOWERS[5][4]:{
          startMatrix(x,y,r,1);
          translate(-100,-100);
          AAgunBase();
          translate(100,100);
          basicTowerBarrel(40,15,-10);
          basicTowerBarrel(40,15,10);
          stroke(0,150,0);
          fill(0,200,0);
          ellipse(0,0,15,15);
          rect(13,0,8,3,2);
          rect(25,10,8,3,2);
          rect(37,10,8,5,2);
          rect(49,10,8,3,2);
          rect(25,-10,8,3,2);
          rect(37,-10,8,5,2);
          rect(49,-10,8,3,2);
          popMatrix();
        }break;
        case TOWERS[5][5]:{
          startMatrix(x,y,r,1);
          translate(-100,-100);
          AAgunBase();
          translate(100,100);
          basicTowerBarrel(35,17.5,-10);
          basicTowerBarrel(35,17.5,10);
          stroke(150,0,0);
          fill(200,0,0);
          ellipse(0,0,15,15);
          rect(13,0,8,3,2);
          rect(25-5,10,8,3,2);
          rect(37-5,10,8,5,2);
          rect(49-5,10,8,3,2);
          rect(25-5,-10,8,3,2);
          rect(37-5,-10,8,5,2);
          rect(49-5,-10,8,3,2);
          popMatrix();
        }break;
        case TOWERS[5][6]:{
          startMatrix(x,y,r,1);
          translate(-100,-100);
          AAgunBase();
          translate(100,100);
          basicTowerBarrel(50,10);
          stroke(150,150,0);
          fill(200,200,0);
          ellipse(0,0,15,15);
          rect(13,0,8,3,2);
          rect(25,0,8,3,2);
          rect(40,0,8,5,2);
          rect(55,0,8,3,2);
          rect(0,-15,3,8);
          rect(0,15,3,8);
          rect(-15,0,8,3);
          popMatrix();
        }break;
        case TOWERS[5][7]:{
          startMatrix(x,y,r,1);
          translate(-100,-100);
          AAgunBase();
          translate(100,100);
          basicTowerBarrel(45,15);
          stroke(0,150,150);
          fill(0,200,200);
          ellipse(0,0,15,15);
          rect(13,0,8,3,2);
          rect(25,0,8,3,2);
          rect(40,0,8,5,2);
          rect(55,0,8,3,2);
          rect(0,-15,3,8);
          rect(0,15,3,8);
          rect(-15,0,8,3);
          popMatrix();
        }break;
        case TOWERS[5][8]:{
          startMatrix(x,y,r,1);
          basicTowerBase();
          translate(-100,-100);
          AAgunBase();
          translate(100,100);
          basicTowerBarrel(30,30);
          stroke(0,150,0);
          fill(0,200,0);
          ellipse(0,0,15,15);
          rect(13,0,8,3,2);
          rect(23,0,8,7,2);
          rect(33,0,8,7,2);
          rect(0,-15,3,8);
          rect(0,15,3,8);
          rect(-15,0,8,3);
          popMatrix();
        }break;
        case TOWERS[5][9]:{
          startMatrix(x,y,r,1);
          basicTowerBase();
          translate(-100,-100);
          AAgunBase();
          translate(100,100);
          basicTowerBarrel(35,10,0,70);
          basicTowerBarrel(33,10,5,80);
          basicTowerBarrel(33,10,-5,90);
          basicTowerBarrel(30,10);
          stroke(150,0,0);
          fill(200,0,0);
          ellipse(0,0,15,15);
          rect(13,0,8,3,2);
          rect(23,0,8,3,2);
          rect(33,0,8,3,2);
          rect(0,-15,3,8);
          rect(0,15,3,8);
          rect(-15,0,8,3);
          popMatrix();
        }break;
      }
      //demolition tower classes
      switch(type){
        case TOWERS[6][0]:{
          startMatrix(x,y,r,1);
          basicTowerBase();
          basicTowerBarrel(45,15);
          stroke(0,250,100);
          fill(0,200,20);
          ellipse(0,0,15,15);
          fill(0,200,20);
          rect(13,0,8,3,2);
          rect(25,0,8,3,2);
          rect(40,0,8,5,2);
          rect(55,0,8,3,2);
          fill(0);
          rect(0,-15,3,8);
          rect(0,15,3,8);
          rect(-15,0,8,3);
          popMatrix();
        }break;
        case TOWERS[6][1]:{
          startMatrix(x,y,r);
          translate(-100,-100);
          AAgunBase();
          translate(100,100);
          fill(0,250,0);
          strokeWeight(2);
          stroke(0,200,0);
          rect(0,0,40,0);
          rect(0,0,0,40);
          rotate(ang(45));
          rect(0,0,40,0);
          rect(0,0,0,40);
          rotate(ang(-45));
          ellipse(0,0,20,20);
          popMatrix();
        }break;
        case TOWERS[6][2]:{
          startMatrix(x,y,r,1);
          basicTowerBase();
          translate(-100,-100);
          gattlingTowerBase();
          translate(100,100);
          basicTowerBarrel(45,10,0,70);
          basicTowerBarrel(43,10,5,80);
          basicTowerBarrel(43,10,-5,90);
          basicTowerBarrel(40,10);
          stroke(200,100,0);
          fill(250,150,0);
          ellipse(0,0,15,15);
          rect(13,0,8,3,2);
          rect(25,0,8,3,2);
          rect(40,0,8,5,2);
          rect(50,0,8,3,2);
          rect(0,-15,3,8);
          rect(0,15,3,8);
          rect(-15,0,8,3);
          popMatrix();
        }break;
        case TOWERS[6][3]:{
          startMatrix(x,y,r,1);
          basicTowerBase();
          translate(-100,-100);
          AAgunBase();
          translate(100,100);
          basicTowerBarrel(45,25);
          stroke(50);
          fill(100);
          ellipse(0,0,15,15);
          rect(13,0,8,3,2);
          rect(25,0,8,3,2);
          rect(37,0,8,8,2);
          rect(49,0,10,10,2);
          noFill();
          stroke(200,150,0);
          rect(0,-15,3,8);
          rect(0,15,3,8);
          rect(-15,0,8,3);
          popMatrix();
        }break;
        case TOWERS[6][4]:{
          startMatrix(x,y,r,1);
          basicTowerBase();
          translate(-100,-100);
          AAgunBase();
          translate(100,100);
          basicTowerBarrel(45,25);
          stroke(255,255,0);
          fill(0);
          ellipse(0,0,15,15);
          rect(13,0,8,3,2);
          rect(25,0,8,3,2);
          rect(37,0,8,8,2);
          rect(49,0,10,10,2);
          rect(0,-15,3,8);
          rect(0,15,3,8);
          rect(-15,0,8,3);
          popMatrix();
        }break;
        case TOWERS[6][5]:{
          startMatrix(x,y,r,1);
          translate(-100,-100);
          sniperTowerBase();
          AAgunBase();
          translate(100,100);
          basicTowerBarrel(30,40);
          popMatrix();
        }break;
      }
    };
var drawEnemy = function(type,x,y,r){
  rectMode(CENTER);
  noStroke();
  //footsoldier classes
  switch(type){
    case ENEMIES[0][0]:{
      startMatrix(x,y,r,1);
      translate(-100,-100);
      fill(0,0,0);
stroke(80,80,0);
strokeWeight(5);
line(100,90,125,113-15);
line(100,113,117,116-15);
noStroke();
fill(100,100,0);
rect(100,100,15,30,5);
noStroke();
fill(255,210,150);
ellipse(100,100,20,20);
      fill(100);
      rect(130,100,30,5);
      translate(100,100);
      popMatrix();
    }break;
    case ENEMIES[0][1]:{
      startMatrix(x,y,r,1);
      translate(-100,-100);
      fill(0,0,0);
stroke(0,100,0);
strokeWeight(5);
line(100,90,115,113-15);
line(100,113,117,116-15);
noStroke();
fill(0,150,0);
rect(100,100,15,30,5);
noStroke();
fill(255,210,150);
ellipse(100,100,20,20);
      fill(100);
      rect(120,100,15,5);
      translate(100,100);
      popMatrix();
    }break;
    case ENEMIES[0][2]:{
      startMatrix(x,y,r,1);
      translate(-100,-100);
      fill(0,0,0);
stroke(80,80,0);
strokeWeight(5);
line(100,90,125,113-15);
line(100,113,117,116-15);
noStroke();
fill(100,100,0);
rect(100,100,15,30,5);
noStroke();
fill(255,210,150);
ellipse(100,100,20,20);
      fill(150,50,0);
      rect(130,100,20,8,3);
      fill(100);
      rect(130,100,30,5);
      rect(125,98,10,7);
      fill(120,120,0);
      ellipse(95,100,14,20);
      translate(100,100);
      popMatrix();
    }break;
    case ENEMIES[0][3]:{
      startMatrix(x,y,r,1);
      translate(-100,-100);
      fill(0,0,0);
stroke(50);
strokeWeight(5);
line(100,90,90,90);
      line(90,90,100,85);
line(100,113,110,118);
      line(110,118,115,118);
noStroke();
fill(80);
rect(100,100,15,30,5);
noStroke();
fill(255,210,150);
ellipse(100,100,20,20);
      fill(100);
      rect(115,118,5,10);
      rect(125,118,20,30,3);
      fill(255,0,0);
      rect(125,118,3,12);
      rect(125,118,12,3);
      translate(100,100);
      popMatrix();
    }break;
    case ENEMIES[0][4]:{
      startMatrix(x,y,r,1);
      translate(-100,-100);
      fill(0,0,0);
stroke(100,0,0);
strokeWeight(5);
line(100,113-25,110,118-35);
      line(110,118-35,115,118-35);
line(100,113,110,118);
      line(110,118,115,118);
noStroke();
fill(180,0,0);
rect(100,100,15,30,5);
noStroke();
      fill(100);
      rect(90,100,10,15,5);
fill(255,210,150);
ellipse(100,100,20,20);
      translate(100,100);
      popMatrix();
    }break;
    case ENEMIES[0][5]:{
      startMatrix(x,y,r,1);
      translate(-100,-100);
noStroke();
fill(0,0,0,50);
rect(100,100,15,30,5);
fill(255,210,150);
ellipse(100,100,20,20);
      translate(100,100);
      popMatrix();
    }break;
    case ENEMIES[0][6]:{
      startMatrix(x,y,r,1);
      translate(-100,-100);
      soldierGraphic();
      translate(100,100);
      popMatrix();
    }break;
  }
  //tanks
  switch(type){
    case ENEMIES[1][0]:{
      startMatrix(x,y,r);
      translate(-100,-100);
      tankBase([0,100,0]);
      basicTankBarrel(40,10,0,0,[0,90,0]);
      translate(100,100);
      popMatrix();
    }break;
    case ENEMIES[1][1]:{
      startMatrix(x,y,r);
      translate(-100,-100);
      tankBase([100,0,0]);
      basicTankBarrel(40,10,10,0,[90,0,0]);
      basicTankBarrel(40,10,-10,0,[90,0,0]);
      translate(100,100);
      popMatrix();
    }break;
    case ENEMIES[1][2]:{
      startMatrix(x,y,r);
      translate(-100,-100);
      tankBase([100,100,100]);
      basicTankBarrel(50,20,0,0,[80,80,80]);
      translate(100,100);
      popMatrix();
    }break;
    case ENEMIES[1][3]:{
      startMatrix(x,y,r);
      translate(-100,-100);
      carBase([194, 190, 119]);
      translate(100,100);
      popMatrix();
    }break;
    case ENEMIES[1][4]:{
      startMatrix(x,y,r);
      translate(-100,-100);
      tankBase([150,50,0]);
      translate(100,100);
      popMatrix();
    }break;
    case ENEMIES[1][5]:{
      startMatrix(x,y,r);
      translate(-100,-100);
      tankBase([120,120,120]);
      apcBase([120,120,120]);
      translate(100,100);
      popMatrix();
    }break;
    case ENEMIES[1][6]:{
      startMatrix(x,y,r);
      translate(-100,-100);
      tankBase([80,80,80]);
      translate(100,100);
      drawTower(TOWERS[1][1],0,0,0);
      popMatrix();
    }break;
    case ENEMIES[1][7]:{
      startMatrix(x,y,r);
      translate(-150,-150);
      scale(1.5);
      tankBase([80,80,80]);
      sniperTowerBase();
      translate(100,100);
      popMatrix();
    }break;
  }
  //naval units
  switch(type){
    case ENEMIES[2][0]:{
      startMatrix(x,y,r);
      translate(-40,0);
      strokeWeight(2);
      fill(100);
      stroke(200);
      ellipse(50,0,80,30);
      polygon([
        [50,-15],
        [0,-10],
        [0,10],
        [50,15]
      ]);
      fill(180);
      stroke(200);
      rect(40,0,10,15);
      rect(35,0,15,10);
      noStroke();
      fill(200);
      rect(60,0,8,8);
      rect(65,-2,8,2);
      rect(65,2,8,2);
      popMatrix();
    }break;
    case ENEMIES[2][1]:{
      startMatrix(x,y,r);
      translate(-70,0);
      strokeWeight(2);
      fill(100);
      stroke(200);
      ellipse(100,0,100,40);
      polygon([
        [100,-20],
        [5,-15],
        [0,-10],
        [0,10],
        [5,15],
        [100,20]
      ]);
      fill(150);
      stroke(200);
      rect(70,0,50,10);
      rect(75,0,25,16,5);
      strokeWeight(1);
      fill(180);
      ellipse(75,0,10,10);
      rect(75,0,5,15);
      noStroke();
      fill(200);
      rect(120,0,8,8);
      rect(125,-2,8,2);
      rect(125,2,8,2);
      rect(20,0,8,8);
      rect(25,-2,8,2);
      rect(25,2,8,2);
      popMatrix();
    }break;
    case ENEMIES[2][2]:{
      startMatrix(x,y,r);
      translate(-90,0);
      strokeWeight(2);
      fill(100);
      stroke(200);
      ellipse(140,0,100,40);
      polygon([
        [140,-20],
        [5,-15],
        [-5,-10],
        [-5,10],
        [5,15],
        [140,20]
      ]);
      translate(20,0);
      fill(150);
      stroke(200);
      rect(70,0,50,10);
      rect(75,0,25,16,5);
      strokeWeight(1);
      fill(180);
      ellipse(75,0,10,10);
      rect(75,0,5,15);
      ellipse(100,0,20,20);
      fill(150);
      ellipse(100,0,15,15);
      ellipse(100,0,10,10);
      rect(100,0,5,25);
      noStroke();
      translate(-10,0);
      fill(200);
      rect(140,0,10,10);
      rect(145,-3,10,3);
      rect(145,2,10,3);
      rect(20,0,10,10);
      rect(25,-3,10,3);
      rect(25,2,10,3);
      popMatrix();
    }break;
    case ENEMIES[2][3]:{
      startMatrix(x,y,r);translate(-50,0);
      strokeWeight(2);
      fill(50);
      noStroke();
      ellipse(50,0,80,30);
      polygon([
        [50,-15],
        [0,-10],
        [-10,-15],
        [-10,15],
        [0,10],
        [50,15],
      ]);
      stroke(80);
      fill(100);
      ellipse(50,0,20,8);
      noStroke();
      fill(0,50,200,100);
      rect(40,0,120,50);
      popMatrix();
    }break;
    case ENEMIES[2][4]:{
      startMatrix(x,y,r);
      translate(-150,-100);
      stroke(50);
      fill(100);
      strokeWeight(2);
      //250,110 230,120 5,120 0,80 20,80 70,70 100,75 183,78 185,75 225,77.5 225,85 300,90 300,110
      polygon([
        [250,110],
        [230,120],
        [5,120],
        [0,80],
        [20,80],
        [70,70],
        [100,75],
        [183,78],
        [185,75],
        [225,77.5],
        [225,85],
        [300,90],
        [300,110],
        [250,110],
      ]);
      translate(150,100);
      fill(50);
      ellipse(-100,0,30,30);
      ellipse(70,0,20,20);
      fill(255,255,0);
      textSize(25);
      textAlign(CENTER,CENTER);
      text("H",-100,0);
      fill(200);
      noStroke();
      translate(-20,0);
      rect(20,0,30,10);
      ellipse(5,-5,15,15);
      rect(20,-5,35,10);
      popMatrix();
    }break;
  }
  //aircraft & rockets
  switch(type){
    case ENEMIES[3][0]:{
    startMatrix(x,y,r);
      translate(20,0);
    fill(100);
      noStroke();
      ellipse(0,0,80,50);
      fill(0,200,250);
      ellipse(0,0,70,40);
      fill(100);
      rect(0,0,75,10);
      ellipse(-15,0,70,40);
      rect(-40,0,100,15);
      ellipse(-90,0,20,20);
      fill(random(0,100),random(100,200));
     ellipse(-90,0,30+random(-2,2),30+random(-2,2)); ellipse(-15,0,100+random(-5,5),100+random(-5,5));
      fill(0);
      ellipse(-15,0,10,10);
      ellipse(-90,0,5,5);
    popMatrix();
    }break;
    case ENEMIES[3][1]:{
    startMatrix(x,y,r);
      scale(1.5);
      translate(20,0);
    fill(100);
      noStroke();
      ellipse(0,0,80,50);
      fill(250,200,0);
      ellipse(0,0,70,40);
      fill(100);
      rect(0,0,75,10);
      ellipse(-15,0,70,40);
      rect(-40,0,100,15);
      ellipse(-90,0,20,20);
      fill(random(0,100),random(100,200));
     ellipse(-90,0,30+random(-2,2),30+random(-2,2)); ellipse(-15,0,100+random(-5,5),100+random(-5,5));
      fill(0);
      ellipse(-15,0,10,10);
      ellipse(-90,0,5,5);
    popMatrix();
    }break;
    case ENEMIES[3][2]:{
      startMatrix(x,y,r);
      fill(100,100,0);
      rect(0,0,17.5,80,3);
      fill(100);
      rect(-65,0,5,20,5);
      fill(90,120,0);
      noStroke();
      rect(0,0,60,20,5);
      rect(-20,0,60,15,5);
      rect(-40,0,60,10,5);
      rect(15,0,40,10,0);
      stroke(100);
      fill(80);
      strokeWeight(2);
      rect(0,0,20,10,5);
      noStroke();
      ellipse(35,0,2,40);
      fill(255);
      stroke(255,0,0);
      ellipse(0,30,10,10);
      ellipse(0,-30,10,10);
      fill(0,0,255);
      noStroke();
      ellipse(0,30,4,4);
      ellipse(0,-30,4,4);
      popMatrix();
    }break;
    case ENEMIES[3][3]:{
      startMatrix(x,y,r,1);
      scale(1.5);
      fill(80,80,80);
      rect(0,0,17.5,80,3);
      fill(100);
      rect(-65,0,5,20,5);
      noStroke();
      rect(0,0,60,20,5);
      rect(-20,0,60,15,5);
      rect(-40,0,60,10,5);
      rect(15,0,40,10,0);
      stroke(120);
      fill(80);
      strokeWeight(2);
      rect(0,0,20,10,5);
      noStroke();
      ellipse(35,0,2,40);
      popMatrix();
    }break;
    case ENEMIES[3][4]:{
      startMatrix(x,y,r);
      fill(100,100,100);
      strokeWeight(2);
      stroke(50);
      ellipse(20,0,80,20);
      polygon([
        [-20,0],
        [-45,-25],
        [-45,25],
        [-20,0],
      ]);
      polygon([
        [20,-10],
        [-50,-10],
        [-50,10],
        [20,10],
      ]);
      rect(-35,0,20,5,2);
      popMatrix();
    }break;
    case ENEMIES[3][5]:{
      startMatrix(x,y,r);
      fill(100);
      strokeWeight(2);
      stroke(50);
      ellipse(0,0,100,75);
      //95,92.5 55,92.5 50,95 55,97.5 95,97.5
      //97.5,80 75,60 55,60 70,70 85,85 80,85 80,115 85,115 70,130 55,140 75,140 97.5,120
      translate(-140,-100);
      fill(80);
      polygon([
        [95,92.5-5],
        [55,92.5-5],
        [50,95-5],
        [55,97.5-5],
        [95,97.5-5],
        
      ]);
      fill(100);
      polygon([
        [97.5,80],
        [75,60],
        [55,60],
        [70,70],
        [85,85],
        [80,85],
        [80,115],
        [85,115],
        [70,130],
        [55,140],
        [75,140],
        [97.5,120],
      ]);
      polygon([
        [95,92.5],
        [55,92.5],
        [50,95],
        [55,97.5],
        [95,97.5],
        
      ]);
      noStroke();
      translate(140,100);
      fill(120);
      ellipse(4,-4,90,65);
      fill(140);
      ellipse(10,-10,70,45);
      popMatrix();
    }break;
  }
  //titans
  switch(type){
    case ENEMIES[4][0]:{
      startMatrix(x,y,r+90);
      noStroke();
                pushMatrix();
                fill(60);
                fill(100);
                rect(0,0,120,40,10);
                fill(80);
                ellipse(0,0,80,80);
                fill(200,200,0,100);
                ellipse(0,0,60,60);
                ellipse(6,-6,40,40);
                ellipse(13,-13,20,20);
                fill(200,200,0);
                ellipse(0,-35,20,10);
                fill(80);
                rect(-45,-39,20,40);
                rect(45,-39,20,40);
                rect(-50,-60,8,5);
                rect(50,-60,8,5);
                rect(-40,-60,8,5);
                rect(40,-60,8,5);
                noFill();
                stroke(200,200,0);
                strokeWeight(3);
                line(-40,0,-50,0);
                line(40,0,50,0);
                line(50,0,50,-20);
                line(-50,0,-50,-20);
                line(-50,-20,-45,-20);
                line(50,-20,45,-20);
                line(45,-20,45,-60);
                line(-45,-20,-45,-60);
                line(-40,0,-30,-5);
                line(40,0,30,-5);
      popMatrix();
      popMatrix();
    }break;
    case ENEMIES[4][1]:{
      startMatrix(x,y,r+90);
      fill(100);
                ellipse(0,0,20,20);
                fill(120);
                ellipse(1,-1,15,15);
                fill(200,0,0);
                ellipse(0,-6,8,4);
                fill(100);
                rect(-12,-5,7,20,0,0,0,10);
                rect(12,-5,7,20,0,0,10,0);
                fill(200,0,0);
                ellipse(-12,-15,7,3);
                ellipse(13,-15,7,3);
                rect(0,0,2,10);
                rect(10,0,5,2);
                rect(-10,0,5,2);
                rect(-13,-4,2,10);
                rect(13,-4,2,10);
                noFill();
                stroke(200,0,0);
                strokeWeight(2);
                arc(0,0,15,10,0,ang(180));
                arc(13,-10,5,3,0,ang(180));
                arc(-12,-10,5,3,0,ang(180));
                noStroke();
      popMatrix();
    }break;
  }
  //bosses
  switch(type){
    case ENEMIES[5][0]:{
      startMatrix(x,y,r,1);
      fill(80,0,0);
    polygon([
    [0,0],
    [-20,-20],
    [-60,-20],
    [-70,-0],
    [-60,20],
    [-20,20],
    ]);
    fill(150,0,0);
    polygon([
    [50,-5],
    [50,5],
    [30,10],
    [25,5],
    [20,5],
    [10,7],
    [5,15],
    [10,25],
    [10,35],
    [15,45],
    [25,45],
    [15,50],
    [15,65],
    [10,75],
    [-10,80],
    [-30,80],
    [-50,70],
    [-40,65],
    [-35,60],
    [-35,50],
    [-40,40],
    [-35,30],
    [-35,20],
    [-40,15],
    [-150,0],
    ]);
    fill(100,0,0);
    polygon([
    [15,45],
    [25,45],
    [15,50],
    [15,65],
    [10,75],
    [-10,80],
    [-30,80],
    [-50,70],
    [-45,70],
    [-40,70],
    [-30,75],
    [-10,75],
    [5,70],
    ]);
    polygon([
    [-35,15],
    [-35,20],
    [-40,15],
    [-150,0],
    [-40,10],
    ]);
    scale(1,-1);
    fill(150,0,0);
    polygon([
    [50,-5],
    [50,5],
    [30,10],
    [25,5],
    [20,5],
    [10,7],
    [5,15],
    [10,25],
    [10,35],
    [15,45],
    [25,45],
    [15,50],
    [15,65],
    [10,75],
    [-10,80],
    [-30,80],
    [-50,70],
    [-40,65],
    [-35,60],
    [-35,50],
    [-40,40],
    [-35,30],
    [-35,20],
    [-40,15],
    [-150,0],
    ]);
    fill(100,0,0);
    polygon([
    [15,45],
    [25,45],
    [15,50],
    [15,65],
    [10,75],
    [-10,80],
    [-30,80],
    [-50,70],
    [-45,70],
    [-40,70],
    [-30,75],
    [-10,75],
    [5,70],
    ]);
    polygon([
    [-35,15],
    [-35,20],
    [-40,15],
    [-150,0],
    [-40,10],
    ]);
    fill(170,0,0);
    polygon([
    [10,0],
    [-0,-20],
    [-30,-20],
    [-40,0],
    [-30,20],
    [0,20],
    ]);
    fill(180,0,0);
    polygon([
    [-150,0],
    [-40,-5],
    [50,-5],
    [50,5],
    [-40,5],
    ]);
      popMatrix();
    }break;
    case ENEMIES[5][1]:{
      startMatrix(x,y,r);
      particles.push(new Particle(0,x,y));
      fill(0);
      ellipse(0,0,50,50);
      fill(255,0,0);
      arc(10,-10,10,10,ang(-90),ang(90));
      arc(10,10,10,10,ang(-90),ang(90));
      popMatrix();
    }break;
  }
  //techno
  switch(type){
    case ENEMIES[6][0]:{
      startMatrix(x,y,r);
      fill(100);
      stroke(60);
      strokeWeight(5);
      line(0,-10,20,0);
      line(0,10,20,0);
      noStroke();
      rect(0,0,15,30,5);
      fill(120);
      ellipse(0,0,20,20);
      fill(140);
      ellipse(2,-2,15,15);
      fill(160);
      ellipse(3,-3,10,10);
      fill(0,200,250);
      ellipse(5,-3,3,4);
      ellipse(5,3,3,4);
      for(var i = 0; i < 10; i++){
        fill(0,200,250,15);
        ellipse(20,0,i*20,i*20);
      }
      popMatrix();
    }break;
    case ENEMIES[6][1]:{
      startMatrix(x,y,r);
      fill(100);
      stroke(60);
      strokeWeight(5);
      line(0,-10,15,-15);
      line(0,10,15,15);
      line(15,-15,20,-15);
      line(15,15,20,15);
      noStroke();
      rect(0,0,15,30,5);
      fill(120);
      ellipse(0,0,20,20);
      fill(140);
      ellipse(2,-2,15,15);
      fill(160);
      ellipse(3,-3,10,10);
      fill(250,200,0);
      ellipse(5,-3,2,4);
      ellipse(5,3,2,4);
      
      popMatrix();
    }break;
    case ENEMIES[6][2]:{
      startMatrix(x,y,r);
      noFill();
      stroke(30);
      strokeWeight(2);
      ellipse(0,10,30,20);
      noStroke();
      fill(50);
      rect(-10,0,10,15,5);
      fill(100);
      stroke(60);
      strokeWeight(5);
      line(0,-10,20,0);
      line(0,10,20,0);
      noStroke();
      rect(0,0,15,30,5);
      fill(120);
      ellipse(0,0,20,20);
      fill(140);
      ellipse(2,-2,15,15);
      fill(160);
      ellipse(3,-3,10,10);
      fill(200,0,255);
      ellipse(5,-3,4,2);
      ellipse(5,3,4,2);
      fill(30);
      rect(20,0,20,5);
      fill(200,0,255);
      rect(30,0,2,5);
      popMatrix();
    }break;
    case ENEMIES[6][3]:{
      startMatrix(x,y,r);
      noFill();
      stroke(30);
      strokeWeight(2);
      ellipse(0,10,30,20);
      noStroke();
      fill(50);
      rect(-10,0,10,15,5);
      fill(50);
      stroke(60);
      strokeWeight(5);
      line(0,-10,20,0);
      line(0,10,20,0);
      noStroke();
      rect(0,0,15,30,5);
      fill(60);
      ellipse(0,0,20,20);
      fill(70);
      ellipse(2,-2,15,15);
      fill(80);
      ellipse(3,-3,10,10);
      fill(0,255,0);
      ellipse(5,-3,2,4);
      ellipse(5,3,2,4);
      fill(30);
      rect(20,0,20,5);
      fill(0,255,0);
      rect(30,0,2,5);
      popMatrix();
    }break;
    case ENEMIES[6][4]:{
      startMatrix(x,y,r);
      fill(50);
      rect(-10,0,10,15,5);
      fill(100);
      stroke(60);
      strokeWeight(5);
      line(0,-10,15,-15);
      line(0,10,15,15);
      line(15,-15,20,-15);
      line(15,15,20,15);
      noStroke();
      rect(0,0,15,30,5);
      fill(120);
      ellipse(0,0,20,20);
      fill(140);
      ellipse(2,-2,15,15);
      fill(160);
      ellipse(3,-3,10,10);
      fill(0,200,250);
      ellipse(5,-3,2,4);
      ellipse(5,3,2,4);
      for(var i = 0; i < 5; i++){
       fill(0,200,250,50); ellipse(20,-15,i*sin(frameCount/10)*20,i*sin(frameCount/10)*20);
        ellipse(20,15,i*cos(frameCount/10)*20,i*cos(frameCount/10)*20);
      }
      popMatrix();
    }break;
    case ENEMIES[6][5]:{
      startMatrix(x,y,r);
      scale(2);
      fill(0,0,50);
      rect(-10,0,10,15,5);
      fill(0,0,100);
      stroke(0,0,60);
      strokeWeight(5);
      line(0,-10,15,-15);
      line(0,10,15,15);
      line(15,-15,20,-15);
      line(15,15,20,15);
      noStroke();
      rect(0,0,15,30,5);
      fill(0,0,120);
      ellipse(0,0,20,20);
      fill(0,0,140);
      ellipse(2,-2,15,15);
      fill(0,0,160);
      ellipse(3,-3,10,10);
      fill(0,200,250);
      ellipse(5,-3,2,4);
      ellipse(5,3,2,4);
      scale(0.5);
      for(var i = 0; i < 7; i++){
       fill(0,200,250,50); 
        pushMatrix();
        translate(0,0);
       rotate(ang(i)*60); ellipse(30,0,cos(frameCount/20)*200,cos(frameCount/10)*200);
        popMatrix();
      }
      popMatrix();
    }break;
    case ENEMIES[6][6]:{
      startMatrix(x,y,r);
      fill(50);
      rectMode(CORNER);
      rect(0,-100,sin(frameCount/20)*75,40);
      rect(0,60,cos(frameCount/20)*75,40);
      ellipse(sin(frameCount/20)*75,-80,20,40);
      ellipse(cos(frameCount/20)*75,80,20,40);
      fill(30);
      rect(0,-50,cos(frameCount/20)*90,40);
      rect(0,10,sin(frameCount/20)*90,40);
      ellipse(cos(frameCount/20)*90,-30,20,40);
      ellipse(sin(frameCount/20)*90,30,20,40);
      rectMode(CENTER);
      pushMatrix();
      translate(0,0);
      rotate(ang(90));
      scale(1.5,1);
      fill(50);
      hexagon();
      fill(0,200,255);
      scale(0.9);
      hexagon();
      fill(50);
      scale(0.9);
      hexagon();
      popMatrix();
      noStroke();
      fill(60);
      rect(0,0,50,200,20);
      fill(0,200,255);
      rect(0,0,50,150,10);
      fill(0,150,200);
      rect(3,0,3,150);
      fill(80);
      rect(-20,-40,30,80,5);
      rect(20,-40,30,80,5);
      rect(-20,40,30,80,5);
      rect(20,40,30,80,5);
      fill(60);
      rect(-32,0,5,160,5);
      rect(7,0,5,160,5);
      fill(100);
      ellipse(0,0,90,90);
      fill(0,200,255,100);
      scale(0.9);
      ellipse(0,0,80,80);
      ellipse(5,-5,70,70);
      ellipse(10,-10,50,50);
      scale(1/0.9);
      fill(0,200,255);
      ellipse(40,0,10,15);
      popMatrix();
    }break;
  }
};
var drawBullet = function(type,x,y,r,op){
  if(op === undefined){
    op = 100;
  }
  rectMode(CENTER);
  startMatrix(x,y,r);
  noStroke();
  switch(type){
    case BULLETS[0]:{
    fill(255,230,0);
    rect(0,0,20,7);
    }break;
    case BULLETS[1]:{
    fill(255,230,0);
    rect(0,0,15,5);
    }break;
    case BULLETS[2]:{
    fill(255,230,0);
    rect(0,0,30,10);
    }break;
    case BULLETS[3]:{
    fill(0,200,250);
      stroke(0,150,200);
      strokeWeight(2);
    rect(0,0,15,5);
    }break;
     case BULLETS[4]:{
    fill(0,0,0);
    rect(0,0,15,5);
    }break;
    case BULLETS[5]:{
    fill(255);
      stroke(0,255,0);
      strokeWeight(1);
    rect(0,0,50,5,5);
    }break;
    case BULLETS[6]:{
    stroke(50);
      fill(100);
      strokeWeight(2);
      ellipse(0,0,80,20);
      triangle(-20,0,-40,-20,-40,20);
      polygon([
        [0,-10],
        [-50,-10],
        [-50,10],
        [0,10],
      ]);
    }break;
    case BULLETS[7]:{
    fill(0,255,255,50);
      noStroke();
      for(var i = 0; i < 5; i++){
        ellipse(0,0,i*5,i*5);
      }
    }break;
    case BULLETS[8]:{
    fill(255);
      stroke(255,0,0);
      strokeWeight(1);
    rect(0,0,50,5,5);
    }break;
    case BULLETS[9]:{
    fill(255);
      stroke(255,255,0);
      strokeWeight(1);
    rect(0,0,50,5,5);
    }break;
    case BULLETS[10]:{
    fill(255);
      stroke(0,0,255);
      strokeWeight(1);
    rect(0,0,50,5,5);
    }break;
    case BULLETS[11]:{
      fill(50,200,50,op);
      ellipse(0,0,r,r);
      ellipse(0,0,r*0.66,r*0.66);
      ellipse(0,0,r/3,r/3);
    }break;
    case BULLETS[15]:{
      fill(200,150,0,op);
      ellipse(0,0,r,r);
      fill(225,175,0,op);
      ellipse(0,0,r*0.66,r*0.66);
      fill(255,175,0,op);
      ellipse(0,0,r/3,r/3);
    }break;
    case BULLETS[12]:{
      stroke(50);
      fill(100);
      strokeWeight(2);
      ellipse(0,0,20,30);
      noStroke();
      fill(150);
      rect(0,-17,10,7);
      noFill();
      stroke(50);
      strokeWeight(3);
      polygon([
        [0,-17],
        [15,-5],
        [15,10],
      ]);
    }break;
    case BULLETS[13]:{
      fill(100);
      stroke(50);
      strokeWeight(2);
      ellipse(0,0,30,30);
    }break;
    case BULLETS[14]:{
      stroke(255,255,0);
      fill(0);
      strokeWeight(2);
      ellipse(0,0,20,30);
      fill(0);
      rect(0,-17,10,7);
      noFill();
      stroke(255,255,0);
      strokeWeight(3);
      polygon([
        [0,-17],
        [15,-5],
        [15,10],
      ]);
    }break;
  }
  popMatrix();
};
      }
      
      
var Bullet = function(type,x,y,stats){
  this.targeting = 0;
  this.targets = stats.targets;
  this.op = 100;
  this.type = type;
  this.x = x;
  this.y = y;
  this.damage = stats.damage;
  this.pierce = stats.pierce;
  this.dead = false;
  this.slowDown = stats.slowDown;
  this.speed = stats.speed;
  this.r = stats.r;
  switch(type){
    case "guidedMissile":
      this.targeting = floor(random(0,enemies.length));
      
    break;
    case "explosion":
      this.op = 100;
      this.r = 0;
      
    break;
  }
};
Bullet.prototype.run = function(){
  if(this.type !== "explosion"&&this.type !== "bioBomb"&&this.type !== "guidedMissile"){
    drawBullet(this.type,this.x,this.y,(this.r)/(Math.PI/180));
    this.x += cos(this.r)*this.speed;
    this.y += sin(this.r)*this.speed;
 if(this.x <= -50||this.x > 1250||this.y > 650||this.y < -50){
   this.dead = true;
 }
  }
  if(this.type === "explosion"){
    drawBullet(this.type,this.x,this.y,this.r,this.op);
    this.r+=10;
    this.op-=2.5;
    for(var i = 0; i < enemies.length; i++){
      var e = enemies[i];
      if(dist(e.x,e.y,this.x,this.y) <= this.r/2&&!this.dead){
        
          if(e.type === ENEMIES[0][0]||e.type === ENEMIES[0][1]||e.type === ENEMIES[0][2]||e.type === ENEMIES[0][3]||e.type === ENEMIES[0][4]||e.type === ENEMIES[0][5]||e.type === ENEMIES[0][6]||e.type === ENEMIES[0][7]||e.type === ENEMIES[0][8]){
            e.health -=0.5;
          
          if(this.r >= 300){
            this.dead = true;
          }
        }
      }
    }
  }
  
  if(this.type === "bioBomb"){
    drawBullet(this.type,this.x,this.y,(this.r),this.op);
    this.r+=10;
    this.op-=1.5;
    if(this.r >= 600){
            this.dead = true;
          }
    for(var i = 0; i < enemies.length; i++){
      var e = enemies[i];
      if(dist(e.x,e.y,this.x,this.y) <= this.r/2&&!this.dead){
        
          if(e.type === ENEMIES[0][0]||e.type === ENEMIES[0][1]||e.type === ENEMIES[0][2]||e.type === ENEMIES[0][3]||e.type === ENEMIES[0][4]||e.type === ENEMIES[0][5]||e.type === ENEMIES[0][6]||e.type === ENEMIES[0][7]||e.type === ENEMIES[0][8]){
            e.dead = true;
          }
          
        
      }
    }
  }
  
  if(this.type === "guidedMissile"){
    
    pushMatrix();
    translate(this.x,this.y);
    scale(0.5);
    drawBullet(this.type,0,0,(this.r)/(Math.PI/180));
    popMatrix();
    particles.push(new Particle(1,this.x,this.y));
    particles.push(new Particle(1,this.x,this.y));
    particles.push(new Particle(2,this.x,this.y));
    if(enemies[this.targeting].dead !== true){
      this.x+=(enemies[this.targeting].x-this.x)/10;
      this.y+=(enemies[this.targeting].y-this.y)/10;
      this.r = atan2(enemies[this.targeting].y-this.y,enemies[this.targeting].x-this.x);
    }else{
          this.targeting = floor(random(0,enemies.length));

    }
  }
  
  
};
      
var Enemy = function(type,x,y){
  this.trackNum = 0; 
  this.CLASS = "ground";
  this.turning = false;
  this.trackPoint = 0;
  this.type = type;
  this.x = x;
  this.y = y;
  this.damage = 1;
  this.health = 10;
  this.speed = 1;
  this.maxHealth = this.health;
  this.maxSpeed = this.speed;
  this.r = atan2(tracks[this.trackNum][this.trackPoint][1]-this.y,tracks[this.trackNum][this.trackPoint][0]-this.x)/(Math.PI/180);
  this.ar = 0;
  this.dead = false;
  this.reward = 1;
  this.showHealth = false;
  this.effectRate = 0;
  this.radius = 15;
  switch(this.CLASS){
    case "ground":
    this.trackNum = floor(random(0,tracks.length-1));  
    this.r = atan2(tracks[this.trackNum][this.trackPoint][1]-this.y,tracks[this.trackNum][this.trackPoint][0]-this.x)/(Math.PI/180);
    break;
    case "navy":
    this.trackNum = floor(random(0,navalTracks.length-1));   
      this.ar = 0;
      this.r = atan2(navalTracks[this.trackNum][this.trackPoint][1]-this.y,navalTracks[this.trackNum][this.trackPoint][0]-this.x)/(Math.PI/180);
    break;
    case "air":
      this.ar = 0;
    this.trackNum = floor(random(0,airTracks.length-1));  
      this.r = atan2(airTracks[this.trackNum][this.trackPoint][1]-this.y,airTracks[this.trackNum][this.trackPoint][0]-this.x)/(Math.PI/180);
    break;
  }
  /*
  //basic enemies
  ["rifleman","pistolman","barreta-M9 soldier","medic","suicide bomber","spy","rocket soldier"],
  //cars, tanks, any enemies that carry others
  ["tank","mammoth tank","MAGNUS tank","ranger","DRACULA tank","APC","gattling tank","Army Transporter"],
  //naval units
  ["gunboat","destroyer","cruiser","submarine","aircraft carrier"],
  //aircraft
  ["helicopter","Phoenix helicopter","warplane","B39 bomber","V2 rocket","Nuke"],
  //titans
  ["titan mech","mini-titan"],
  //bosses
  ["Magmoroth","UNKNOWN","Death Spirit"],
  //technological
  ["forcefield trooper","flame trooper","plasma trooper","quasicon trooper","dimension opener","teleporter","DEMOLISH mech"],*/
  switch(this.type){
    case ENEMIES[0][1]:
      this.health = 7.5;
      this.maxHealth = 7.5;
      this.speed = 2;
      this.reward = 2;     
    break;
    case ENEMIES[0][2]:
      this.health = 50;
      this.maxHealth = 50;
      this.speed = 0.5;
      this.maxSpeed = 0.5;
      this.reward = 10;
    break;
    case ENEMIES[0][3]:
      this.maxHealth = 15;
      this.health = 15;
      this.reward = 5;
    break;
    case ENEMIES[0][4]:
      this.health = 15;
      this.speed = 3;
      this.maxHealth = 15;
      this.maxSpeed = 3;
      this.reward = 15;
      this.time = random(1000);
      this.radius = 15;
    break;
    case ENEMIES[0][5]:
      this.health = 15;
      this.speed = 4;
      this.maxHealth = 15;
      this.maxSpeed = 4;
      this.reward = 10;
    break;
    case ENEMIES[0][6]:
      this.health = 50;
      this.speed = 1;
      this.maxHealth = 50;
      this.maxSpeed = 1;
      this.reward = 10;
    break;
  }
  switch(this.type){
    case ENEMIES[1][0]:
      this.speed = 0.5;
      this.damage = 5;
      this.health = 150;
      this.maxSpeed = 0.5;
      this.maxHealth = 150;
      this.reward = 25;
      this.radius = 50;
    break;
    case ENEMIES[1][1]:
      this.speed = 0.5;
      this.damage = 7;
      this.health = 200;
      this.maxSpeed = 0.5;
      this.maxHealth = 200;
      this.reward = 30;
      this.radius = 50;
    break;
    case ENEMIES[1][2]:
      this.speed = 0.75;
      this.damage = 10;
      this.health = 200;
      this.maxSpeed = 0.75;
      this.maxHealth = 200;
      this.reward = 25;
      this.radius = 50;
    break;
    case ENEMIES[1][3]:
      this.speed = 2;
      this.damage = 5;
      this.health = 100;
      this.maxSpeed = 2;
      this.maxHealth = 100;
      this.reward = 20;
      this.radius = 40;
    break;
    case ENEMIES[1][4]:
      this.speed = 1;
      this.damage = 5;
      this.health = 150;
      this.maxSpeed = 1;
      this.maxHealth = 150;
      this.reward = 30;
      this.radius = 50;
    break;
    case ENEMIES[1][5]:
      this.speed = 0.5;
      this.damage = 5;
      this.health = 200;
      this.maxSpeed = 0.5;
      this.maxHealth = 200;
      this.reward = 50;
      this.radius = 50;
    break;
    case ENEMIES[1][6]:
      this.speed = 0.25;
      this.damage = 5;
      this.health = 400;
      this.maxSpeed = 0.25;
      this.maxHealth = 400;
      this.reward = 40;
      this.radius = 50;
    break;
    case ENEMIES[1][7]:
      this.speed = 0.5;
      this.damage = 15;
      this.health = 500;
      this.maxSpeed = 0.5;
      this.maxHealth = 500;
      this.reward = 100;
      this.radius = 50;
    break;
    
  }
  switch(this.type){
    case ENEMIES[2][0]:
      this.CLASS = "navy";
      this.speed = 0.5;
      this.health = 100;
      this.maxHealth = 100;
      this.maxSpeed = 0.5;
      this.reward = 25;
      this.radius = 30;
    break;
    case ENEMIES[2][1]:
      this.CLASS = "navy";
      this.speed = 0.75;
      this.health = 250;
      this.maxHealth = 250;
      this.maxSpeed = 0.75;
      this.reward = 40;
      this.radius = 30;
    break;
    case ENEMIES[2][2]:
      this.CLASS = "navy";
      this.speed = 0.25;
      this.health = 1000;
      this.maxHealth = 1000;
      this.maxSpeed = 0.25;
      this.reward = 50;
      this.radius = 40;
    break;
    case ENEMIES[2][3]:
      this.CLASS = "navy";
      this.speed = 2;
      this.health = 200;
      this.maxHealth = 200;
      this.maxSpeed = 2;
      this.reward = 40;
      this.radius = 20;
    break;
    case ENEMIES[2][4]:
      this.CLASS = "navy";
      this.speed = 0.25;
      this.health = 1000;
      this.maxHealth = 1000;
      this.maxSpeed = 0.25;
      this.reward = 100;
      this.radius = 50;
    break;
  }
  switch(this.type){
    case ENEMIES[3][0]:{
      this.CLASS = "air";
      this.health = 50;
      this.maxHealth = 50;
      this.speed = 2;
      this.maxSpeed = 2;
      this.radius = 20;
      this.reward = 15;
    }break;
    case ENEMIES[3][1]:{
      this.CLASS = "air";
      this.health = 100;
      this.maxHealth = 100;
      this.speed = 2;
      this.maxSpeed = 2;
      this.radius = 40;
      this.reward = 25;
    }break;
    case ENEMIES[3][2]:{
      this.CLASS = "air";
      this.health = 50;
      this.maxHealth = 50;
      this.speed = 2;
      this.maxSpeed = 2;
      this.radius = 15;
      this.reward = 20;
    }break;
    case ENEMIES[3][3]:{
      this.CLASS = "air";
      this.health = 100;
      this.maxHealth = 100;
      this.speed = 1;
      this.maxSpeed = 1;
      this.radius = 25;
      this.reward = 30;
    }break;
    case ENEMIES[3][4]:{
      this.CLASS = "air";
      this.health = 250;
      this.maxHealth = 250;
      this.speed = 3;
      this.maxSpeed = 3;
      this.radius = 25;
      this.reward = 30;
    }break;
    case ENEMIES[3][5]:{
      this.CLASS = "air";
      this.health = 500;
      this.maxHealth = 500;
      this.speed = 2;
      this.maxSpeed = 2;
      this.radius = 25;
      this.reward = 60;
    }break;
  }
  switch(this.type){
    case ENEMIES[4][0]:
      this.health = 1000;
      this.speed = 1;
      this.maxHealth = 1000;
      this.maxSpeed = 1;
      this.reward = 100;
      this.radius = 50;
      this.damage = 30;
    break;
    case ENEMIES[4][1]:
      this.health = 300;
      this.speed = 3;
      this.maxHealth = 300;
      this.maxSpeed = 3;
      this.reward = 10;
      this.radius = 20;
      this.damage = 15;
    break;
  }
  switch(this.type){
    case ENEMIES[5][0]:
      this.health = 10000;
      this.speed = 1;
      this.maxHealth = 10000;
      this.maxSpeed = 1;
      this.reward = 1000;
      this.radius = 40;
    break;
    case ENEMIES[5][1]:
      this.health = 15000;
      this.speed = 1;
      this.maxHealth = 15000;
      this.maxSpeed = 1;
      this.reward = 1000;
      this.radius = 30;
    break;
  }
  switch(this.type){
    case ENEMIES[6][0]:
      this.health = 1000;
      this.speed = 0.5;
      this.maxHealth = 1000;
      this.maxSpeed = 0.5;
      this.reward = 100;
    break;
    case ENEMIES[6][1]:
      this.health = 500;
      this.speed = 1;
      this.maxHealth = 500;
      this.maxSpeed = 1;
      this.reward = 100;
    break;
    case ENEMIES[6][2]:
      this.health = 500;
      this.speed = 2;
      this.maxHealth = 500;
      this.maxSpeed = 2;
      this.reward = 100;
    break;  
    case ENEMIES[6][3]:
      this.health = 750;
      this.speed = 1.5;
      this.maxHealth = 750;
      this.maxSpeed = 1.5;
      this.reward = 100;
    break;
    case ENEMIES[6][4]:
      this.health = 1000;
      this.speed = 0.75;
      this.maxHealth = 1000;
      this.maxSpeed = 0.75;
      this.reward = 100;
    break;
    case ENEMIES[6][5]:
      this.health = 750;
      this.speed = 0.25;
      this.maxHealth = 750;
      this.maxSpeed = 0.25;
      this.reward = 100;
    break;
    case ENEMIES[6][6]:
      this.health = 7500;
      this.speed = 0.5;
      this.maxHealth = 7500;
      this.maxSpeed = 0.5;
      this.reward = 1000;
      this.radius = 50;
    break;
    
  }
};
Enemy.prototype.run = function(){
  
  for(var i = 0; i < bullets.length; i++){
    var b = bullets[i];
    if(!b.dead&&dist(b.x,b.y,this.x,this.y) <= this.radius){
      if(b.targets[0]&&this.CLASS === "ground"){
      this.health-=b.damage;
      }
      if(b.targets[1]&&this.CLASS === "navy"){
      this.health-=b.damage;
      }
      if(b.targets[2]&&this.CLASS === "air"){
      this.health-=b.damage;
      }
      b.dead = true;
    }
  }
  
  
  //draw them
  drawEnemy(this.type,this.x,this.y,this.ar);
  //draw their healthbar
  noStroke();
  fill(255,0,0);
  rect(this.x,this.y-this.radius,20,3);
  fill(0,255,0);
  rect(this.x,this.y-this.radius,20*this.health/this.maxHealth,3);
  
  
  //path following algorithms
  if(this.CLASS === "ground"){
  this.r = atan2(tracks[this.trackNum][this.trackPoint][1]-this.y,tracks[this.trackNum][this.trackPoint][0]-this.x)/(Math.PI/180);
    if(dist(this.x,this.y,tracks[this.trackNum][this.trackPoint][0],tracks[this.trackNum][this.trackPoint][1]) <= (this.radius)){
    this.trackPoint++;
    this.turning = true;
    this.r = atan2(tracks[this.trackNum][this.trackPoint][1]-this.y,tracks[this.trackNum][this.trackPoint][0]-this.x)/(Math.PI/180);
  }
    //if they reach the end of the track...
  if(this.trackPoint >= tracks[this.trackNum].length-1){
    lives-=this.damage;
    this.dead = true;
    this.reward = 0;
  }
  }
  
  if(this.CLASS === "navy"){
  this.r = atan2(navalTracks[this.trackNum][this.trackPoint][1]-this.y,navalTracks[this.trackNum][this.trackPoint][0]-this.x)/(Math.PI/180);
    if(dist(this.x,this.y,navalTracks[this.trackNum][this.trackPoint][0],navalTracks[this.trackNum][this.trackPoint][1]) <= (this.radius)){
    this.trackPoint++;
    this.turning = true;
      this.r = atan2(navalTracks[this.trackNum][this.trackPoint][1]-this.y,navalTracks[this.trackNum][this.trackPoint][0]-this.x)/(Math.PI/180);
  }
    //if they reach the end of the track...
  if(this.trackPoint >= navalTracks[this.trackNum].length-1){
    lives-=this.damage;
    this.dead = true;
    this.reward = 0;
  }
  }
  
  if(this.CLASS === "air"){
  this.r = atan2(airTracks[this.trackNum][this.trackPoint][1]-this.y,airTracks[this.trackNum][this.trackPoint][0]-this.x)/(Math.PI/180);
    if(dist(this.x,this.y,airTracks[this.trackNum][this.trackPoint][0],airTracks[this.trackNum][this.trackPoint][1]) <= (this.radius)){
    this.trackPoint++;
    this.turning = true;
      this.r = atan2(airTracks[this.trackNum][this.trackPoint][1]-this.y,airTracks[this.trackNum][this.trackPoint][0]-this.x)/(Math.PI/180);
  }
    //if they reach the end of the track...
  if(this.trackPoint >= airTracks[this.trackNum].length-1){
    lives-=this.damage;
    this.dead = true;
    this.reward = 0;
  }
  }
  
  
  
  this.x+=cos(this.r) * this.speed;
  this.y+=sin(this.r) * this.speed;
  
  
  if(this.turning){
    if(this.ar !== this.r){
    this.speed = 0;
      this.ar+=(this.r-this.ar)/20;
    }if(abs(this.r-this.ar) < 2){
      this.turning = false;
    }
  }if(!this.turning){
    this.speed = this.maxSpeed;
  }
  
  //special attributes for special gies
  if(this.type === ENEMIES[0][3]){
    if(this.health < this.maxHealth){
      this.health+=0.125;
    }
  }
  if(this.type === ENEMIES[0][4]){
    if(this.health < this.maxHealth){
      this.time--;
      if(this.time <= 0){
        this.dead = true;
        if(this.dead&&this.health > -1000){
          //explosion goes here
          
          this.health = -10000;
        }
      }
    }
  }
  if(this.health <= 0){
    this.dead = true;
  }
  
};
      
var Tower = function(type,x,y){
  this.targets = [true,true,false];
  this.fireType = "single";
  this.showHealth = false;
  this.health = 50;
  this.maxHealth = 50;
  this.type = type;
  this.look = type;
  this.x = x;
  this.y = y;
  this.r = 0;
  this.ar = 0;
  this.damage = 3;
  this.rate = 50;
  this.showRange = true;
  this.selected = false;
  this.slowDown = 0;
  this.range = 100;
  this.speed = 10;
  this.bulletType = "bullet";
  this.cost = 50;
  this.upgradeList = [TOWERS[0][1],TOWERS[0][2]];
  /*["Basic turret","Battlecry turret","PANTHER-3BG8","Elexiron turret","Dual Elexiron","CAMO destroyer"],
  //machinegun classes
  ["Machinegun turret","Tri-gattler","BL00DSHED gattler","BL00DSHED X3 gattler","HEX gattler","Vulcan Hex Destroyer","Hex BL00DSHED Destroyer"],
  //AA gun classes
  ["AA gun","Sniper AA gun","Gattling AA gun","Dual AA gun","Laser cannon AA","Guided Missile AA","Triple Sniper AA"],
  //Sniper classes
  ["Sniper tower","SAVAGE sniper tower","Minotaur-87HD","TAKEDOWN sniper","TITANCRUSH sniper","SOULSCAR sniper"],
  //freezer classes
  ["Freezer turret","Atomic Freezer turret","Frostbite turret","ATOMSTRIKE-X","HAILSTORM-36"],
  //laser cannon classes
  ["Laser cannon","Dual Laser cannon","Heavy Laser cannon","SCARBEAM Laser","Dual SCARBEAM","Dual Heavy Laser","Death Ray Laser","REAPER Laser","DEATHSTAR Laser","RAGNOROK-7DX"],
  //Demolition Tower Classes
  ["Demolition Tower","Bio-Bomb","Flamethrower","Grenade Launcher","Nuke cannon","Boulder Thrower"],*/
  
  //basic turret classes
  switch(type){
    case TOWERS[0][1]:
      this.damage = 4;
      this.rate = 30;
      this.cost = 100;
      this.speed = 7.5;
      this.range = 150;
    break;
    case TOWERS[0][2]:
      this.damage = 3;
      this.rate = 25;
      this.cost = 100;
      this.speed = 10;
      this.bulletType = "bulletPanther";
      this.range = 150;
    break;
    case TOWERS[0][3]:
      this.damage = 5;
      this.rate = 15;
      this.cost = 200;
      this.speed = 10;
      this.bulletType = "bulletElexiron";
      this.range = 200;
    break;
    case TOWERS[0][4]:
      this.damage = 5;
      this.rate = 15;
      this.cost = 400;
      this.speed = 10;
      this.bulletType = "bulletElexiron";
      this.range = 200;
      this.fireType = "Dual Elexiron";
    break;
    case TOWERS[0][5]:
      this.damage = 10;
      this.rate = 20;
      this.cost = 750;
      this.speed = 20;
      this.bulletType = "bullet";
      this.range = 200;
      this.fireType = "dual";
    break;
  }
  //gattler classes
  switch(type){
    case TOWERS[1][0]:
      this.damage = 2;
      this.rate = 10;
      this.cost = 100;
      this.speed = 7.5;
      this.range = 150;
      this.bulletType = "bulletSmall";
    break;
    case TOWERS[1][1]:
      this.damage = 2;
      this.rate = 10;
      this.cost = 400;
      this.speed = 7.5;
      this.range = 200;
      this.bulletType = "bulletSmall";
      this.fireType = "triple";
    break;
    case TOWERS[1][2]:
      this.damage = 2;
      this.rate = 5;
      this.cost = 250;
      this.speed = 10;
      this.range = 200;
      this.bulletType = "bulletSmall";
    break;
     case TOWERS[1][3]:
      this.damage = 2;
      this.rate = 5;
      this.cost = 600;
      this.speed = 10;
      this.range = 200;
      this.bulletType = "bulletSmall";
      this.fireType = "triple";
    break;
     case TOWERS[1][4]:
      this.damage = 2;
      this.rate = 5;
      this.cost = 850;
      this.speed = 10;
      this.range = 200;
      this.bulletType = "bulletSmall";
      this.fireType = "hex";
    break;
    case TOWERS[1][5]:
      this.damage = 5;
      this.rate = 5;
      this.cost = 1500;
      this.speed = 10;
      this.range = 200;
      this.bulletType = "bulletSmall";
      this.fireType = "hex";
    break;
    case TOWERS[1][6]:
      this.damage = 2;
      this.rate = 2.5;
      this.cost = 1500;
      this.speed = 15;
      this.range = 200;
      this.bulletType = "bulletSmall";
      this.fireType = "hex";
    break;
  }
  //AA gun classes
  switch(type){
      case TOWERS[2][0]:
      this.targets = [false,false,true];
      this.damage = 20;
      this.rate = 50;
      this.cost = 200;
      this.speed = 25;
      this.range = 200;
      this.bulletType = "bulletBig";
    break;
      case TOWERS[2][1]:
      this.targets = [false,false,true];
      this.damage = 50;
      this.rate = 150;
      this.cost = 400;
      this.speed = 25;
      this.range = 300;
      this.bulletType = "bulletBig";
    break;
    case TOWERS[2][2]:
      this.targets = [false,false,true];
      this.damage = 5;
      this.rate = 10;
      this.cost = 400;
      this.speed = 25;
      this.range = 200;
      this.bulletType = "bulletElexiron";
    break;
    case TOWERS[2][3]:
      this.targets = [false,false,true];
      this.damage = 40;
      this.rate = 150;
      this.cost = 700;
      this.speed = 25;
      this.range = 200;
      this.bulletType = "bulletBig";
      this.fireType = "dual";
    break;
    case TOWERS[2][4]:
      this.targets = [false,false,true];
      this.damage = 50;
      this.rate = 10;
      this.cost = 1000;
      this.speed = 15;
      this.range = 300;
      this.bulletType = "laserGreen";
    break;
    case TOWERS[2][5]:
      this.targets = [false,false,true];
      this.damage = 100;
      this.rate = 200;
      this.cost = 1000;
      this.speed = 15;
      this.range = 1200;
      this.bulletType = "guidedMissile";
    break;
  }
};
Tower.prototype.draw = function(){
  if(this.showRange){
   noStroke();
   
 fill(0,50);   ellipse(this.x,this.y,this.range*2,this.range*2);
  }
  drawTower(this.look,this.x,this.y,this.ar);
};
Tower.prototype.run = function(){
  if(this.health <= 0){this.dead = true;}
  var firing = false;
  for(var i = 0; i < enemies.length; i++){
    var e = enemies[i];
    if(this.targets[0]){
    if(!e.dead&&dist(e.x,e.y,this.x,this.y) <= this.range&&e.CLASS === "ground"){
      this.r = atan2(e.y-this.y,e.x-this.x)/(Math.PI/180);
      if(frameCount % this.rate === 0){
    firing = true;
  }
    }
    }
    
    if(this.targets[1]){
    if(!e.dead&&dist(e.x,e.y,this.x,this.y) <= this.range&&e.CLASS === "navy"){
      this.r = atan2(e.y-this.y,e.x-this.x)/(Math.PI/180);
      if(frameCount % this.rate === 0){
    firing = true;
  }
    }
    }
    
    if(this.targets[2]){
    if(!e.dead&&dist(e.x,e.y,this.x,this.y) <= this.range&&e.CLASS === "air"){
      this.r = atan2(e.y-this.y,e.x-this.x)/(Math.PI/180);
      if(frameCount % this.rate === 0){
    firing = true;
  }
    }
    }
    
    if(!e.dead&&dist(e.x,e.y,this.x,this.y) <= 20+e.radius&&e.CLASS === "ground"){
      this.health-=0.25;
      if(!this.dead){
      e.x-=cos(e.ar) * e.speed;
      e.y-=sin(e.ar) * e.speed;
      }
    }
  }
  if(firing){
    
    if(this.fireType === "single"){
    bullets.push(new Bullet(this.bulletType,this.x,this.y,{
      damage:this.damage,
      pierce:this.pierce,
      speed:this.speed,
      slowDown:this.slowDown,targets:this.targets,
      r:ang(this.r),
    }));
    }
    if(this.fireType === "dual"){
    bullets.push(new Bullet(this.bulletType,this.x+10,this.y,{
      damage:this.damage,
      pierce:this.pierce,
      speed:this.speed,
      slowDown:this.slowDown,targets:this.targets,
      r:ang(this.r),
    }));
    bullets.push(new Bullet(this.bulletType,this.x-10,this.y,{
      damage:this.damage,
      pierce:this.pierce,
      speed:this.speed,
      slowDown:this.slowDown,targets:this.targets,
      r:ang(this.r),
    }));
    }
    if(this.fireType === "triple"){
    bullets.push(new Bullet(this.bulletType,this.x+10,this.y,{
      damage:this.damage,
      pierce:this.pierce,
      speed:this.speed,
      slowDown:this.slowDown,
      targets:this.targets,
      r:ang(this.r),
    }));
      bullets.push(new Bullet(this.bulletType,this.x,this.y,{
      damage:this.damage,
      pierce:this.pierce,
      speed:this.speed,
      slowDown:this.slowDown,targets:this.targets,
      r:ang(this.r),
    }));
    bullets.push(new Bullet(this.bulletType,this.x-10,this.y,{
      damage:this.damage,
      pierce:this.pierce,
      speed:this.speed,
      slowDown:this.slowDown,targets:this.targets,
      r:ang(this.r),
    }));
    }
    if(this.fireType === "hex"){
    bullets.push(new Bullet(this.bulletType,this.x+2,this.y,{
      damage:this.damage,
      pierce:this.pierce,
      speed:this.speed,
      slowDown:this.slowDown,targets:this.targets,
      r:ang(this.r),
    }));
      bullets.push(new Bullet(this.bulletType,this.x,this.y,{
      damage:this.damage,
      pierce:this.pierce,
      speed:this.speed,
      slowDown:this.slowDown,targets:this.targets,
      r:ang(this.r),
    }));
    bullets.push(new Bullet(this.bulletType,this.x-2,this.y,{
      damage:this.damage,
      pierce:this.pierce,
      speed:this.speed,
      slowDown:this.slowDown,targets:this.targets,
      r:ang(this.r),
    }));
      bullets.push(new Bullet(this.bulletType,this.x+5,this.y,{
      damage:this.damage,
      pierce:this.pierce,
      speed:this.speed,
      slowDown:this.slowDown,targets:this.targets,
      r:ang(this.r),
    }));
      bullets.push(new Bullet(this.bulletType,this.x,this.y,{
      damage:this.damage,
      pierce:this.pierce,
      speed:this.speed,
      slowDown:this.slowDown,targets:this.targets,
      r:ang(this.r),
    }));
    bullets.push(new Bullet(this.bulletType,this.x-5,this.y,{
      damage:this.damage,
      pierce:this.pierce,
      speed:this.speed,
      slowDown:this.slowDown,targets:this.targets,
      r:ang(this.r),
    }));
    }
  }
  
    if(this.r !== this.ar){
      this.ar += (this.r-this.ar)/5;
    }
  
  if(this.health < this.maxHealth){
    this.showHealth = true;
  }
  if(this.showHealth){
  noStroke();
  fill(255,0,0);
  rect(this.x,this.y-20,30,3);
  fill(0,255,0);
  rect(this.x,this.y-20,this.health/this.maxHealth*30,3);
  }
};
      
      
      towers = [new Tower(TOWERS[2][5],250,200)];
draw = function(){
  try{
  if(frameCount % 100 === 0){
    enemies.push(new Enemy(ENEMIES[3][1],random(1200),random(600)));
    playSound(sounds.Grenade);
  }
        background(240,240,240);
  noFill();
  strokeWeight(50);
  stroke(180);
  strokeCap(SQUARE);
  for(var i = 0; i < tracks.length; i++){
    beginShape();
    for(var j = 0; j < tracks[i].length; j++){
      vertex(tracks[i][j][0],tracks[i][j][1]);
    }
    endShape();
  }
  stroke(0,100,150);
  strokeCap(SQUARE);
  for(var i = 0; i < navalTracks.length; i++){
    beginShape();
    for(var j = 0; j < navalTracks[i].length; j++){
      vertex(navalTracks[i][j][0],navalTracks[i][j][1]);
    }
    endShape();
    
  }
    stroke(150,0,0);
  strokeCap(SQUARE);
  for(var i = 0; i < airTracks.length; i++){
    beginShape();
    for(var j = 0; j < airTracks[i].length; j++){
      vertex(airTracks[i][j][0],airTracks[i][j][1]);
    }
    endShape();
    
  }

  
  for(var i = 0; i < particles.length; i++){
    if(!particles[i].dead){
    particles[i].run();
    }
  }
  for(var i = 0; i < enemies.length; i++){
    if(!enemies[i].dead){
    enemies[i].run();
    }if(enemies[i].dead&&enemies[i].health > -1000){
      money+=enemies[i].reward;
      enemies[i].showHealth = false;
      enemies[i].health = -10000;
    }
  }
  for(var i = 0; i < bullets.length; i++){
    if(!bullets[i].dead){
    bullets[i].run();
    }if(bullets[i].type === "guidedMissile"&&bullets[i].dead&&bullets[i].x !== -500){
      bullets.push(new Bullet("explosion",bullets[i].x,bullets[i].y,{
      damage:0,
      slowDown:0,
      pierce:0,
      r:0,
        speed:0,
        targets:[false,false,false],
    }));
      bullets[i].x = -500;
    }
  }
  for(var i = 0; i < towers.length; i++){
    if(!towers[i].dead){
    towers[i].draw();
    towers[i].run();
    }
  }
  
  fill(0);
  text("Money: "+money+" Lives: "+lives,500,100);
  }catch(err){
    println(err);
  }
      };
  }
}; 
  var canvas = document.getElementById("canvas"); 
  var pjs = new Processing(canvas, game_content); 

