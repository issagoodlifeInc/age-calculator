# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Age calculator app solution](#frontend-mentor---age-calculator-app-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)


## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

Laptop + bigger screens :-
![](./assets/images/screenshotbigscrn.jpg)

Mobile and slaller devices:-
![](assets/images/screenshotsmallscrns.jpg)


### Links

- Solution URL: [Github Link](https://github.com/issagoodlifeInc/age-calculator.git)
- Live Site URL: [Netlify Link](https://get-age.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

Handling the styling of the submit button
```css
.btn--submit {
  position: relative;
  text-align: right;
}

.btn--submit::before {
  content: "";
  position: absolute;
  height: 2px;
  top: 50%;
  left: 0;
  background-color: var(--lightgrey);
  width: 98%;
}
```
Calculating users age from the current time and the birth day date 
```js

const birthDay = new Date(
  `${inputYear.value}, ${inputMonth.value}, ${inputDay.value}`
);
//   Getting current age in seconds
  const ageInSeconds =
    Math.round(Date.now() / 1000) - birthDay.getTime() / 1000;

// Calculating age in years / months / days
  const ageYear = Math.floor(ageInSeconds / 31536000);
  const ageMonth = Math.floor((ageInSeconds % 31536000) / 2628000);
  const ageDay = Math.floor(((ageInSeconds % 31536000) % 2628000) / 86400);
```
Animating the ages to the final values
```js
const animateAge = (element, endValue) => {
      let interval = 2000;
      let duration = Math.floor(interval / endValue);
      let startValue = 0;
      let counter = setInterval(() => {
        if (startValue != endValue) {
          startValue += 1;
          element.textContent = `${startValue} `;
        } else {
          element.textContent = `${endValue} `;
        }
        if (startValue == endValue) {
          clearInterval(counter);
        }
      }, duration);
    };
```


### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.


### Useful resources

- [Stack Overflow](https://stackoverflow.com/questions/30679279/how-to-convert-seconds-into-year-month-days-hours-minutes-respectively) - How to calculate the age.

## Author

- Frontend Mentor - [@leskim](https://www.frontendmentor.io/profile/leskim)

