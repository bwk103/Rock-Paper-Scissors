"use strict";

var Player = (function(name){
  var name = name
  var weapon;

  var getName = function(){
    return name
  };

  var setWeapon = function(selectedWeapon){
    weapon = selectedWeapon;
  }

  var getWeapon = function(){
    return weapon
  }

  return {
    getName: getName,
    setWeapon: setWeapon,
    getWeapon: getWeapon
  }
})
