# Object Destructuring and Spread Syntax

## Object Destructuring

```javascript
var o = {p: 42, q: true};
var {p, q} = o;

console.log(p); // 42
console.log(q); // true
```

### Default Values

A variable can be assigned a default, in the case that the value unpacked from the object is `undefined`.

```javascript
var {a = 10, b = 5} = {a: 3};

console.log(a); // 3
console.log(b); // 5
```

## Spread syntax

Spread syntax allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

For function calls:

`myFunction(firstParam, ...iterableObj);`

For array literals or strings:

`[...iterableObj, '4', 'five', 6];`

For object literals (new in ECMAScript 2018):

`let objClone = { ...obj };`

References:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring
