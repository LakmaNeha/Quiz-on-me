var readlineSync = require('readline-sync');
const chalk = require('chalk');

console.log(chalk.blue.bgYellow.bold("Hey there!! Welcome. \n\n"));
var userName = readlineSync.question(chalk.green("What's your name?\n"));
console.log(chalk.magenta("Hello "+userName+"\nLet's play this Quiz and get to know HOW WELL YOU KNOW ME\n\n"));


var listOfQuestions =[{ques:"What is my surname?\n",answer:"Lakma"},
{ques:"How many siblings do i have?\n" , answer:"two"},
{ques:"What is my birthday month?\n" , answer:"november"},
{ques:"Where do i live??\n" , answer:"warangal"},
{ques:"Do i show off my artistic skills when i'm bored af ;) ?yes or no??  \n" , answer:"yes"},

{ques:"What is my favourite color?\n" , answer:"blue"},
{ques:"What's my current obsession?\n" , answer:"nails"},
{ques:"Do i like reading novels? yes or no ??\n" , answer:"yes"},
{ques:"Who is that one friend i talk to, most of the time over a call ?\n" , answer:"brahmini"},
{ques:"What's my room color??\na. Lilac & White\nb. Seagreen & Yellow\nc. Blue & White\n" , answer:"c"},
];

var score=0;

function quiz(ques,answer)
{
  var userAnswer=readlineSync.question(chalk.italic.cyan(ques));
  if(userAnswer.toUpperCase()=== answer.toUpperCase())
{
  score=score+1;
  console.log(chalk.blue("\nyou are right"));
  console.log("score :"+score+"\n");
}
else
{
  console.log(chalk.red("\nyou are wrong\n"));
}
}
//////////////////////////////............................

if(readlineSync.keyInYN('Do you like to play this quiz?')=== true)
{
    for(var i=0;i<5;i++)
    {
      quiz(listOfQuestions[i].ques,listOfQuestions[i].answer);

    }
    if(score<4)
    console.log("Hello Buddy! I guess you dont't know me well :( .You aren't eligible for other 5 questions. Bye! ");
    else{
      for(var i=5;i<10;i++)
      {
         quiz(listOfQuestions[i].ques,listOfQuestions[i].answer);

       }
       if(score==10)
       console.log("Hi there Bestie!!!");
       else
       console.log("Hello my Freind");
    }
}
else
{
  console.log("Okay.  :|  ");
}