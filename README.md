# Justtweet-Web-Application
Tweetter like interface for posting

# EasyTodo and JustTweet Programs

## EasyTodo

To run the EasyTodo program, follow these steps:

1. Navigate to the EasyTodo directory in your terminal.
2. Run the following command: `nodemon .\app.js`
3. Ensure that the terminal displays "connected to MongoDB."
   - If not, modify the following line in `app.js`: `mongoose.connect('<your MongoDB URL>')`

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
