"use strict";

function Computer() {
  var name = 'Computer'
  var weapon = Weapon(setWeapon())

  function getName(){
    return name
  }

  function getWeapon(){
    return weapon
  }

  function setWeapon(){
    const weapons = ['rock', 'paper', 'scissors', 'spock', 'lizard']
    return weapons[Math.floor(Math.random()*weapons.length)]
  }

  return {
    getName: getName,
    getWeapon: getWeapon
  }
}
