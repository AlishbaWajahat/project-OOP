#! /usr/bin/env node



import inquirer from "inquirer";
import chalk from "chalk";

class person{
name:string;
personality:string="mysterious"
constructor(name:string){
    this.name=name;
}

Personality(num:number){
    if(num===1){
        console.log(chalk.cyanBright.italic(`You are an introvert`));
        console.log(chalk.green.bold(`You should do following:`));
        console.log(`
    1.Find solace in solitary activities like reading, writing, or hobbies.
    2.Cultivate deep connections with a few close friends or family members.
    3.Embrace alone time as essential for self-reflection and recharge.`);
    
        
    }
    else if(num===2){
        console.log(chalk.yellow.italic(`You are an extrovert`));
        console.log(chalk.green.bold(`You should do following:`));   
        console.log(`
    1.Seek out social gatherings and events to meet new people and engage in lively conversations.
    2.Participate in group activities, such as team sports or clubs, to channel their outgoing energy.
    3.Take advantage of networking opportunities to expand their social and professional circles.`);
        
    }else{
        console.log(`Your personality is still ${this.personality}`);
        
    }
}

}
async function main(){

    console.log(chalk.whiteBright(`Welcome to personality test`));
    var condition=true
while(condition){

    let answer=await inquirer.prompt([{
        message:"What is your name?",
        type:"input",
        name:"Name"
    },{
        message:"1:You like staying quiet.2:You love talking",
        type:"number",
        name:"Number"
    }])
    let Person=new person(answer.Name);
    Person.Personality(answer.Number)

var attemptAgain=await inquirer.prompt({
    message:"Do you want to attempt test again?",
    type:"confirm",
    name:"confirm",
    default:false
})
condition=attemptAgain.confirm;
}
}

main()