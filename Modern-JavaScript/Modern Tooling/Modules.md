# Modules

The concept of modules is not something specific to JavaScript and is based on the Module Pattern.

The Module pattern is used to mimic the concept of classes (since JavaScript doesn’t natively support classes) so that we can store both public and private methods and variables inside a single object 

That allows us to create a public facing API for the methods that we want to expose to the world, while still encapsulating private variables and methods in a closure scope.

Some benefits of using modules are:

- Maintainability
- Namespacing
- Reusability

They are many ways to implement the module pattern in JavaScript, let's take a look at two of the most common:

**Anonymous closure**

In this construct, we have an anonymous function that has its own evaluation environment or “closure”, and then we immediately evaluate it. This lets us hide variables from the parent (global) namespace.

```javascript
(function () {
  // We keep these variables private inside this closure scope
  
  var myGrades = [93, 95, 88, 0, 55, 91];
  
  var average = function() {
    var total = myGrades.reduce(function(accumulator, item) {
      return accumulator + item}, 0);
    
      return 'Your average grade is ' + total / myGrades.length + '.';
  }

  var failing = function(){
    var failingGrades = myGrades.filter(function(item) {
      return item < 70;});
      
    return 'You failed ' + failingGrades.length + ' times.';
  }

  console.log(failing());

}());
```

This pattern is common in JavaScript development and is knows as an _IIFE_ (Immediately Invoked Function Expresion) and is usually used as an easy way to not pollute the global namespace.

We can also pass in globals as parameter to the IIFE function to declare explicitly which global variables you are going to use.

```javascript
(function ($) {
  $('.button-active').on('click', function () {
    console.log('Hi!');
  })
}(jQuery));
```

**Revealing Module Pattern**

In this pattern we invoke our IIFE but return an object explicit with the properties we would like to expose.

```javascript
var myGradesCalculate = (function () {
    
  // Keep this variable private inside this closure scope
  var myGrades = [93, 95, 88, 0, 55, 91];
  
  var average = function() {
    var total = myGrades.reduce(function(accumulator, item) {
      return accumulator + item;
      }, 0);
      
    return'Your average grade is ' + total / myGrades.length + '.';
  };

  var failing = function() {
    var failingGrades = myGrades.filter(function(item) {
        return item < 70;
      });

    return 'You failed ' + failingGrades.length + ' times.';
  };

  // Explicitly reveal public pointers to the private functions 
  // that we want to reveal publicly

  return {
    average: average,
    failing: failing
  }
})();

myGradesCalculate.failing(); // 'You failed 2 times.' 
myGradesCalculate.average(); // 'Your average grade is 70.33333333333333.'
```

Both approaches have one thing in common: the use of a single global variable to wrap its code in a function, thereby creating a private namespace for itself using a _closure scope_.

Though these approaches are good for creating good abtraction betweeen modules, it doesn't help to deal with the fact that we still have to deal with dependency order manually or that we still have to go through a global scope.
Fortunately, there's already some popular and well implemented approaches to module resolution and building.

## CommonJS

CommonJS is a volunteer working group that designs and implements JavaScript APIs for declaring modules.

A CommonJS module is essentially a reusable piece of JavaScript which exports specific objects, making them available for other modules to require in their programs.
This is the default module format for programs made in Node.js.

With CommonJS, each JavaScript file stores modules in its own unique module context (just like wrapping it in a closure). In this scope, we use the module.exports object to expose modules, and require to import them.

A CommonJS module might look something like this:

```javascript
function myModule() {
  this.hello = function() {
    return 'hello!';
  }

  this.goodbye = function() {
    return 'goodbye!';
  }
}

module.exports = myModule;
```

We use the special object module and place a reference of our function into module.exports. This lets the CommonJS module system know what we want to expose so that other files can consume it.

Then when someone wants to use myModule, they can require it in their file, like so:

```javascript
var myModule = require('myModule');

var myModuleInstance = new myModule();
myModuleInstance.hello(); // 'hello!'
myModuleInstance.goodbye(); // 'goodbye!'
```

## ECMAScript modules

As simple to use as CommonJS modules are, they where never standardized for the web and did not become compatible with browsers.
As a response to this JavaScript now has standardized syntax for exactly that. 
Within a module, you can use the export keyword to export just about anything. You can export a const, a function, or any other variable binding or declaration. 

The syntax to import a module is:

`import package from 'module-name'`

while CommonJS uses

`const package = require('module-name')`

A module is a JavaScript file that exports one or more value (objects, functions or variables), using the export keyword. For example, this module exports a function that returns a string uppercase:

```javascript
export const repeat = (string) => `${string} ${string}`;
export function shout(string) {
  return `${string.toUpperCase()}!`;
}
```

You can then use the import keyword to import the module from another module. Here, we’re importing the repeat and shout functionality from the lib module, and using it in our main module:.

```javascript
// 📁 main.mjs
import {repeat, shout} from './lib.mjs';
repeat('hello');
// → 'hello hello'
shout('Modules in action');
// → 'MODULES IN ACTION!'
```

You could also export a default value from a module:

```javascript
// 📁 lib.mjs
export default function(string) {
  return `${string.toUpperCase()}!`;
}
```

Such default exports can be imported using any name:

```javascript
// 📁 main.mjs
import shout from './lib.mjs';
//     ^^^^^

```

References:
- https://medium.freecodecamp.org/javascript-modules-a-beginner-s-guide-783f7d7a5fcc
- https://nodejs.org/docs/latest-v10.x/api/modules.html
- https://developers.google.com/web/fundamentals/primers/modules
- https://flaviocopes.com/es-modules/
