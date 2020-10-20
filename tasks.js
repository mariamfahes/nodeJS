
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
const fs = require('fs');
var path="./database.json";
var  path="./test.json"
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
console.log ('help check and uncheck')
}
/**
 * Exits the application
 *
 * @returns {void}
 */

function quit(){
  console.log('Quitting now, goodbye!')
  fs.open(path, 'w', function(err,fd) {
    if (err){
      throw 'could not open file :'+err;
    }
    fs.appendFileSync(path,'{\n\t"list": [\n');
    for(let i=0;i<list.length;i++){
      fs.appendFileSync(path,'\t\t{\n\t\t\t"address" : "'+list[i][1]+"\",\n");
      if(list[i][0]=="")
      fs.appendFileSync(path,'\t\t\t"checked" : false\n');
      else
      fs.appendFileSync(path,'\t\t\t"checked" : true\n');
      if(i==list.length-1)
      fs.appendFileSync(path,"\t\t}\n");
      else
      fs.appendFileSync(path,"\t\t},\n")
      
    }
    fs.appendFileSync(path,'\t]\n}\n');
    
    fs.close(fd,function(){
      process.exit();

    });




  });

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
  let o = parseInt(num[1]-1);
  if(o <0 || o >= list.length){
    console.log('doesnt exist')}
  else{
  x = list.splice(o, 1)
  console.log(list)
}
}
}
function start(){
  var c = process.argv.slice(2);
  if(typeof(c[0])!="undefined"){
    path ="./"+c[0];
  }
var v ;
fs.readFile(path,'utf8',(err,data) => {
  try{
  v = JSON.parse(data);
  for(let i = 0;i<v.list.length;i++){
    if(v.list[i].checked){
      list.push(["✓",v.list[i].address]);
    }
    else{
      list.push(["",v.list[i].address]);
    }

  }
}
catch(e){

}
});
}




// The following line starts the application
startApp("mariam")
start();
