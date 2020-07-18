//declare variables
{
var ENEMY_TYPES = [
"rifleman","pistolman","barreta-M9 soldier","medic","suicide bomber","spy","rocket soldier","tank","mammoth tank","MAGNUS tank","ranger","DRACULA tank","APC","gattling tank","Army Transporter","gunboat","destroyer","cruiser","submarine","aircraft carrier","helicopter","Phoenix helicopter","warplane","B39 bomber","V2 rocket","Nuke","titan mech","mini-titan","Magmoroth","forcefield trooper","flame trooper","plasma trooper","quasicon trooper","dimension opener"
];
var ENEMY_DESCRIPTIONS = [
    "These guys are just a basic enemy.  In large numbers, they can get pretty strong.",
    "These guys are noticeably faster than riflemen, but are weaker.",
    "These guys are much stronger and slower than riflemen.",
    "Medics can heal themselves.  Take them out quickly!",
    "Kill the suicide bombers as fast as you can.  They will blow themselves up, damaging towers and if they blow up your base, it means instant death.",
    "spies are fast and hard to see.  They can deal untold damage to your base if they get in.",
    "Rocket Soldiers shoot extremely strong rockets at towers, damaging them heavily.  Make sure they don't get to your base!",
    "Tanks have extremely heavy armor.  They move slowly and when killed drop a few enemies.  They can shoot powerful shells as well!",
    "Mammoth tanks are obviously stronger than normal tanks.  Guess what?  They shoot two bullets at a time!",
    "Expect the worst from these.  They shoot extremely powerful shells and have super thick armor.",
    "Rangers are really fast.  They have lower health than tanks but are still strongly built.  They will drop two soldiers when killed.",
    "This tank can't shoot but when killed, it drops a few suicide bombers.",
    "This tank is a soldier carrier so it will drop about five to ten of them when it is destroyed.",
    "This tank has a gattling gun on it.",
    "This is an evil one.  It holds helicopters, rangers, and soldiers.",
    "The basic naval unit is the gunboat.  It is moderately fast and strong.",
    "The destroyer is meant to destroy you.  They are fast and strong.",
    "the cruiser is slow but unbelieveably powerful.  It can't be destroyed very easily.",
    "Submarines can shoot V2 rockets! Cool!",
    "Helicopters occasionally spawn from this unit.  It is very hard to destroy.",
    "helicopters and other aircraft can only be killed by AA guns and a few others.",
    "It's bigger, better, and faster than a normal helicopter.",
    "Airplanes damage any towers they fly over by shooting them with a machine gun.",
    "B39s bomb any towers they fly over.",
    "V2 rockets are cool.  They whistle through the air and explode on contact with a tower or your base (or the ground)",
    "Nukes explode with a huge radius and temporarily disable towers around it.",
    "He's one of the bosses and can be cloned.",
    "Tiny • Unbelieveably strong • Fast • crazy • awesome",
    "The final boss you will have to meet every time you play a level.",
    "It's a trooper that's shielded!",
    "It's a trooper that has two flamethrowers.",
    "Plasma bullets cool!",
    "I won't tell you what a quasicon is.",
    "This guy opens dimensions and sets free any enemy it wants.",
  ];
var enemyNumber = 0;
var maps = ["Tutorial","Isle of Destruction","Coast of Doom","War Call","The Lion's Lair","Navy SEAL","Crystals of Water","An Island Surrounded","Claimer's Territory","Face Defeat I","Face Defeat II","Falling from the sky","Pentagon: Ruins"];
var MAP = 0;
var dLevels = ["Easy","Medium","Hard","Extreme","Unfair","Deathwish"];
var difficulty = 0;
var $ = function(prop){
  return document.querySelector(prop);
};
var hideAll = function(){
  $("#menu").style.display = "none";
  $("#game").style.display = "none";
  $("#enemies").style.display = "none";
  $("#how").style.display = "none";
  $("#settings").style.display = "none";
  $("#credits").style.display = "none";
  $("#story").style.display = "none";
  $("#lead").style.display = "none";
  $("#achievements").style.display = "none";
  $("#shop").style.display = "none";
  $("#map-select").style.display = "none";
};
var fadeIn = function(page){
    $(page).style.display = "block";
  $(page).style.opacity = 0;
  $(page).style.animation = "fadeIn 1s 1";
  $(page).style.animationFillMode = "forwards";
  };
}

//setup
{
hideAll();
$("#difficulty").innerHTML = dLevels[difficulty];
$("#game").style.display = "block";
}

//event listeners
{
$(".play-button").addEventListener("click",function(){
  hideAll();
  fadeIn("#map-select");
});
$(".back-button").addEventListener("click",function(){
  hideAll();
  fadeIn("#menu");
});
$(".return-button").addEventListener("click",function(){
  hideAll();
  fadeIn("#menu");
});
  $(".Return-button").addEventListener("click",function(){
  hideAll();
  fadeIn("#menu");
});
$(".enemy-button").addEventListener("click",function(){
  hideAll();
  fadeIn("#enemies");
});
$(".Plus").addEventListener("click",function(){
  difficulty++;
  if(difficulty > dLevels.length-1){
    difficulty = 0;
  }
});
$(".Minus").addEventListener("click",function(){
  difficulty--;
  if(difficulty < 0){
    difficulty = dLevels.length-1;
  }
}); $(".RIGHT").addEventListener("click",function(){
  MAP++;
  if(MAP > maps.length-1){
    MAP = 0;
  }
});
$(".LEFT").addEventListener("click",function(){
  MAP--;
  if(MAP < 0){
    MAP = maps.length-1;
  }
}); $(".NEXT").addEventListener("click",function(){
  enemyNumber++;
  if(enemyNumber > ENEMY_TYPES.length-1){
    enemyNumber = 0;
  }

});
$(".BACK").addEventListener("click",function(){
  enemyNumber--;
  
  if(enemyNumber < 0){
    enemyNumber = ENEMY_TYPES.length-1;
  }
});
$(".how-button").addEventListener("click",function(){
  hideAll();
  fadeIn("#how");
});
}
var frameCount = 0;

setInterval(function(){ 
 frameCount++; $("#difficulty").innerHTML=dLevels[difficulty];
$("#map-name").innerHTML=maps[MAP];
$("#enemy-name").innerHTML = ENEMY_TYPES[enemyNumber];  
  $("#enemy-d").innerHTML = ENEMY_DESCRIPTIONS[enemyNumber];  
},10);
