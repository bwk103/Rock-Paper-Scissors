"use strict";

function Player(name){
  var name = name
  var weapon;

  function getName(){
    return name
  };

  function setWeapon(selectedWeapon){
    weapon = selectedWeapon;
  }

  function getWeapon(){
    return weapon
  }

  return {
    getName: getName,
    setWeapon: setWeapon,
    getWeapon: getWeapon
  };
}
