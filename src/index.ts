import Server from "./models/server";
import dotenv from 'dotenv';


//configuramos dotenv
dotenv.config();

const server = new Server(); // creando una instancia del server

server.listen();

// NOTE - uno de esos comandos te pueden servir pruebalos en el package.json
// "dev": "nodemon src/models/server.js" 
// "dev": "nodemon src/models/server.ts"

//*************************
//"dev": "nodemon server.ts"