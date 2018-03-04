function ResultsViewer(element){
  this.element = element;
}

ResultsViewer.prototype.addMessage = function(message){
  this.element.prepend(message)
}

ResultsViewer.prototype.clearMessage = function(){
  this.element.html("")
}