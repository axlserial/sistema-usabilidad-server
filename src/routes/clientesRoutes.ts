import { Router } from 'express';
import { clientesController } from '../controllers/clientesController';
class ClientesRoutes {
	public router: Router = Router();
	constructor() {
		this.config();
	}
	config(): void {
		this.router.get('/', clientesController.list);
		this.router.get('/:idCliente', clientesController.listOne);
		this.router.post('/create', clientesController.create);
		this.router.put('/actualizar/:idCliente', clientesController.actualizar);
		this.router.delete('/eliminar/:idCliente', clientesController.eliminar);
	}
}
const clientesRoutes = new ClientesRoutes();
export default clientesRoutes.router;