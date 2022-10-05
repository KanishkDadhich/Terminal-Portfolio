const app = document.querySelector("#app");
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const arr =[]; // Array that stores 2 numbers on which the calculation is to be performed
let check=0; // check if the command "calculator" is previously entered or not
let ask=0;
app.addEventListener("keypress", async function (event) {
  if (event.key === "Enter") {
    await delay(150);
    getInputValue();
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function () {
  const input = document.querySelector("input");
  input.focus();
});

async function openTerminal() {
  createText("Welcome to the Terminal");
  await delay(500);
  createText("Starting up...");
  await delay(800);
  createText("You can now interact with the Terminal");
  createCode("Type help", "for a list of commands");
  await delay(500);
  new_line();
}

function new_line() {
  const p = document.createElement("p");
  const span = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path");
  p.textContent = "$Sidharth_Sethi";
  span.textContent = " sudo";
  span2.textContent = " ~/guest";
  p.appendChild(span);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type");
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone");
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
}

function removeInput() {
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue() {
  const value1 = document
  .querySelector("input")
  .value.replace(/\s+/g, "");  
  // value1 => Getting hold of what the user types
  if(isNaN(value1)==false)  // Checking if the string entered is a number or not
  {  
    if(check==1)  // On line number 188 a check is added which ensures that a number is a valid command only if it is entered after entering the command "calculator".
    {   // If check==1 that means calculator is entered before , hence a number becomes a valid command
      trueValue(value1);
      arr.push(value1);  // pushing the number in the array
      if(arr.length==1)  // Upto now only a single number is there. And we need 2 numbers for multiplication hence we are asking for another number
      {
        createText("Enter another number");
      }
      else if(arr.length==2)  // When te size of array becomes 2, now we can perform the desired calculation from the following below
      {
       createText("Enter the operation you want to perform");
       createCode("+","for addition");
       createCode("-","for subtraction");
       createCode("*","for multiplication");
       createCode("/","for addition");
       createCode("%","Modulo of two numbers ")
       createCode("&","AND of two numbers");
       createCode("|","OR of two numbers");

     }
    }
    else  // else if check!=1 that means "calculator" is not entered before and now a number is an invalid command.
    {
      falseValue(value1);
      createText(`${value1} is not a valid command`)
      
    }
  
}
else
{
    // This means that the value entered is a string and not a number , and hence we can convert to lowercase
  const value = document
    .querySelector("input")
    .value.replace(/\s+/g, "")
    .toLowerCase();

    

  switch (value) {
    case "help":
    case "ls":
      trueValue(value);
      createCode("help", "for a list of commands");
      createCode("clear", "to clear the terminal");
      createCode("about", "to learn more about me");
      createCode("social", "to see my social links");
      createCode("projects", "to see my projects");
      createCode("calculator","To calculate")
      createText(`<div onClick="exit()">EXIT</div>`);
      break;

    case "about":
      trueValue(value);
      createText(
        "I am a Web Developer with a good knowledge of Data Structures and Algorithms along with SQL. I am currently Google DSC Lead, CodeChef Chapter Event Lead, and Co-Founder of Algoders Community at my Campus. I have 3-star rating at CodeChef. In 2022 I am learning MERN Stack and I am planning to work as a Full-Stack Developer."
      );
      break;

    case "social":
      trueValue(value);
      createText(
        `<a href="https://github.com/techspiritss" target="_blank">GitHub</a>`
      );
      createText(
        `<a href="https://www.linkedin.com/in/sidharthsethiss" target="_blank">LinkedIn</a>`
      );
      createText(
        `<a href="https://leetcode.com/techspiritss" target="_blank">LeetCode</a>`
      );
      createText(
        `<a href="https://www.codechef.com/users/techspiritss" target="_blank">CodeChef</a>`
      );
      break;

    case "projects":
      trueValue(value);
      createText("Projects:");
      createText(
        `<a href="https://techspiritss.github.io/MyChabi/" target="_blank">MyChabi</a> - MyChabi is a web application to help you out with your passwords`
      );
      createText(
        `<a href="https://github.com/TechSpiritSS/Task-C-" target="_blank">Task C++</a> - A command-line based task management application`
      );
      createText(
        `<a href="https://mohityadav0903.github.io/Notes-Insight" target="_blank">Notes Insight</a> - A note taking app for visually weak and elderly who aren't comfortable with Modern UI`
      );
      createText(
        `<a href="https://github.com/TechSpiritSS/bigInt.git" target="_blank">BigINT Library</a> - This is my own C Library for BigINT made from scratch and it supports 2700 digits`
      );
      createText(
        `<a href="https://techspiritss.github.io/50-Days-50-Projects-Web-Dev/" target="_blank">
                                      50 Days of Web</a> - 50 Web Apps made over the period of 50 days for learning purpose`
      );
      createText(
        `<a href="https://github.com/TechSpiritSS/Covid-Vaccine" target="_blank">
                                        Covid Vaccination Slot</a> - This Python Program informs about the available Covid vaccine slots at your pin code according to your age group.`
      );
      break;

    case "clear":
    case "cls":
      document
        .querySelectorAll("p")
        .forEach((e) => e.parentNode.removeChild(e));
      document
        .querySelectorAll("section")
        .forEach((e) => e.parentNode.removeChild(e));
      break;

    case "sudo":
      trueValue(value);
      createText("You are not authorized to use this command");
      break;

    case "cd":
      trueValue(value);
      createText("There's no directory in this path");
      break;

    case "calculator":   // A new command calculator is added
      trueValue(value);
      check=1;  // A check is added which ensures that calculator word is pressed 
      calculator();  // Calling a ftn calculator() which asks for a number (1st number on whicb calculation is to be performed);
      break;
    
    // These are the various operators
    case "+":
      if(check==1)  // That means the command is only valid when check==1 i.e the command "calculator" is previously entered. Same applies for all the operators
          {
            trueValue(value);
            createText(`The addition of ${arr[0]} and ${arr[1]} is ` + (parseFloat(arr[0])+parseFloat(arr[1])));
            arrayClear(arr);
            check=0;
            AskforAnotherCalc();
          }
          else{
            falseValue(value);
              createText(`${value} is not a valid command`);
          }
          break;
      

    case "-":
      if(check==1)
          {
            trueValue(value);
            createText(`The subtraction of ${arr[0]} and ${arr[1]} is ` + (parseFloat(arr[0])-parseFloat(arr[1])));
            arrayClear(arr);
            check=0;
            AskforAnotherCalc();
          }
          else{
            falseValue(value);
              createText(`${value} is not a valid command`);
          }
          break;

    case "*":
      if(check==1)
          {
            trueValue(value);
            createText(`The multiplication of ${arr[0]} and ${arr[1]} is ` + (parseFloat(arr[0])*parseFloat(arr[1])));
            arrayClear(arr);
            check=0;
            AskforAnotherCalc();
          }
          else{
            falseValue(value);
              createText(`${value} is not a valid command`);
          }
          break;
    
      case "/":
        if(check==1)
          {
            trueValue(value);
            createText(`The division of ${arr[0]} by ${arr[1]} is ` + (parseFloat(arr[0])/parseFloat(arr[1])));
            arrayClear(arr);
            check=0;
            AskforAnotherCalc();
          }
          else{
            falseValue(value);
              createText(`${value} is not a valid command`);
          }
          break;


        case "%":
          if(check==1)
          {
            trueValue(value);
            createText(`The remainder when ${arr[0]} is divided by ${arr[1]} is ` + (parseFloat(arr[0])%parseFloat(arr[1])));
            arrayClear(arr);
            check=0;
            AskforAnotherCalc();
          }
          else{
            falseValue(value);
              createText(`${value} is not a valid command`);
          }
          break;


      
          case "&":
            if(check==1)
          {
            trueValue(value);
            createText(`The bitwise AND of ${arr[0]} and ${arr[1]} is ` + (parseFloat(arr[0])&parseFloat(arr[1])));
            arrayClear(arr);
            check=0;
            AskforAnotherCalc();
          }
          else{
            falseValue(value);
              createText(`${value} is not a valid command`);
          }
          break;
         
            case "|":
              if(check==1)
          {
            trueValue(value);
            createText(`The remainder when ${arr[0]} is divided by ${arr[1]} is ` + (parseFloat(arr[0])|parseFloat(arr[1])));
            arrayClear(arr);
            check=0;
            AskforAnotherCalc();
          }
          else{
            falseValue(value);
              createText(`${value} is not a valid command`);
          }
          break;
          // y/n is added to ask the user if he wants to perform another calculation or not
          case "y":
            trueValue(value);
            if(check==1)  // That means the command "y" is only valid when the command "calculator" is already pressed before
            {
              calculator();
              break;
            }
            else{     // this means that the command "y" is pressed anonymously
              falseValue(value);
              createText(`${value} is not a valid command`);
            }
            break;
          

          case "n":
          trueValue(value);
          if(check==0) 
          {
            falseValue(value);
            createText(`${value} is not a valid command`);    
          }
          else
          {  arrayClear(arr);
            createText("Thankyou");
          }
          check=0;
          break;

          default:
            falseValue(value);
            createText(`${value} is not a valid command`);
            }
            
          }
          }

          function AskforAnotherCalc()
          { 
            createText("Do you want to perform another calculation ? => (y/n)");
            check=1;
            ask=1;
          }    

          function trueValue(value) {
            const div = document.createElement("section");
            div.setAttribute("class", "type2");
            const i = document.createElement("i");
            i.setAttribute("class", "fas fa-angle-right icone");
            const msg = document.createElement("h2");
            msg.textContent = `${value}`;
            div.appendChild(i);
            div.appendChild(msg);
            app.appendChild(div);
          }
          
          function falseValue(value) {
            const div = document.createElement("section");
            div.setAttribute("class", "type2");
            const i = document.createElement("i");
            i.setAttribute("class", "fas fa-angle-right icone");
            const msg = document.createElement("h2");
            msg.setAttribute("class", "error");
            msg.textContent = `${value}`;
            div.appendChild(i);
            div.appendChild(msg);
            app.appendChild(div);
          }
          
          function exit() {
            window.close();
          }
          
          function createText(text) {
            const p = document.createElement("p");
            p.innerHTML = text;
            app.appendChild(p);
          }
          
          function createCode(code, text) {
            const p = document.createElement("p");
            p.innerHTML = `<span class="code">${code} =></span> ${text}`;
            app.appendChild(p);
          }
          
          function calculator()
          {
            createText("Enter any Number");
          }
          
          function arrayClear(arr)
          {
            while(arr.length)
            {
              arr.pop();
            }
          }
            
          openTerminal();
            


       
  
  
  
    
    
    
      


    
    



    


    
    
    

  

 

  
 

