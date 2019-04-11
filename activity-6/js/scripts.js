var messages = [];

function messageType (name1, name2, m2, m, userInput){
  this.name1 = name1
  this.name2 = name2;
  this.userInput = userInput;
  this.m2 = m2;
  this.m = m;
}

function init (nameSwitch) {
   var m2 = document.getElementById("message-container");
   var m = m2.elements["name"].value
   name1 = "Giuseppe";
   name2 = "Jimmy John";

   switch (nameSwitch) {

     case "send-button":
     userInput = name1 + ": " + m;
     document.getElementById("message-container").reset();
     break;

     case "reply-button":
     userInput = name2 + ": " + m;
     document.getElementById("message-container").reset();
     break;

     default:
     userInput = "No Message";
     break;

   }

   messages.push('-' + userInput + "<br>");

   document.getElementById('displayMessage').innerHTML = messages.join('');

}
