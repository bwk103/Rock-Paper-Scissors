"use strict";

function View(){
  var html;

  function addResult(game){
    if (game.getTieStatus()){
      html = "<p>It's a tie!</p>"
    } else {
      html = `<p>${winningMesage(game.getResult())}</p>`
    }
    return html
  }

  function winningMesage(result){
    var loser = result.loser
    var winner = result.winner
    var winnerName = winner.getName();
    var winnerWeapon = winner.getWeapon().getType();
    var loserName = loser.getName()
    var loserWeapon = loser.getWeapon().getType()
    var verb = winner.getWeapon().getVerb(loser.getWeapon());
    return `${winnerName}'s ${winnerWeapon} ${verb} ${loserName}'s ${loserWeapon}`
  }

  return {
    addResult: addResult
  }
}
