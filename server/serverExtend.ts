import { Server } from './server';
import {Router} from 'express';

export class  ServerExttend {

	server: Server;

	constructor (server: Server){
			this.server = server;
	}

	start(callback: () => void ) {
			return 	this.server.start(callback);
	}

	setRouter( stringRoute: string, route: Router) {
			this.server.app.use(stringRoute,route);
	}

	setConfig( route: any ) {
			this.server.app.use( route );
	}


}