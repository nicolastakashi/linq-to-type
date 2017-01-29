# Linq To Type
[![Build Status](https://travis-ci.org/nicolastakashi/linq-to-type.svg?branch=master)](https://travis-ci.org/nicolastakashi/linq-to-type)
[![Coverage Status](https://coveralls.io/repos/github/nicolastakashi/linq-to-type/badge.svg?branch=master)](https://coveralls.io/github/nicolastakashi/linq-to-type?branch=master)
[![TypeScript definitions on DefinitelyTyped](http://definitelytyped.org/badges/standard.svg)](http://definitelytyped.org)
[![npm version](https://badge.fury.io/js/linq-to-type.svg)](https://badge.fury.io/js/linq-to-type)

A library written entirely in typescript inspired Linq that exists in .NET.

Linq to type allows for the manipulation of data collections in the same way we do in C # using lambda expressions.

Contribute & Develop
--------------------

We've set up a separate document for our [contribution guidelines](https://github.com/nicolastakashi/linq-to-type/blob/master/CONTRIBUTING.md).

# Building

In this section we will see how to do to contribute com o Linq To Type.

## Installing Dependencies
Before you can build the project, you must install and configure the following dependencies on your machine:
* [Git]: The [Github Guide] to Installing Git is a good source of information].
* [Node.js] v6.x (LTS): We use Node to run tests, and generate distributable files. Depending on your system, you can install Node either from source or as a pre-packaged bundle.
* We recommend using [nvm] (or nvm-windows) to manage and install Node.js, which makes it easy to change the version of Node.js per project.
* [Typescript] because our project is TypeScript based.

[Git]: <https://git-scm.com/>
[Github Guide]: <https://help.github.com/articles/set-up-git/>
[Node.js]: <https://nodejs.org/en/>
[nvm]: <https://github.com/coreybutler/nvm-windows>
[TypeScript]: <https://www.typescriptlang.org/>

## Build

```sh
# Clone your Github repository:
git clone https://github.com/<github username>/linq-to-type.git

# Go to the Linq To Type directory:
cd linq-to-type

# Add the main Linq To Type repository as an upstream remote to your repository:
git remote add upstream "https://github.com/nicolastakashi/linq-to-type.git"

# Install node.js dependencies:
npm install

# Run Linq To Type tests
npm test
```
