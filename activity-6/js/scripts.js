var messages = [];

function messageType (name1, name2, m2, m, userInput){
  this.name1 = name1
  this.name2 = name2;
  this.userInput = userInput;
  this.m2 = m2;
  this.m = m;
}

function userMessages (nameSwitch) {
   var m2 = document.getElementById("form");
   var m = m2.elements["name"].value
   name1 = "Giuseppe";
   name2 = "Jimmy John";

   switch (nameSwitch) {

     case "send-button":
     userInput = name1 + ": " + m;
     break;

     case "reply-button":
     userInput = name2 + ": " + m;
     break;

     default:
     userInput = "No Message";
     break;

   }

   messages.push(userInput + "<br>");

   document.getElementById('displayMessage').innerHTML = messages.join('');
}
