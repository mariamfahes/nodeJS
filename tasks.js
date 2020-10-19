
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
var list =[ 'mariam', 'female',  21]
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
  else if(text==='list\n'){
    listM();
  
  }
  else if(text==='add\n'){
    add();
  
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
function add(){
  list.push("nabiteh")

}



// The following line starts the application
startApp("mariam")
