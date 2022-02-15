# <img align='center' width="10%" alt='trevor4n' src="https://user-images.githubusercontent.com/44274876/154088553-7b4d4caa-3d8a-45c0-bc29-2ba49533228c.png"> Hurdle - February 11, 2022</img>
### NML's 48hr coding challenge
Initial commit: [8c83cd1](https://github.com/trevor4n/hurdle-backend/commit/8c83cd14a62c6bec938591d7fb739ca086263196) _ 02/10/22 _ 5:01pm <br>
Deadline commit: [0c7f937](https://github.com/trevor4n/hurdle/commit/0c7f9376937a936cd9f63a45f9e48f2a16388d7f) _ 02/11/22 _ 8:36am <br>
Working remote (sub-24hr): [26b742d](https://github.com/trevor4n/hurdle/commit/26b742d0894b65b59445427b2717c8604976a23d) _ 02/11/22 _ 1:49pm <br>
<hr>

<p align='left'>
  <img width="80%" alt='project screenshot' src='https://user-images.githubusercontent.com/44274876/154101766-f4d7f71c-7bdd-474b-81aa-857d9d7b0ed8.png'></img>
</p>

### &#x1F534; Introduction
Per the exercize specification: this project was built from scratch, written in JS, utilizes the React framework, consumes a free API, and is maintained on GitHub!

### &#x1F534; Technologies Used
  - [node](https://nodejs.org/en/) *version 17.5*
  - [Express](https://expressjs.com/).js
  - [React](https://reactjs.org/).js
  - [Create React App ](https://github.com/facebook/create-react-app) *bootstrap* 
  - [Wordnik](https://developer.wordnik.com/docs) API

[//CORS design pattern]:#(https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

### &#x1F534; Installation instructions
 - [ ] Clone [this repository](https://github.com/trevor4n/hurdle.git) & the [hurdle backend](https://github.com/trevor4n/hurdle-backend.git)
 - [ ] w/in your terminal, navigate to the backend project directory
 - [ ] `$ touch .env`
 - [ ] add this secret to the env: `WORDNIK_KEY=vgde8llusetpskpd0l1gmu1l19auzk34tgbm3mo2ablj9zqql` and remember to save the edit
 - [ ] `$ node server.js`
 - [ ] In a separate terminal instance, navigate to the frontend project directory
 - [ ] `$ npm start`

### &#x1F535; Major Wins
- Overcomes the Cross-Origin Resource Sharing (CORS) issue 
- Utilizes Corpus frequency to pull relatively recognizable random words
- Implements conditional rendering, hooks, props, etc.

 ### 🚧 major hurdles
 - [X] Wordnik documentation is a bit outdated & some features have been depreciated (without adequate documentation to reflect that)
 - [ ] Gameplay requires additional implementation: input sanatization & validation, square state changes, input comparison, win condition verification

*This project is my first ever Wordnik application!*