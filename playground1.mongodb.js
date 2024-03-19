/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('AlphaDatabase');

// Insert a few documents into the sales collection.
db.getCollection('Fundamentals').insertMany([
    [
        {
          "Name": "Python",
          "Price": 12000,
          "Instructor": "Jessica Smith"
        },
        {
          "Name": "Java",
          "Price": 9500,
          "Instructor": "Michael Johnson"
        },
        {
          "Name": "JavaScript",
          "Price": 8000,
          "Instructor": "Emily Davis"
        },
        {
          "Name": "C#",
          "Price": 11000,
          "Instructor": "Chris Roberts"
        },
        {
          "Name": "Ruby",
          "Price": 10500,
          "Instructor": "Sophia Brown"
        }
      ]
      
]);


// Print a message to the output window.
console.log(`Done Inserting Data`);