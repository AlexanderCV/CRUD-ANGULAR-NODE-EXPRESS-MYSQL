// aqui no te puedo ayudar porque no he usado esta {Aplication} con node 😅

import express, {Application} from 'express';

class Server{

  //private app: express.Application;
  private app: Application;
  private port: string;

  constructor(){
    this.app = express();
    this.port = process.env.PORT || '4000';
  }

  listen(){
    this.app.listen(this.port, () =>{
      console.log('Aplicación corriendo por el puerto ', this.port);
    });
  }

}   
 
export default Server;