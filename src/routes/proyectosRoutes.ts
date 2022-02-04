import { Router } from 'express';
import { proyectoController } from '../controllers/proyectosController';
class ProyectosRoutes {
	public router: Router = Router();
	constructor() {
		this.config();
	}
	config(): void {
		this.router.get('/', proyectoController.list);
		this.router.get('/:idProyecto', proyectoController.listOne);
		this.router.post('/create', proyectoController.create);
		this.router.put('/actualizar/:idProyecto', proyectoController.actualizar);
		this.router.delete('/eliminar/:idProyecto', proyectoController.eliminar);
	}
}
const proyectosRoutes = new ProyectosRoutes();
export default proyectosRoutes.router;