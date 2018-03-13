"use strict";

function Weapon(type){
  var rules = {
    'rock': [
              { name: 'scissors', verb: 'crushes' },
              { name: 'lizard', verb: 'crushes' }
            ],
    'paper': [
              { name: 'rock', verb: 'covers' },
              { name: 'spock', verb: 'disproves' }
             ],
    'scissors': [
                  { name: 'paper', verb: 'cuts' },
                  { name: 'lizard', verb: 'decapitates' },
                ],
    'lizard': [
                  { name: 'spock', verb: 'poisons' },
                  { name: 'paper', verb: 'eats' }
              ],
    'spock': [
                  { name: 'scissors', verb: 'smashes' },
                  { name: 'rock', verb: 'vapourises' }
              ]
  };
  var type = checkType(type.toLowerCase())

  function getType(){
    return type;
  }

  function isBetter(weapon){
    var array = [];
    rules[type].forEach(function(item){
      array.push(item.name)
    })
    return array.includes(weapon.getType())
  }

  function getVerb(losing_weapon){
    var verb;
      rules[type].forEach(function(item){
        if (item.name === losing_weapon.getType()){
          verb = item.verb
        }
      })
    return verb
  }

  function checkType(type){
    if (rules[type] === undefined){
      throw new Error("That's not a valid weapon!")
    } else {
      return type
    }
  }

  return {
    getType: getType,
    isBetter: isBetter,
    getVerb: getVerb
  }
}
