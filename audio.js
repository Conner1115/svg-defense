var sounds = {
  Turret_Fire:"/sounds/40_smith_wesson_single-mike-koenig.mp3",
  Heavy_Turret_Fire:"/sounds/416_Barrett_sniper_rifle-Mike_Koenig-1498171968.mp3",
 AAgun:"/sounds/Anti Aircraft Gun-SoundBible.com-1303768514.mp3",
  Rumble_Explosion:"/sounds/Depth Charge Shorter-SoundBible.com-1978501900.mp3",
  Big_Explosion:"/sounds/Explosion_Ultra_Bass-Mark_DiAngelo-1810420658.mp3",
  Grenade:"/sounds/Grenade-SoundBible.com-2124844747.mp3",
  HD_MGun:"/sounds/High_Definition_Machine_gun-WEL-2006923900.mp3",
  Laser_Cannon:"/sounds/Laser_Cannon-Mike_Koenig-797224747.mp3",
  Sniper_Fire:"/sounds/Sniper_Rifle-Kibblesbob-2053709564.mp3",
  Fire_Reload:"/sounds/Winchester12-RA_The_Sun_God-1722751268.mp3",
  Thud_Light_Fire:"/sounds/barreta_m9-Dion_Stapper-1010051237.mp3",
  Shotgun_Fire_Reload:"/sounds/shotgun-mossberg590-RA_The_Sun_God-451502290.mp3",
  Loud_Shot:"/sounds/shotgun-spas_12-RA_The_Sun_God-503834910.mp3",
  Loud_Sniper:"/sounds/50_sniper_shot-Liam-2028603980.mp3",
  Hit_Pierce:"/sounds/Gun_loud-Soundmaster_-88363983.mp3",
  Laser_RapidX5:"/sounds/Laser_Machine_Gun-Mike_Koenig-1194129298.mp3",
};
var playSound = function (sound) {
  var AUDIO = document.createElement("audio");
  AUDIO.src = sound;
  AUDIO.autoplay = "true";
  document.body.appendChild(AUDIO);
  AUDIO.play();
};
