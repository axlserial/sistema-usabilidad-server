import {Request,Response} from 'express';
import pool from '../database';
class   ElementoCLController
{
    public async list(req: Request, res: Response ): Promise<void>
    {
        const respuesta = await pool.query('SELECT * FROM elementoCL order by idElementoCL');
        console.log(respuesta);
        res.json( respuesta );
    }
    public async listOne(req: Request, res: Response): Promise <void>{
        const {idElementoCL} = req.params;
        let consulta='SELECT * FROM elementoCL WHERE idElementoCL = '+idElementoCL;
        const respuesta = await pool.query(consulta);
        if(respuesta.length>0){
        res.json(respuesta[0]);
        return ;
        }
        res.status(404).json({'mensaje': 'Elementos de Checklist no encontrados'});
    }
    public async create(req: Request, res: Response): Promise<void> {
        const resp = await pool.query("INSERT INTO elementoCL set ?",
        [req.body]);
        res.json(resp);
    }
    public async actualizar(req: Request, res: Response): Promise<void> {
        const { idElementoCL } = req.params;
        const resp = await pool.query("UPDATE elementoCL set ? WHERE idElementoCL = ?", [req.body, idElementoCL]);
        res.json(resp);
    }
    public async eliminar(req: Request, res: Response): Promise<void> {
        const { idElementoCL } = req.params;
        const resp = await pool.query(`DELETE FROM elementoCL WHERE idElementoCL= ${idElementoCL}`);
        res.json(resp);
    }      
}
export const elementoCLController = new ElementoCLController();