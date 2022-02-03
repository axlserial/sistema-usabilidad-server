"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuariosController_1 = require("../controllers/usuariosController");
class UsuarioRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', usuariosController_1.usuariosController.list);
        this.router.get('/:idUsuario', usuariosController_1.usuariosController.listOne);
        this.router.post('/create', usuariosController_1.usuariosController.create);
        this.router.put('/actualizar/:idUsuario', usuariosController_1.usuariosController.actualizar);
        this.router.delete('/eliminar/:idUsuario', usuariosController_1.usuariosController.eliminar);
    }
}
const usuarioRoutes = new UsuarioRoutes();
exports.default = usuarioRoutes.router;
