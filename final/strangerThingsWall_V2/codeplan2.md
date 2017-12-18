Stranger Things Wall

This program is a message generator where the user enters a message they want to send and the message will appear/ start blinking on the "stranger things wall" 

* inputs - form and voice control
* save messaage
* interface items (position, size, letter, color)
* letter counter 
* light counter 
* the message will blink on the wall 

First, the user needs to input the message they would like to appear (either by typing the message or saying the message). For this I will use a form text input and the P5 speech library. The user will have to click on a button to submit their answer. When the user clicks the button, it will send the message (sendMessage function). In my function, I need to set a counter (letter counter) so that it loops through each character of the usermessage. I'll match each letter to one of the light bulbs (interface item) on the light wall. I also need a light counter that designates the amount of time that each letter should 'blink'. Then the user's message will flash on the wall. 