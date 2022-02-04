import { Router } from 'express';
import { usuariosController } from '../controllers/usuariosController';
class UsuarioRoutes {
	public router: Router = Router();
	constructor() {
		this.config();
	}
	config(): void {
		this.router.get('/', usuariosController.list);
		this.router.get('/:idUsuario', usuariosController.listOne);
		this.router.post('/create', usuariosController.create);
		this.router.put('/actualizar/:idUsuario', usuariosController.actualizar);
		this.router.delete('/eliminar/:idUsuario', usuariosController.eliminar);
	}
}
const usuarioRoutes = new UsuarioRoutes();
export default usuarioRoutes.router;