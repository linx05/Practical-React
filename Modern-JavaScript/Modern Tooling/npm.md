# npm

npm is a package manager for the JavaScript programming language. 
It is the default package manager for the JavaScript runtime environment Node.js. 

## Components

npm consists of three distinct components:

- the website
- the Command Line Interface (CLI)
- the registry

Use the website to discover packages, set up profiles, and manage other aspects of your npm experience. For example, you can set up Orgs (organizations) to manage access to public or private packages.

The CLI runs from a terminal. This is how most developers interact with npm.

The registry is a large public database of JavaScript software and the meta-information surrounding it.

## Installing Packages

npm can install packages in local or global mode. 

In local mode it installs the package in a node_modules folder in your parent working directory. This location is owned by the current user. 

Global packages are installed in {prefix}/lib/node_modules/ which is owned by root (where {prefix} is usually /usr/ or /usr/local)

Packages are installed with the general structure of:

```
    npm install package
```

Installing a package this way installs the package to the local `node_modules` folder.
Installing a package this way does not persist information that this package was installed anywhere.
To install a package globally we append the `--global` flag to the end of the command.

## package.json

A package.json file:

- lists the packages that your project depends on.
- allows you to specify the versions of a package that your project can use using semantic versioning rules.
- makes your build reproducible, and therefore much easier to share with other developers.

When you install packages locally, you normally do so using a `package.json` file.
This file holds various metadata relevant to the project besides the npm packages that are installed.

It can also contain other metadata such as a project description, the version of the project in a particular distribution, license information, even configuration data - all of which can be vital to both npm and to the end users of the package. 
The package.json file is normally located at the root directory of a Node.js project.

To add a package dependency to your `package.json` you can manually edit the file and add the dependency or run `npm install` with the `--save` or `--save-dev` flags.

The `--save` flag adds the package to the `dependencies` property, while the `--save-dev` flag adds it to the `devDependencies` property.

Dev dependencies, as the name implies, are dependencies that are only required for building/developing using your package and are not explicitly necessary to run the package.

## Reinstalling Dependencies

To reinstall dependencies in a folder that contains a `package.json` file you run the `npm install` command.
This reads the `package.json` files and installs all declared dependencies.

## Uninstalling Packages

To uninstall the package you run the `npm uninstall` command, though this will only remove the package from your local `node_modules` folder without modifying your `package.json` file.

To uninstall and reflect this change in your `package.json` file add the `--save` flag or `--save-dev` if the package is a Dev Dependency.

To uninstall a global package add the `-g` or `--global` flag to the end of the command.

## Alternatives (Yarn)

Yarn is an alternate package manager for Node. 
Yarn isn’t technically a replacement for npm since it relies on modules from the npm registry. 
Think of Yarn as a new installer that still relies upon the same npm structure.

Yarn claims to have better module resolution and to provide more consistent installations across different systems. It also has local cache por package registration between projects.
Many of it's advantages are disputed and some have been ported over to npm, so most of the time it comes down to personal preferences. 

References:
- https://docs.npmjs.com/getting-started/what-is-npm
- https://docs.nodejitsu.com/articles/getting-started/npm/what-is-the-file-package-json/
- https://www.sitepoint.com/yarn-vs-npm/
