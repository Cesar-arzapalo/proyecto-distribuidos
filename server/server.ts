import express from 'express';

export class  Server {
     public app: express.Application;
     public port: number;

     constructor (port: number){
         this.port = +process.env.PORT! || port;
         this.app = express();
     }

     start(callback: () => void ) {
         this.app.listen(this.port, callback);
     }
}