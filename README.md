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

Since the styling for the hour block, text block, and save button were provided to us, adding the rows required little more than minor styling to align the elements in each row. I also added ID's to the hour blocks to aid in the process of color coding the blocks based on the difference between the blocks' displayed time and the current time.

**JavaScript**

The anonymous function defined within updateTime displays the current date at the top of the page. This was  abig help in familiarizing myself with the Moment.js library. Next the anonymous function timeBlockHour set the current day's work hours (9am-5pm).  

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