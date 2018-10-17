# JavaScript Modules

After looking into the module systems in previous lessons, we now have a standard format that is widely supported on all browsers, known as JS Modules or ECMAScript modules.

The goal for ECMAScript 6 modules was to create a format that both users of CommonJS and of AMD are happy with.

There are two kinds of exports: named exports (several per module) and default exports (one per module). As explained later, it is possible use both at the same time, but usually best to keep them separate.

## Named Exports

A module can export multiple things by prefixing its declarations with the keyword export. These exports are distinguished by their names and are called named exports.

```javascript
//------ lib.js ------
export const sqrt = Math.sqrt;
export function square(x) {
    return x * x;
}
export function diag(x, y) {
    return sqrt(square(x) + square(y));
}
```

To use the exported module we use the `import` syntax.
```javascript
//------ main.js ------
import { square, diag } from 'lib';
console.log(square(11)); // 121
console.log(diag(4, 3)); // 5
```

## Default Exports (One Per Module)

An ECMAScript module can pick a default export, the most important exported value. Default exports are especially easy to import.

You can prefix any function declaration (or generator function declaration) or class declaration with the keywords export default to make it the default export.

```javascript
export default function foo() {}
export default class Bar {}
```

There are some caveats, we can only default export declarations of `functions` and `classes`. For any other expression have to assign the value and export the reference, such as this is not possible:
```javascript
export default const ValueA = 'Hello'
```

But this is valid:
```javascript
const ValueA = 'Hello'
export default ValueA
```

To import a default value we use import syntax but the import variable is whatever name we decide.

```javascript
//------ react.js ------
export default class React {}
//------ main.js ------
import ReactLib from './react.js'
```

We can see that though we are exporting the `React` class, in `main.js` we are using this class as `ReactLib`.

## Mixed Named and Default Exports

The following pattern is surprisingly common in JavaScript: A library is a single function, but additional services are provided via properties of that function. 
As it turns out, you can actually have named exports and a default export at the same time.

```javascript
//------ lodash.js ------
export default function (obj) {
    ...
};
export function each(obj, iterator, context) {
    ...
}
export { each as forEach };

//------ main.js ------
import _, { each } from 'underscore';
```

## Importing Modules

There's various ways of importing modules. We can import an entire modules content, it's individual parts, the default module or import for the side effects.

ECMAScript 6 provides several styles of importing2:

### Default import:
  `import localName from 'src/my_lib';`
  
### Namespace import: imports the module as an object (with one property per named export).
  `import * as my_lib from 'src/my_lib';`
  
#### Named imports:
  `import { name1, name2 } from 'src/my_lib';`
  
You can rename named imports:

  ```javascript
  // Renaming: import `name1` as `localName1`
  import { name1 as localName1, name2 } from 'src/my_lib';
  // Renaming: import the default export as `foo`
  import { default as foo } from 'src/my_lib';
```

#### Empty import: only loads the module, doesn’t import anything. The first such import in a program executes the body of the module.
  `import 'src/my_lib';`

There are only two ways to combine these styles and the order in which they appear is fixed; the default export always comes first.

- Combining a default import with a namespace import:

  `import theDefault, * as my_lib from 'src/my_lib';`
  
- Combining a default import with named imports:

  `import theDefault, { name1, name2 } from 'src/my_lib';`
  
This last syntax is very common for libraries, such as that you import the main functionality as a default import, and other utilities with named imports.
React is one such library.

`import React, { Component } from 'react'`

### Rules

#### Import and exports must be at a top level

The structure of ES6 modules is static, you can’t conditionally import or export things. That brings a variety of benefits.
This restriction is enforced syntactically by only allowing imports and exports at the top level of a module:

#### Imports are hoisted

Module imports are hoisted (internally moved to the beginning of the current scope).
Therefore, it does not matter where you mention them in a module.

```javascript
foo();
import { foo } from 'my_module';
```

Resources:
- https://developers.google.com/web/fundamentals/primers/modules
- http://exploringjs.com/es6/ch_modules.html
