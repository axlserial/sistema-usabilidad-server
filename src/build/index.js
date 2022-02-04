"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const checklistRoutes_1 = __importDefault(require("./routes/checklistRoutes"));
const clientesRoutes_1 = __importDefault(require("./routes/clientesRoutes"));
const elementosCLRoutes_1 = __importDefault(require("./routes/elementosCLRoutes"));
const proyectosRoutes_1 = __importDefault(require("./routes/proyectosRoutes"));
const usuariosRoutes_1 = __importDefault(require("./routes/usuariosRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3300);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/api/checklist', checklistRoutes_1.default);
        this.app.use('/api/clientes', clientesRoutes_1.default);
        this.app.use('/api/elementosCL', elementosCLRoutes_1.default);
        this.app.use('/api/proyectos', proyectosRoutes_1.default);
        this.app.use('/api/usuarios', usuariosRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
