# Express-server-Typescript
REST API (CRUD) with Express implemented with Typescript. Using MYSQL Data Base connector and Data Access Object as Design Pattern at Data Layer 


# Installation
First at all you have to install node.js in your Pc. Use this link [node.js](https://nodejs.org)

You have to install typescript globally with this command line:

```sh
npm install -g typescript
```

Then at the root of the project, you have to install all dependecies of the package.json. Use this command line:

```sh
npm install 
```

When you have installed all dependecies, you have to compile the typrescript to Javascript ES5. To make this posible, 
You have to be at the same level of the tsconfig.json file, and run this command line:

```sh
tsc 
```

This command line will compile all the typescript file inside the src folder and it will compiled in a folder named 'dist'


And finally to run this REST API, you have to run this command line:

```sh
npm run start
```


**It will run on port 4000 and you can test it!**
