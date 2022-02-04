import {Request,Response} from 'express';
import pool from '../database';
class   UsuariosController
{
    public async list(req: Request, res: Response ): Promise<void>
    {
        const respuesta = await pool.query('SELECT * FROM usuarios order by idUsuario');
        console.log(respuesta);
        res.json( respuesta );
    }
    public async listOne(req: Request, res: Response): Promise <void>{
        const {idUsuario} = req.params;
        let consulta='SELECT * FROM usuarios WHERE idUsuario = '+idUsuario;
        const respuesta = await pool.query(consulta);
        if(respuesta.length>0){
        res.json(respuesta[0]);
        return ;
        }
        res.status(404).json({'mensaje': 'Usuario no encontrado'});
    }
    public async create(req: Request, res: Response): Promise<void> {
        const resp = await pool.query("INSERT INTO usuario set ?",
        [req.body]);
        res.json(resp);
    }
    public async actualizar(req: Request, res: Response): Promise<void> {
        const { idUsuario } = req.params;
        const resp = await pool.query("UPDATE usuarios set ? WHERE idUsuario = ?", [req.body, idUsuario]);
        res.json(resp);
    }
    public async eliminar(req: Request, res: Response): Promise<void> {
        const { idUsuario } = req.params;
        const resp = await pool.query(`DELETE FROM usuarios WHERE idUsuario= ${idUsuario}`);
        res.json(resp);
    }      
}
export const usuariosController = new UsuariosController();