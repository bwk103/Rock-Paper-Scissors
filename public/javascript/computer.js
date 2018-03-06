"use strict";

var Computer = (function() {
  var name = 'Computer'
  var weapon = new Weapon(setWeapon())

  var getName = function(){
    return name
  }

  var getWeapon = function(){
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
})
