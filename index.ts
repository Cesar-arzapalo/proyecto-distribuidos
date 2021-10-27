import { Server } from './server/server';


import mongoose, {ConnectOptions} from 'mongoose';
import bodyParser from 'body-parser';
import categoriaRoutes from './routes/categoria.route';
import pedidoRoutes from './routes/pedido.route';
import productoRoutes from './routes/producto.route';
import proveedorRoutes from './routes/proveedor.route';



const servidor = new Server(2800);
//Body parser
servidor.app.use(bodyParser.urlencoded({extended:true}));
servidor.app.use(bodyParser.json());

//rutas del app
servidor.app.use('/categoria', categoriaRoutes);
servidor.app.use('/pedido', pedidoRoutes);
servidor.app.use('/producto', productoRoutes);
servidor.app.use('/proveedor', proveedorRoutes);

//conectar db
mongoose.connect('mongodb+srv://admin:12345@cluster0.bcg8b.mongodb.net/proyecto?retryWrites=true&w=majority',
                {useNewUrlParser: true, useUnifiedTopology: true}  as ConnectOptions, (err) =>{
                    if (err) throw err;
                    console.log('Base de datos en linea');
                });
//levantar express
servidor.start(()=> {
    console.log(`Servidor de la base de datos corriendo en el puerto ${servidor.port}`);
});
