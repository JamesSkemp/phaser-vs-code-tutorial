# Part One: New Project
In order to simplify things, we'll be using a basic starter project for our new project.

[My Phaser Tutorials on GitHub](https://github.com/JamesSkemp/PhaserTutorials) includes a couple starter projects. We'll use the [_Starter VS Code](https://github.com/JamesSkemp/PhaserTutorials/tree/master/_Starter%20VS%20Code) project for the benefits it includes, which are detailed below.

## Starting the New Project
To start our new project we'll grab a copy of the [_Starter VS Code](https://github.com/JamesSkemp/PhaserTutorials/tree/master/_Starter%20VS%20Code) project, renaming the directory to whatever you would like to call your game.

For the purposes of this tutorial I'll be naming the directory based upon what part of the tutorial we're on, so I'll rename mine to **part-one**.

With the directory copied we can then open it in Visual Studio Code and run the build task (Shift + Command + B on MacOS). This will generate a new file, **app.js** in the root of the directory that the index.html file points to by default, and which contains all of the compiled TypeScript code.

On MacOS X we can use Python to run the site locally to verify that the starter project loads correctly, before we mess with any of the.

	python -m SimpleHTTPServer 8000

We should now be able to browse to http://localhost:8000/ and view an empty page, with no errors in the browser's console.





> This part of the tutorial is in progress.









## What the _Starter VS Code Project Provides
- assets
	- This directory can be used to store any assets (images, audio, etcetera) that your game will use.
- lib
	- This directory includes [Phaser 2.6.2](http://phaser.io/), and the necessary TypeScript definitions.
- plugins
	- This directory is intended to store any plugins that are used by your game.
	- A collection of plugins can be found in the [Phaser Plugins repository](https://github.com/photonstorm/phaser-plugins).
- src
	- This directory is intended to store your TypeScript files, and includes a .gitignore so that any JavaScript files that are built aren't committed.
	- A possible directory structure, as well as a few starter states, have been added for ease, but can be removed without issue.
- app.css can include any styling necessary for your application.
- favicon.ico
	- HTML5 Logo by [World Wide Web Consortium/W3C](http://www.w3.org/) and included here based upon the [logo FAQ](http://www.w3.org/html/logo/faq.html) allowing it (and it seems like the best logo to start with).
- index.html
	- The `title` and `h1` elements should be updated to match the needs of your game.
	- Includes a reference to the minified Phaser library.
	- Also includes a reference to a JavaScript file, which the Visual Studio project is setup to output TypeScript files to, and which should be updated to match your needs.
- README.md is this file, and should be replaced with whatever content is needed for your game.
- tsconfig.json
	- This file determines how TypeScript will compile the project.
	- By default all TypeScript files will be compiled into a single app.js file in the root of the project.
- .vscode/tasks.json
	- Used by Visual Studio code when running the build task.
