Graphql Practice...

GraphQl With Apollo....

go to server folder and run

---> npm run client-install

// to install react dependencies

--->  npm run dev

// to run both node and react

React + Node Running from a Single Server 

"scripts": {
    "start": "node app.js",
    "server": "nodemon app.js",

    "client": "cd ../client && npm start"
    // "client": "npm start --prefix ../client 
    // client is folder name in which we have react

    "dev": "concurrently \"npm run server \" npm run client\"",
},