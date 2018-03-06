"use strict";

var ResultsViewer = (function(element){
  var element = element

  var addMessage = function(message){
    element.prepend(message)
  };

  var clearMessage = function(){
    element.html("")
  }

  return {
    addMessage: addMessage,
    clearMessage: clearMessage
  }
})
