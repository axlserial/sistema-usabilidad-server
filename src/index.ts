import morgan from 'morgan';
import cors from 'cors';
import express, { Application } from 'express';
import checklistRoutes from './routes/checklistRoutes';
import clientesRoutes from './routes/clientesRoutes';
import elementosCLRoutes from './routes/elementosCLRoutes';
import proyectosRoutes from './routes/proyectosRoutes';
import usuariosRoutes from './routes/usuariosRoutes';
class Server {
    public app: Application;
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }
    config(): void {
        this.app.set('port', process.env.PORT || 3300);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }
    routes(): void {
        this.app.use('/api/checklist', checklistRoutes);
        this.app.use('/api/clientes',clientesRoutes);
        this.app.use('/api/elementosCL',elementosCLRoutes);
        this.app.use('/api/proyectos',proyectosRoutes);
        this.app.use('/api/usuarios',usuariosRoutes);
    }
    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();