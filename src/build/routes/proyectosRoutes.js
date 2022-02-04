"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const proyectosController_1 = require("../controllers/proyectosController");
class ProyectosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', proyectosController_1.proyectoController.list);
        this.router.get('/:idProyecto', proyectosController_1.proyectoController.listOne);
        this.router.post('/create', proyectosController_1.proyectoController.create);
        this.router.put('/actualizar/:idProyecto', proyectosController_1.proyectoController.actualizar);
        this.router.delete('/eliminar/:idProyecto', proyectosController_1.proyectoController.eliminar);
    }
}
const proyectosRoutes = new ProyectosRoutes();
exports.default = proyectosRoutes.router;
