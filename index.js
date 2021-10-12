const mysql = require("mysql");
const inquirer = require("inquirer");
require("console.table");
// const sql = require("./sql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Ledger3691!",
  database: "employeesDB"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    firstPrompt();
  });
  
  // function which prompts the user for what action they should take
  function firstPrompt() {
  
    inquirer
      .prompt({
        type: "list",
        name: "task",
        message: "Would you like to do?",
        choices: [
          "View Employees",
          "View Employees by Department",
          // "View Employees by Manager",
          "Add Employee",
          "Remove Employees",
          "Update Employee Role",
          "Add Role",
          // "Remove Role",
          // "Update Employee Manager",
          "End"]
      })