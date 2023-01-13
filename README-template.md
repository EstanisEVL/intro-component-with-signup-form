# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1).

## Table of contents

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

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

- Desktop preview:

![Desktop](./Screenshot-desktop.png)

- Mobile preview:

![Mobile](./Screenshot-mobile.png)


### Links

- Solution URL: [link](https://github.com/EstanisEVL/intro-component-with-signup-form)
- Live Site URL: [link](https://estanisevl-signup-form-component.netlify.app/)

## My process

### Built with

- HTML5
- CSS custom properties
- Flexbox
- JavaScript
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- SASS / SCSS

### What I learned

Major learnings while working through this project:
- Form validations using regular expressions;
- Conditional rendering of different error messages;
- Setting states and methods in a custom hook that is then imported to the Form component.


### Continued development

I will continue to focus on more advanced ways to implement JavaScript to simplify my code in future projects. And also I would like to refine dynamic rendering of different components to improve code reusability and scalability.


### Useful resources

- [https://www.youtube.com/watch?v=JYFMc_S6kWc] I recommend this video by [Jonathan MirCha](https://github.com/jonmircha), part of his ReactJs course uploaded on [Youtube](https://www.youtube.com/). It helped me oragnize the logic of the form. I really liked how he thought of the form functions first and then used a custom hook to apply all of them. I'll definitely start applying this pattern in my future projects.

## Author

- Github - [Estanislao Elias Varela Lucius](https://github.com/EstanisEVL)
- Frontend Mentor - [@EstanisEVL](https://www.frontendmentor.io/profile/EstanisEVL)
