"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const elementoCLController_1 = require("../controllers/elementoCLController");
class ElementoCLRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', elementoCLController_1.elementoCLController.list);
        this.router.get('/:idElementoCL', elementoCLController_1.elementoCLController.listOne);
        this.router.post('/create', elementoCLController_1.elementoCLController.create);
        this.router.put('/actualizar/:idElementoCL', elementoCLController_1.elementoCLController.actualizar);
        this.router.delete('/eliminar/:idElementoCL', elementoCLController_1.elementoCLController.eliminar);
    }
}
const elementoCLRoutes = new ElementoCLRoutes();
exports.default = elementoCLRoutes.router;
