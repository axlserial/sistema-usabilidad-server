"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clientesController_1 = require("../controllers/clientesController");
class ClientesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', clientesController_1.clientesController.list);
        this.router.get('/:idCliente', clientesController_1.clientesController.listOne);
        this.router.post('/create', clientesController_1.clientesController.create);
        this.router.put('/actualizar/:idCliente', clientesController_1.clientesController.actualizar);
        this.router.delete('/eliminar/:idCliente', clientesController_1.clientesController.eliminar);
    }
}
const clientesRoutes = new ClientesRoutes();
exports.default = clientesRoutes.router;
