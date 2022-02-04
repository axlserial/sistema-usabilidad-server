import {Request,Response} from 'express';
import pool from '../database';
class   ProyectosController
{
    public async list(req: Request, res: Response ): Promise<void>
    {
        const respuesta = await pool.query('SELECT * FROM proyectos order by idProyecto');
        console.log(respuesta);
        res.json( respuesta );
    }
    public async listOne(req: Request, res: Response): Promise <void>{
        const {idProyecto} = req.params;
        let consulta='SELECT * FROM proyectos WHERE idProyecto = '+idProyecto;
        const respuesta = await pool.query(consulta);
        if(respuesta.length>0){
        res.json(respuesta[0]);
        return ;
        }
        res.status(404).json({'mensaje': 'Proyecto no encontrado'});
    }
    public async create(req: Request, res: Response): Promise<void> {
        const resp = await pool.query("INSERT INTO proyectos set ?",
        [req.body]);
        res.json(resp);
    }
    public async actualizar(req: Request, res: Response): Promise<void> {
        const { idProyecto } = req.params;
        const resp = await pool.query("UPDATE proyectos set ? WHERE idProyecto = ?", [req.body, idProyecto]);
        res.json(resp);
    }
    public async eliminar(req: Request, res: Response): Promise<void> {
        const { idProyecto } = req.params;
        const resp = await pool.query(`DELETE FROM proyectos WHERE idProyectos= ${idProyecto}`);
        res.json(resp);
    }      
}
export const proyectoController = new ProyectosController();