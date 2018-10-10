# Functions in JavaScript

### Functions as "first-class objects"

In JavaScript functions are treated as **first-class objects**. What this means is that functions can be assigned as a value to a variable, passed as argument to other functions and can be returned by another function.

#### Functions as variables

```javascript
var screamItOut = function (text) {
    return text.toUpperCase() + '!';
}
screamItOut("hey you") // Result: "HEY YOU!"
```

In this example a number of things are happening:

1. We are using creating a **function expression**, which is similar to a **function declaration** but without giving a name to the function.
2. We are assigning the **function expression** to the `screamItOut` variable. Since JavaScript treats functions like any other value, we can save this function to the variable.

#### Functions as parameters - "Callbacks"

We can also pass functions as parameters:

```javascript
function goGetData(onDone) {
    const calculation = (10 + 40) / 10;
    return onDone(calculation);
}
var getResult = function (result) {
    return "Done! Result: " + result;
}
// Passing "done" function as a parameter
goGetData(getResult); // Result: "Done! Result: 5
```

We passed the `getResult` variable as a function parameter and executing this function inside the `goGetData` function. `goGetData` passes the `calculation` into the function parameter and return of the result of the `onDone` function passed to it.
This kind of pattern is specially useful when doing **asyncronous operations** in which we can execute the function when the async action or when we do **event handling**.

#### Functions as `return` values - "Currying"

Since functions can be used like any other value in JavaScript that leaves the posibility to `return` function as a result of another functions execution.

```javascript
function add(a) {
    // We are returning an anonymous function here.
    return function (b) {
        return a + b;
    }
}
var add2 = add(2);

console.log(add2(2)); // Result: 4
console.log(add2(10)); // Result: 12
```

Here we are returning a new function from inside the `add` function, that takes `b` as a second parameter.
This returned function can then later be called which will return the result of the sum of the parameter of the `add` function and the parameter passed on to the "returned" function.

You may be wondering how the returned function has access to the `a` variable when it's time to return the sum.
This is due to how **scope** works in JavaScript, and what we're about to see next!
