import { Router } from 'express';
import { elementoCLController } from '../controllers/elementoCLController';

class ElementoCLRoutes {
	public router: Router = Router();
	constructor() {
		this.config();
	}
	config(): void {
		this.router.get('/', elementoCLController.list);
		this.router.get('/:idElementoCL', elementoCLController.listOne);
		this.router.post('/create', elementoCLController.create);
		this.router.put('/actualizar/:idElementoCL', elementoCLController.actualizar);
		this.router.delete('/eliminar/:idElementoCL', elementoCLController.eliminar);
	}
}
const elementoCLRoutes = new ElementoCLRoutes();
export default elementoCLRoutes.router;