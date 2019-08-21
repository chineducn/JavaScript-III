/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When this is mentioned on a global scope, it has window/global object binding since the window is an object.  
     This means that there is no other object defined or 'this' is not mmentioned in an object literal, object construct or construct state.
* 2. When a function mentioned after a dot, the this refers to the object just before the dot.
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
// console.log(this);

// Principle 2

// code example for Implicit Binding
let fuzzyBrain = {
    name: 'Lambda student on day 3 of JS',
    greet: function(){
        return `Hi I'm a ${this.name} and I can't take this anymore`; 
    },
}

fuzzyBrain.greet();

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding