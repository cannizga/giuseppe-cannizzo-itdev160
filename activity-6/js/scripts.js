var messages = [];

function Message (name1, name2, m2, m, userInput){
  this.name1 = name1
  this.name2 = name2;
  this.userInput = userInput;
  this.m2 = m2;
  this.m = m;
}

function init (nameSwitch) {
   var user, type;
   var messageType = {
   out: 'out-message',
   in: 'in-message'};

   m2 = document.getElementById("message-container");
   m = m2.elements["name"].value
   name1 = "Giuseppe";
   name2 = "Jimmy John";

   switch (nameSwitch) {

     case "send-button":
     userInput = name1 + ": " + m;
     type = messageType.out;
     document.getElementById("message-container").reset();
     break;

     case "reply-button":
     userInput = name2 + ": " + m;
     type = messageType.in;
     document.getElementById("message-container").reset();
     break;

     default:
     userInput = "No Message";
     break;

   }

   if (type === 'out-message')
   {
   messages.push('<font color = steelblue>' + '-' + userInput + "<br>");
   document.getElementById('displayMessage').innerHTML = messages.join('');
   }
   else if(type === 'in-message')
   {
   messages.push('<font color = salmon>' + '-' + userInput + "<br>");
   document.getElementById('displayMessage').innerHTML = messages.join('');
   }
}
