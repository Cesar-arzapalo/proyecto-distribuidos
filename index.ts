import { Server } from './server/server';


import mongoose, {ConnectOptions} from 'mongoose';
import bodyParser from 'body-parser';
import categoriaRoutes from './routes/categoria.route';
import pedidoRoutes from './routes/pedido.route';
import productoRoutes from './routes/producto.route';
import proveedorRoutes from './routes/proveedor.route';
import cors  from 'cors';


const PORT = +process.env.PORT! || 2800;
const servidor = new Server(PORT);
//Body parser
servidor.app.use(bodyParser.urlencoded({extended:true}));
servidor.app.use(bodyParser.json());

const conexion = Singleton.getInstance()
//Cors 

servidor.app.use(cors());

//rutas del app
servidor.app.use('/categoria', categoriaRoutes);
servidor.app.use('/pedido', pedidoRoutes);
servidor.app.use('/producto', productoRoutes);
servidor.app.use('/proveedor', proveedorRoutes);

//conectar db
mongoose.connect(conexion.getConexion(),
                {useNewUrlParser: true, useUnifiedTopology: true}  as ConnectOptions, (err) =>{
                    if (err) throw err;
                    console.log('Base de datos en linea');
                });
//levantar express
servidor.start(()=> {
    console.log(`Servidor de la base de datos corriendo en el puerto ${servidor.port}`);
});
