import { Server } from './server/server';
import { ServerExttend } from './server/serverExtend';

import mongoose, {ConnectOptions} from 'mongoose';
import bodyParser from 'body-parser';
import categoriaRoutes from './routes/categoria.route';
import pedidoRoutes from './routes/pedido.route';
import productoRoutes from './routes/producto.route';
import proveedorRoutes from './routes/proveedor.route';
import cors  from 'cors';


const PORT = +process.env.PORT! || 2800;
const servidor = new Server(PORT);

// Decorador
const serverExt = new ServerExttend(servidor);

//Body parser
serverExt.setConfig(bodyParser.urlencoded({extended:true}));
serverExt.setConfig(bodyParser.json());

//Cors 
serverExt.setConfig(cors());

//rutas del app
serverExt.setRouter('/categoria', categoriaRoutes);
serverExt.setRouter('/pedido', pedidoRoutes);
serverExt.setRouter('/producto', productoRoutes);
serverExt.setRouter('/proveedor', proveedorRoutes);

//conectar db
mongoose.connect(
	'mongodb+srv://admin:12345@cluster0.bcg8b.mongodb.net/proyecto?retryWrites=true&w=majority',
	{useNewUrlParser: true, useUnifiedTopology: true}  as ConnectOptions, (err) =>{
			if (err) throw err;
			console.log('Base de datos en linea');
	}
);
//levantar express
serverExt.start(()=> {
    console.log(`Servidor de la base de datos corriendo en el puerto ${servidor.port}`);
});
