# JavaScript Basics Challenge: JavaScript Practice

This project is an enhanced solution to the "JavaScript Practice" in the JavaScript Basics course on Teamtreehouse.com. The original challenge involved displaying a self-destruct countdown using `alert()` dialogs. This enhanced version improves the user experience by utilising the SweetAlert2 library for a modern and interactive approach, while also incorporating DaisyUI for styling.

## Project Overview

The original challenge required the following steps:

1. Display an alert dialog with the content: "Warning! This message will self-destruct in."
2. Display a "3... 2... 1..." countdown using three separate alert dialog boxes.
3. Select the `<h1>` element and replace its text with "BOOM!" after the countdown.
4. Log "Message destroyed!" to the console.

In this enhanced version:

- A "Self Destruct!" button is displayed on the webpage.
- Clicking the button triggers a SweetAlert2 alert with a countdown from "3..." to "1..." seconds.
- The alert auto-closes after the countdown, and the content of the `<h1>` element changes to indicate a simulated self-destruct.
- The browser's console logs the message "Message destroyed!"

DaisyUI is used for styling to enhance the visual appeal of the webpage.

## Usage

1. Open your web browser and go to [https://berian.lowe.com/self-destruct](https://berian.lowe.com/self-destruct).
2. Click the "Self Destruct!" button on the webpage.
3. A SweetAlert2 dialog will open, displaying a countdown message from "3..." to "1..." seconds.
4. After the countdown, the content of the `<h1>` element will be changed to indicate a simulated self-destruct.
5. You can check the browser's console to see the message "Message destroyed!" logged.

## Dependencies

- [DaisyUI](https://daisyui.com/): A CSS framework for styling web interfaces.
- [SweetAlert2](https://sweetalert2.github.io/): A JavaScript library for creating attractive alerts and prompts.

## Project Structure

The project is structured as follows:

- `index.html`: The main HTML file that contains the structure of the webpage.
- `css/style.css`: CSS file for additional styling, including DaisyUI styles.
- `js/script.js`: JavaScript file containing the logic for triggering the self-destruct countdown using SweetAlert2 alerts.

## Credits

- Original challenge and project idea: [Teamtreehouse.com](https://teamtreehouse.com/)
- DaisyUI: [DaisyUI](https://daisyui.com/)
- SweetAlert2 library: [SweetAlert2](https://sweetalert2.github.io/)

## Licence

This project is licenced under the [MIT Licence](LICENCE).
