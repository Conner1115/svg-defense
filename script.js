var TOWERS = [
  //basic turret class
  ["Basic turret","Battlecry turret","PANTHER-3BG8","Elexiron turret","RUPTURE turret","Destructural turret"],
  //machinegun classes
  ["Machinegun turret","Tri-gattler","BL00DSHED gattler","BL00DSHED X3 gattler","HEX gattler","Vulcan Hex Destroyer","Hex BL00DSHED Destroyer"],
  //AA gun classes
  ["AA gun","Sniper AA gun","Gattling AA gun","Dual AA gun","Laser cannon AA","Guided Missile AA","Triple Sniper AA"],
  //Sniper classes
  ["Sniper tower","SAVAGE sniper tower","Minotaur-87HD","Leviathan-29LV","TITANCRUSH sniper","SOULSCAR sniper"],
  //freezer classes
  ["Freezer turret","Atomic Freezer turret","Frostbite turret","ATOMSTRIKE-X","HAILSTORM-36"],
  //laser cannon classes
  ["Laser cannon","Dual Laser cannon","Heavy Laser cannon","SCARBEAM Laser","Dual SCARBEAM","Dual Heavy Laser","Death Ray Laser","REAPER Laser","DEATHSTAR Laser","RAGNOROK-7DX"],
  //Demolition Tower Classes
  ["Demolition Tower","Bio-Bomb","Flamethrower","Grenade Launcher","Nuke cannon","Boulder Thrower"],
];
for(var i = 0; i < TOWERS.length; i++){
  for(var j = 0; j < TOWERS[i].length; j++){
    drawTower(TOWERS[i][j],120*j+100,100*i+100,0);
  }
}
