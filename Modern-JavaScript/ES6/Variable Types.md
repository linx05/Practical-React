# Variable Types

## `var`

The `var` statement declares a variable, optionally initializing it to a value.

It's the most well known variable declaration statement, and the only one that existed before `let` and `const` were introduced in ES6.
Variables declared using var are always **`hoisted`** to the top of their `scope`.

When a JavaScript variable is `hoisted` it goes through a process where the variable is declared in it's top-most `function scope` before execution.
This makes it possible that statements such as the following are possible:

```javascript
console.log(i); // undefined
var i = 0;
```

Here's how the interpreter executes the code after hoisting:

```javascript
var i;
console.log(i);
i = 0;
```
The interpreter moved (e.g. “hoisted”) the variable declaration to the top of the scope.

`var`'s are `function-scoped` as we had previously mentioned: scope is limited to the function it was defined in.

```javascript
function foo() {
  var i = 0;
}
console.log(i); // ReferenceError: i is not defined
```
`i` only exists within foo so we get an error..

**var’s are not block-scoped: scope is not limited to the block it was defined in.**

```javascript
var i = 0
if (true) {
  var i = 1;
}
console.log(i); // 1
```

i was still in the “global scope” within the if block. i's value was overwritten, which may have not been the intention.

## `let`

Only difference between `var` and `let` variables is that `let` variables _are_ **block scoped**. This leads to a lot less unexpected behavior.

```javascript
let i = 0;
if (true) {
  let i = 1;
}
console.log(i); // 0
```

Even though i was assigned to 1 in the if block, that assignment was local to the block and therefore our “global” i was still 0. The if block’s scope was separate from the global scope.

## `const`
`const` variables restricts reassignment of variables.

```javascript
const i = 0;
i = 1; // TypeError: Assignment to constant variable.
```

const also doesn't allow you to declare a variable without assigning its (constant) value

`const i; // SyntaxError: Missing initializer in const declaration`

However, `const` does allow variable mutation (only objects/arrays are mutable in JS).

Array Mutation:

```javascript
const a = [1];
const b = a;
console.log(a === b); // true
b.push(2);
console.log(a === b); // true
console.log(a); /// [ 1, 2 ]
```

Object Mutation:

```javascript
const obj = {};
obj.i = 1;
console.log(obj); // { i: 1 }
```

Also like `let`, `const` is also **block scoped**.


Resources:
- https://hackernoon.com/js-var-let-or-const-67e51dbb716f
