"use strict";

function ResultsViewer(element){
  var element = element

  function addMessage(message){
    element.prepend(message)
  };

  function clearMessage(){
    element.html("")
  }

  return {
    addMessage: addMessage,
    clearMessage: clearMessage
  }
}
