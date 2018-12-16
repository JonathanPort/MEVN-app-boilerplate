# MEVN App Boilerplate
A quick pre-setup for **MongoDB**, **ExpressJS**, **VueJS** and **NodeJS** based applications.

## Features
Backend comes pre-equiped with:
* A Laravel style controller system that can easily be called from a route file
* Nicely organised routes directory that's easily extendable
* An extendable, Laravel style config directory with a helper function to call on the config vars
* An extendable Boot / Services system to load in services and modules on application start
* CSRF protection baked in with CSURF
* Handlebars view parser
* Morgan logger
* Frontend Error views
* Nodemon server listener
* Mongoose ORM with MongoDB
* Laravel style, Class based Model system to easily bring in models in the controllers
* DotEnv that is linked to the config system
* Server setup with adjustable host names, ports etc.
* Front controller pointing to `./public/index.html`, ready for the Vue application

Frontend comes equiped with:
* A standard installation of VueJS 2.5


## Project setup
1. Install dependencies:
```
npm install
```
2. Create and Setup .env file (see .env.example)
3. Launch the Node server
```
// Standard start
npm run node-start

// Nodemon watch
npm run node-watch
```

## Compiling VueJS
```
// Compile for production
npm run vue-build

// Compile for development and watch
npm run vue-watch
```

## Run tests
```
npm run test
```

## Lints and fixes files
```
npm run lint
```

## ToDo
* Make a Kernal system and app container
* Configurable view parser
* Configuarable Logger
