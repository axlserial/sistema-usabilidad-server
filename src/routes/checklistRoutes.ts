import { Router } from 'express';
import { checklistContorller } from '../controllers/checklistController';
class ChecklistRoutes {
	public router: Router = Router();
	constructor() {
		this.config();
	}
	config(): void {
		this.router.get('/', checklistContorller.list);
		this.router.get('/:idChecklis', checklistContorller.listOne);
		this.router.post('/create', checklistContorller.create);
		this.router.put('/actualizar/:idChecklis', checklistContorller.actualizar);
		this.router.delete('/eliminar/:idChecklis', checklistContorller.eliminar);
	}
}
const checklistRoutes = new ChecklistRoutes();
export default checklistRoutes.router;