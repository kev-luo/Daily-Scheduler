# Third-Party-APIs

Pseudocoding
### make rows
    make rows responsive so that text doesn't overflow when window width is minimized
    make button responsive so that it doesn't stretch weirdly when window width is minimized
display current day when planner is loaded - moment.js
color code time block to be responsive based on current time and the row time
save button 
    event listener to save text to local storage
    if you remove an item from text area it should also remove the item from local storage, that way the user won't have to delete the text then press save again to store the empty task list to local storage (better ux)
page reload should get items from local storage

# Creating a Daily Scheduler Using jQuery & Moment.js

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![GitHub top language](https://img.shields.io/github/languages/top/kev-luo/third-party-apis)
![GitHub language count](https://img.shields.io/github/languages/count/kev-luo/third-party-apis)

## Description


What was your motivation?

Why did you build this project?

What problem does it solve?

What did you learn?

What makes your project stand out?

If there are a lot of features consider adding a heading called "features" and listing them there

## Table of Contents
* Process
* Usage
* Credits
* Contributing
* License

## Process
**HTML**

The site I built can be broken down into five major sections: the nav bar containing the view highscores button and timer, the quiz start card, the quiz question cards, the submit initials card, and the highscores card. The nav bar and all the cards were created using CSS Bootstrap components. Since each question card is a child of the same parent div, it was possible to keep track of which question the user is currently on and, based on that, what to display after they chose an answer. Specifically, if the user was currently on questions 1-4 (out of 5), clicking an answer would trigger the display of the next question. If the user was on question 5, clicking an answer would display the submit initials card. Each question is also given a unique ID which matches keys in a defined JavaScript object to allow for answer checking. After each question is answered, text is displayed on-screen telling the user whether they were correct or not.

**JavaScript**

By putting all the question cards inside a parent div, I was able to take advantage of event delegation and required only one event listener for all question choices. Since the buttons on the quiz start card, submit initials card, and highscores card all had relatively unique functionalities, they were all given separate event listeners. The quiz start button sets the timer to 60 seconds, begins the timer, directs you to the first question, and determines when to stop the timer. The submit initials button saves the input name and score to local storage, and adds the submission to the highscores list. The view highscores button will display the highscores page no matter when you click it (except when you are already viewing the highscores display). These functionalities were a few of the bigger ones. Excluded from this description are a few minor functionalities written for improved user experience. 

## Usage
To begin the quiz, simply follow the link below and click the "Let's Do This" button. 

## Credits

## Contributing
[Contributor Covenant](https://www.contributor-covenant.org/)

## License
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.

Licensed under the [MIT](https://github.com/microsoft/vscode/blob/master/LICENSE.txt) License.

Create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.
You'll need to use the Moment.js library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.

AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively


GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist

Pseudocoding
make rows

make rows responsive so that text doesn't overflow when window width is minimized

**make button responsive so that it doesn't stretch weirdly when window width is minimized**

display current day when planner is loaded - moment.js

color code time block to be responsive based on current time and the row time

## double check code for color coding based on time difference (updateColor variable)

save button 
possibly use change()

event listener to save text to local storage

**if you remove an item from text area it should also remove the item from local storage, that way the** 
**user won't have to delete the text then press save again to store the empty task list to local storage**
**(better ux)**

page reload should get items from local storage