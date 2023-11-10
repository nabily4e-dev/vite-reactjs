# Auto-Generating Components with Plop

In this project, we're using a tool called [Plop](vscode-file://vscode-app/c:/Program%20Files/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html) to automate the creation of
components. Plop is a micro-generator framework that makes it easy for an
entire team to create files with a level of uniformity.

## What is Plop?

Plop is a command-line tool that you run using the `plop` command. It reads a
`plopfile.js` in your project root, which contains descriptions of what kind of
files can be created. These descriptions are called "generators".

## How to Use Plop in Our Project

In our project, we've set up a Plop generator for creating new components.
Here's how you can use it:

1. Run the `plop` command in your terminal. This will start the Plop
interactive prompt.
2. You'll be asked to choose a generator. Select the `component` generator.
3. Next, you'll be asked to provide a name for your new component. Enter the
name and hit `Enter`.
4. Plop will create a new component with the name you provided, under the
appropriate directory.

## What Does the Component Generator Do?

Our component generator creates a new directory under the `components`
directory, with the name of the component you provided. Inside this directory,
it creates the following files:

* `index.js`: This is the main file for your component. It exports your
* component.
* `ComponentName.js`: This file contains the actual React component.
* `ComponentName.test.js`: This file contains a basic test for your component.
* `ComponentName.styles.js`: This file contains any styled-components for your
component.

## Why Use Plop?

Plop ensures that every component in our project follows the same structure and
naming conventions. This makes our codebase easier to understand and maintain.

## Useful Links

* [Plop.js Official Website](vscode-file://vscode-app/c:/Program%20Files/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html)
* [Plop on GitHub](vscode-file://vscode-app/c:/Program%20Files/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html)
* [Plop.js Tutorial on YouTube](https://www.youtube.com/watch?v=r_fSz2KudsE)

Remember, consistency is key in a large codebase. By using Plop, we ensure that
all components follow the same structure, making our code easier to read and
maintain.
