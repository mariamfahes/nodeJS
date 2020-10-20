
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
var list =[ ]
function onDataReceived(text) {
  // text = text.replace("\n","")
  if (text === 'quit\n'  || text==='exit\n') {
    quit();
  }
  else if(text === 'hello\n' || text.startsWith('hello ')){
    hello(text);
  }
  else if(text==='help\n'){
    help();
  }
  else if(text.startsWith("list")){
    listM();
  
  }
  else if(text.startsWith("add ")){
    add(text);
  
  }
  else if(text==='remove\n' || text.startsWith('remove ')){
    remove(text);
  }
  else if( text.split(" ")[0] === 'edit' ||text==='edit\n'){
    edit(text);
  
  }
  else if(text.startsWith("check ")){
    check(text);
  }
  else if(text.startsWith("uncheck ")){
    uncheck(text);
  }
    else {unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(text){
  text = text.replace("\n", "");
  console.log(text + '!')
}
/**
 * list the application
 *
 * @returns {void}
 */
function  help(){
  console.log('hello  print hello  and text  ')
  console.log('quit exit from page ')
  console.log('name put user name ')
console.log( 'help   can help you ')
console.log('remove    remove  validation' )
}
/**
 * Exits the application
 *
 * @returns {void}
 */

function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}
function listM(){
console.log(list)
}
function add(text){
  text = text.trim();
  list.push(["",text.substring(4).trim()]);

}
function edit(text){
  if(text.trim() === "edit"){
    console.log("error" )
  }
  else if (text.split(" ")[1].trim() == "new"){
    list.pop();
    list.push("", [text.trim().split(" ").slice(2).join(" ")])
    console.log("change last items")
  }
  else if (!isNaN(text.split(" ")[1].trim())){
    list[list.split(" ")[1].trim()-1][0] = list.trim().split(" ").slice(3).join(" ");
    console.log("chaned");
  }else {
    console.log("doesnot exist " )
}
}
function check(text){
  text = text.split(" ");
  list[text[1]-1][0] = '✓';
}
function uncheck(text){
  text = text.split(" ");
  list[text[1]-1][0] = '';
}
function remove(text){
text=text.trim();
if(text<0||text>list.length){
  console.log("doesnt exit")

}
else if(text.length==6){list.pop()}
else{
  let num = text.split(' ');
  let c = parseInt(num[1]-1);
  if(c <0 || c >= list.length){console.log('doesnt exist')}
  else{
  x = list.splice(c, 1)
  console.log(list)
}
}

}




// The following line starts the application
startApp("mariam")
