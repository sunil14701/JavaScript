'use strict';
// imp theory section

/*
// l89: a high-level overview of JS

// 1. JS is a high-lvl object oriented, multi-paradigm, programming lang.

// 2. JS is a high-lvl, prototype based object oriented, multi-paradigm, interpreted or Just-in-time compiled, dynamic, single threaded, garbage-collected programming lang with first class fxs and non-blocking event loop concurrency model.

// high-lvl: do not manage memory manually, programs will never be as fast/optimise as low lvl lang like c lang.

// garbage collected: a algo in js engine which auto removes the old/unused object from memory. we do not clean our memory manually.

// interpreted or just in time compiled: execute code line by line, do not first compile ->machine code -> executes.

// multi-paradigm: paradigm-> an approach and mindset of structureing code, which will direct your coding style and technique.
// 3 popular paradigm are :
// a. procedural programming-> code in linear way i.e linear + fxs. we are doing this so far.
// b.OOP's
// c. functional programming
// also classfied as imperative or declarive

// prototype-based object-oriented: prototype -> blueprint. eg-> arrays methods are inherated from array prototype. every thing in js is object except primitive datatypes

// first class fx: fxs can be treated as variables. can be pass to other fxs and return them from fxs. eg: event listners

// dynamic typing: do not have to declare varibale datatype. type of varibale can easily be changed at runtime. js with types -> typescript lang

// single threaded: js runs in one single thread, can do one thing at a time. thread: set of instructions that is executed in the computer CPU. thread is where our code is executed in machines processors. non-blocking beaviour  is achieved by event loop. event loop takes long running tasks,executes them in background and put them back in the main thread once they are finished. this is js non blocking event loop concurrency model with single thread

// concurrency model : handling multiple task at same time.
*/

// l90: the js engine and runtime
// js engine : program that executes js code. every brower has its own js engine. chrome v8 engine -> powers chrome and node.js(js runtime -> used to build server side apps, outside of browers).

// js engine => call stack(code is executed here with execution context) + heap(stores all object in relation to our program, unstructured memory pool)

// compilation -> entire source code is converted to machine code at once, and written to a binary file that can be executed by computer. this protable file can be executed in any computer. apps that you used were compiled somewere else and executed in your computer.
// interpertation: runs through the source code and executes it line by line.
// JIT(just in time) compilation: entire code is converted to machine code at once then executed immediately(no portable file is generated).
// old js used interpreted but new uses JIT. why change as interpreation is ver slow as compared to compiled lang.

// JIT in js: code is parsed. during parsing code is converted to AST(abstract syntax tree data structure). each meaningfule words such as keywords are stored in AST. syntax errors are taken care here. this tree be used to generate the machine code. DOM and AST are compleley diff. the AST -> compilted code using JIT and this machine code is executed immediatley(in callstack). modern js engine has optimazation stratigies. execution and optizations are done at same time in background. these all process such as parsing, compilation, execution, optimization are done in special threads inside engine that we can not access via our code. it s complety seperated from our main thread in call stack. so js is not interpreted lang. pdf pic

// js runtime : its just a box. box includes all the things which are needed to use js in runtime eg: broswer, out side the browser. heart of any js runtime is js engine. w/o a engine there is no runtime and no js. next we need web api's(DOM, timers, fetch API, console.log). web api are functionlaity provided to js but not part of js. these api can be access via global window object. next we need a callback queue. is a data strucutre that contains all the callback fxs that are ready to be excuted in call stack eg: event lister fx. event handler fxs are also called callback fxs. when event happens than call back fxs are passed to call stack and this is called event loop. this makes js non-blocking. nodejs -> js can exist out side of browers. just replace web api's(as browsers provide the web apis)  with c++ bindings and thread pool. so diff js runtime do exists

/*
// l91 execution contexts and the call stack
//only 1 global execution context(GEC) is created for top_level_code(code not inside any fx). execution context: env where js is executed. store all the necessay info for some code to be executed(such as local variables, arguments). So one execution context per fx call inside GEC. when all fxs are done executing the engine will keep waiting for callback fxs ie event handlers to arrive so that it could execute these. event loop will provide these call back fxs to call stack.

// (Q) what's inside execution context
// 1. variable env:
//    a. let, const, var declarations
//    b. fxs
//    c. arguments object(all the arguments that we passed into the fxs that the currenct EC belongs to; each fx have its own EC when fx is called)

// 2. scope chain (a fx can access variables outside of the fx; scope chain consist of refernces to variables that are located outside of the current fx, scope chain is stored in each EC)

// 3. this keyword

// note -> arrow fx's EC do not have this keyword and arguments object, instead they can use the argument object and this keyword from there closest regular fx parent.
// note -> EC is generated creation phase right before execution
// js has only one thread, so one task at a time
// call stack is the map for js engine, callstack is place where EC get stacked on top of each other, to keep track of where we are in the execution  it shows to which EC has to be executed. when we close the brower  window than only the call stack is empty i.e GEC will be popped(like hpipe app cookies are clear when window is cleared).

// note: EC that is popped out might keep live in the memory.

*/

