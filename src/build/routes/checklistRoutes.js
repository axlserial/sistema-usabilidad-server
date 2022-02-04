"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const checklistController_1 = require("../controllers/checklistController");
class ChecklistRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', checklistController_1.checklistContorller.list);
        this.router.get('/:idChecklis', checklistController_1.checklistContorller.listOne);
        this.router.post('/create', checklistController_1.checklistContorller.create);
        this.router.put('/actualizar/:idChecklis', checklistController_1.checklistContorller.actualizar);
        this.router.delete('/eliminar/:idChecklis', checklistController_1.checklistContorller.eliminar);
    }
}
const checklistRoutes = new ChecklistRoutes();
exports.default = checklistRoutes.router;
