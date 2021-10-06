const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');
const indexRouter = require('./routes/index');
const workshopsRouter = require('./routes/workshops');
const workshopsPageRouter = require('./routes/pages/workshops');

// This creates an Express application object - this includes an HTTP server
const app = express();

// configure to use EJS for templating
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// log request and response and total time for processing
app.use(logger);

app.use(express.static(path.join(__dirname, 'public')));

// built-in Express middleware
// Set up form data on req.body
app.use(express.urlencoded({ extended: false }));

// Set up JSON data sent using Ajax request on req.body
app.use(express.json());

// set up index router to take care of routing to home page
app.use(indexRouter);
app.use(workshopsRouter);
app.use(workshopsPageRouter);

// NODE_ENV is an environment variable generally setup to indicate which environment you are working on
// NODE_ENV=development
console.log(process.env.NODE_ENV);
console.log(process.env.PORT);

const PORT = process.env.PORT || 3000;

app.listen(PORT, (error) => {
  if (error) {
    console.error(error.message);
    return;
  }

  console.log(`Check http://localhost:${PORT}`);
});
