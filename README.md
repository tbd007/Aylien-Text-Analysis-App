# NLP Text Sentiment Analysis App

The goal of this repo is be an example of a basic but functional app built on Express and Webpack that allows the user to enter an article text and receive a text sentiment analysis using Aylien API in return.


## Get Up and Running

Fork this repo, then clone your forked repo down to your computer:

Run:
- ```npm install```
- ```npm start``` to start the app
- this app runs on localhost:4000, but you can of course edit that in server/index.js

# Project Goals

Setting up Webpack
Sass styles
Webpack Loaders and Plugins
Creating layouts and page design
Service workers
Using APIs and creating requests to external urls

# Aylien API
Sign up for API and install SDK

# ENV 
Use npm or yarn to install the dotenv package npm install dotenv. 
Go to your .gitignore file and add .env - this will make sure that you don't push your environment variables to Github
Fill the .env file with your API keys like this:
API_ID=**************************
API_KEY=**************************
Add this code to the very top of your server/index.js file:
const dotenv = require('dotenv');
dotenv.config();

Reference variables you created in the .env file by putting process.env in front of it:
var textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});



