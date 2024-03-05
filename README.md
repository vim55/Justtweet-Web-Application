# Justtweet-Web-Application
Tweetter like interface for posting

This is a clean version of the code, so npm node models is included due to large file size
So for both frontend and backend end to work, you are required to install the npm node modules

for Frontend react:
run 
1. npm init react-app my-app-name
2. replace the front-end files in this repo with your generated react application.

for backend express:
1. npm install -g express-generator
2. express
3. replace the back-end files in this repo with your generated express application.

## JustTweet

To run the JustTweet program, make sure the justtweet_backend is running:
1. Run the following command: `nodemon .\app.js`
2. Ensure that the terminal displays "connected to MongoDB."
   - If not, modify the following line in `app.js`: `mongoose.connect('<your MongoDB URL>')`

Then, run the frontend following these steps:
1. Navigate to the JustTweet frontend directory in your terminal.
2. Run the following command: `npm start`

## Dependencies

Make sure to install the following dependencies before running the programs:

```bash
npm install express
npm install -g nodemon
npm install --save-dev nodemon
npm i @hapi/joi
npm i pug
npm install axios
npm install cors
npm i mongoose