// missing
/*
// l92: scope and the scope chain
// scoping :how our program variables are organized and accessed.
// lexical scoping: scoping is controlled by placement of fxs and blocks in code. eg: a fx which is written inside another fx has access to vaiables of parent fx.
// scope: global scope, fx scope, block scope. scope is place in our  code were variables/fxs are declared.
// scope of a variable: region or our code where a certain variable can be accessed

// 1. global scope
// outside of any fx or block. are accessible everywhere

// 2. fx scope
// variables are accessible only inside the fx. aka local scope

// 3. block scope(every thing in b/w urly braces)
// variables are accessible only inside block. this only applies to let and const variables. if var variables are declared inside a block scope than it is accessble to fx or global scope. var is fx scope.

// eg:
const myName = 'Jonas'; // global scope

function first() { // 
  const age = 30;//fx scope

  if (age >= 30) {
    const decade = 3; // block scope
    var millenial = true;// fx scope as not es6 
  }
  function second(){
    const job = 'teacher';// second fx scope
    console.log(`${myName} is a ${age}-old ${job}`);// variables can be access via scope chaining
  }

  second();
}

first();

// scope chain: scope has access to variables from all outer scopes

// scope chain vs call stack
// note :watch video again 
*/

// missing
/*
// l93: scoping in practice
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(firstName); // scope chaining: look into parents scope
  // console.log(lastName); // unable to find variable in scope chain

  function printAge() {
    const output = `you are ${age}, born in ${birthYear}. ${firstName}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var str = `Oh and youre are millenial ${firstName}`;
      console.log(str);
      function printAge2() {
        console.log(firstName);
      }
    }
    console.log(str);

    // printAge2();// fx are blocked scope but in case of strict mode
  }
  // console.log(str); not defined as var is nearest fx scope
  printAge();
  return age;
}

const firstName = 'Jonas'; // declare first before calling the fx if want to use it in fx
calcAge(1991);
// printAge(); // scope ended; fx are block scoped

*/

// l94: variable env: hoisting and the TDZ
// the EC always contains 3 parts:
//    a. var, let, const AKA variable env
//    b. scope chain
//    c. this keyword

// hoisting: makes some types of variables accessible in the code before they are actually declared. 'variables lifted to the top of their scope.'



/*
// l97 this keyword in practice
console.log(this);// window object

const calcAge= function(birthYear){
  console.log(2037 - birthYear);
  console.log(this);// fx own this keyword -> undefined
}
calcAge(1991);

const calcAgeArrow= (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this);// arrow fx do not have there this keyword, but lexical(parent) this keyword -> window this keyword
}
calcAgeArrow(1991);

const jonas = {
  year: 1991,
  calcAge : function(){
    console.log(this);
    console.log(2037 - this.year);
  }
}
jonas.calcAge();//this keyword will point to owner of object ie will point to object who is calling that object method 

const matilda = {
  year: 2017
}

matilda.calcAge = jonas.calcAge; //method borrowing
matilda.calcAge();

const f = jonas.calcAge;
// console.log(f);
console.log(f());// this keyword is undefined here as now this belongs to the fx this keyword 
*/

/*

// l98 regular fx vs arrow fx

var firstName = 'Sunil';// var declare property in global object

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge : function(){
    console.log(this);
    console.log(2037-this.year);

    const self = this;
    // rule: a normal fx will have this keyword as undefined
    const isMillenial = function(){
      console.log(this);
      console.log(self.year)
      // console.log(this.year)//error 
      self.firstName = 'ss'
    }
    isMillenial();

    // if you want to access this in real time than use arrow fx
    const isMillenial2 = () =>{
      console.log(this);//uses this keyword of parent scope
      console.log(this.firstName);
    }
    isMillenial2();
  },

  // never use arrow fx as method
  greet:() => {
    console.log(this);
    console.log(`hey, ${this.firstName}`);// arrow fx does not have its this keyword, this is dangerous as this keyword is global window object and var variable are decalred globally.
  },


}

jonas.greet()
console.log(this.year);// undefined

jonas.calcAge();

// argument keyword
const addExpr = function(a,b){
  console.log(arguments);
  return a+b;
}

addExpr(1,2);
addExpr(1,2,3,4);

var addArrow = (a,b) =>{
  console.log(arguments);// arguments are not defined for arrow fx
  return a+b;
}

addArrow(1,2);
*/

// l99 primitives vs objects
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'jonas',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log(me);
console.log(friend);