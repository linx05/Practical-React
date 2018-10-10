# Transpiling

Transpilers, or source-to-source compilers, are tools that read source code written in one programming language, and produce the equivalent code in another language. Languages you write that transpile to JavaScript are often called compile-to-JS languages, and are said to target JavaScript.

Anyone who's had to deal with browser compatibility issues before knows its not as simple as writing JavaScript that runs everywhere. That's because every browser uses a different JavaScript engine: Chrome runs V8, Firefox runs SpiderMonkey, and Interet Explorer, Chakra. Each has different performance characteristics, each implements a different subset of ES2015 features, and each is approaching full compliance with the spec at different rates.

Transpilers allow us to:

- Write compile-to-JavaScript languages, like CoffeeScript, TypeScript, or ClojureScript
- Let us use new and potential JavaScript features, reliably
- Contribute to the development of the ECMAScript specification

## Babel
[Babel](https://babeljs.io) is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.
Here are the main things Babel can do for you:

- Transform syntax
- Polyfill features that are missing in your target environment (through @babel/polyfill)
- Source code transformations (codemods)

Babel can be made a part of the module building step in a module bundler such as Webpack to transpile your projects modules.

References:
- https://scotch.io/tutorials/javascript-transpilers-what-they-are-why-we-need-them
- https://babeljs.io/docs/en/
