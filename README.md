# React-native-training-rep
A repository just to learn some react features and things.

This repository is made to learn some React native features. Here you will build simple CRUD mobile app for learning english language that will allow you to store words you have learnt.

### Stack
- yarn - package manager we will use for this project, so check if it's installed
- expo - platform to make native app
- React-native
- MUI (is ok to use)

## Repository overview
- NativeApp - folder with app
- NativeApp/.gitignore - contains what should be ignored by Git
- NativeApp/yarn.lock - standard generated file by yarn
- NativeApp/package.json - file that contains all packages that should be installed to run this project.
- NativeApp/assets - a resource folder for storing all images, vectors, fonts, etc.
		icon.png, adaptive-icon.png, favicon.png, splash.png - images, icons
- NativeApp/src - this folder is the main container of all the code inside your application.
	App.js - the main component that runs your entire application.
	app.json - the file used to configure your own application, its configuration.
	babel.config.js - the file thanks to which we can use JSX code.
- README.md - This Readme file
- TODO.md - file with tasks 


## How to start project
To run this project correctly you need first to install all the dependencies.
- go to NativeApp folder, execute <code>$ yarn install</code> there
- when all dependecies are installed, you can start project

TO START PROJECT
- <code>$ yarn expo start</code> - to start project
- <code>$ yarn android</code> - to start android emulator
- <code>$ yarn ios </code> - to start ios emulator 
