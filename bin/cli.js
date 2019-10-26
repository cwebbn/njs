#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const fs = require('fs');
const {exec} = require('child_process');

const {CreateApp, initPackages} = require("../lib/create-app");
const {getCurrentDirectoryBase, directoryExists} = require("../lib/files");

// Get arguments
const  [, , ...arguments] = process.argv;

switch(arguments[0]){
    case "new":
        const appName = arguments[1];
        if(appName && arguments[2] == undefined){
            const project = new CreateApp({
                appName:appName,
                test:true
            });
        }else{
            console.log(chalk.red("Syntax error"))
        }
        break;

    case "init":
        if(arguments[2] == undefined){
            initPackages();
        }else{
            console.log(chalk.red("Syntax error"))
        }
}
// clear();

// console.log(
//     chalk.yellow(
//         figlet.textSync("Njs-CLI", {horizontalLayout:"full"})
//     )
// );

// console.log(
//     chalk.red(
//         files.getCurrentDirectoryBase()
//     )
// )
