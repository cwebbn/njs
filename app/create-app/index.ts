import { appConfig } from "./interfaces";
import chalk from 'chalk';
import { exec } from "child_process";
import { directoryExists } from "../files";

export class CreateApp {
    constructor(public config:appConfig){
        console.log(chalk.yellow(`Creating the project ${config.appName}...`));
        
        // Check if the directory is not exists
        if(directoryExists(this.config.appName)){
            console.log(chalk.red(`The directory ${config.appName} is already exists`))
        
        }else{ // if not try to create it
            exec(`mkdir ${config.appName}`, (error, stdout, stderr)=>{
                if(error){
                    console.log(chalk.red(`We can't create the folder ${config.appName}`))
                }
            })
        }

        // create the .njs file
        exec(`mkdir ${this.config.appName}/.njs`, (error, stdout, stderr)=>{
            if(error){
                console.log(chalk.red(`Error. Please remove the ${this.config.appName} folder and rerun njs new ${this.config.appName} `))
            }else{
                console.log(chalk.green(`Project created successfully.`));
                console.log(`Step 1 : Move inside de ${this.config.appName} folder.`)
                console.log('-------------------------------------------------------')
                console.log(`Step 2 : Run njs init.`)
            }
            
        })
       
    }

}

export const initPackages =  ()=>{
    if(directoryExists('.njs')){
        exec(`npm init -y`, (error, stdout, stderr)=>{
            if(error){
                console.log(chalk.red("We cannot execute the command : npm init -y"));
            }else{
                
            }
        })
    }else{
        console.log(chalk.red("You are not inside a njs folder. Move to the folder and try again"));
    }
    
}