# Pushing you Onward with your knowledge of Authentication.

- **DISCLAIMER** Authentication is a subject that many people spend a large amount time throughout their careers obtaining knowledge over. This is not something we expect you to have a mastery over, rather, we're preparing you to be able have an intelligent conversation about the subject.

![UnAuthorized](keep-calm-you-are-not-authorized.png)

- The objective of this challenge is to get you used to answering a few questions about Authentication.
- We also have some more reps for you to help hammer in the knowledge you've thus far learned.
- Answers to your written questions will be recorded in _ANSWERS.md_
- This is to be worked on alone but you can use outside resources. You can _reference_ any old code you may have, and the React Documentation, however, please refrain from copying and pasting any of your answers. Try and understand the question and put your responses in your own words. Be as thorough as possible when explaining something.

## Start by forking and cloning this repository.

## Questions - Self Study - You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

1. What is the purpose of using _sessions_?
2. What does bcrypt do to help us store passwords in a secure manner.
3. What does bcrypt do to slow down attackers?
4. What are the three parts of the JSON Web Token?

## Project Description - User Management System - Jokes On YoU!

- What we have here is a wise-guy application. _Dad jokes_ are all the rage these days.
- Our main problem with the application now is that we are trying to receive some mad dad jokes that are being requested from an external api, but we are locked out. Trust me, we all need these dad jokes in our lives.
- In order to be able to access our Killer Jokes you'll need to implement a User Authentication System that uses bcrypt and JWT.

## Initializing the Project

- `cd` into the root of the project and run `yarn install`.
- Once you have your `node_modules` go ahead and run `yarn start` or `npm start` to start your node server.
- **TEST** this project using **`POSTMAN`**.

### Assignment

Implement the `register` and `login` functions inside `/config/routes.js`. Use JSON Web Tokens for authentication.

The migrations and a database with empty users is already included, your job is adding the authentication related code. If every is done correctly, visiting `/api/jokes` should return a list of jokes.

### Stretch Problem: Build a front end to interface with your User Auth System

- Add a React client that connects to your API and has pages for `Sign Up`, `Sign In` and showing a list of `Jokes`.
- Once you have the functionality down, you'll be able to style it up a bit and play around with the jokes etc.
