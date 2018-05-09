$(document).ready(function(){
		
$( "#greet" ).click(function() {
   var str = $( "#name" ).val();

   str= "hi "+str;
   say(str);
});

function say(text) {
  var msg = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(msg);  
}




});
