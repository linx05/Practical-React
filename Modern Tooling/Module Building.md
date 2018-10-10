# Module Building

Having looked at modules know, we ask how we can implement this in the browser. Although there is now [general support for ECMAScript Modules](https://caniuse.com/#feat=es6-module),
there are still common cases where it's not enough such as using third party libraries, transpiling, asset management, minification, uglification and many others.

To account for this shortcomings we can use module bundlers to generate a _bundle_ from our JavaScript modules.
A JavaScript bundler is a tool that puts your code and all its dependencies together in one JavaScript file.
The most popular ones at the moment of writing this are [Webpack](https://webpack.js.org/) and recently [Parcel](https://parceljs.org/).

In this guide we'll talk about the most popular option at the moment, Webpack.

## Webpack 

At its core, webpack is a static module bundler for modern JavaScript applications. 
When webpack processes your application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles.

References:
- https://webpack.js.org/concepts/
- https://medium.com/@gimenete/how-javascript-bundlers-work-1fc0d0caf2da
