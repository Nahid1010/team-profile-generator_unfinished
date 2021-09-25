const inquirer = require("inquirer");
const fs = require("fs");
const questions = require("./src/questions");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Inter");
const generateHTML = require("./src/genHTML");