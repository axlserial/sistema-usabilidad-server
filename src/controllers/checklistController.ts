import {Request,Response} from 'express';
import pool from '../database';
class   ChecklistController
{
    public async list(req: Request, res: Response ): Promise<void>
    {
        const respuesta = await pool.query('SELECT * FROM checklist order by idChecklist');
        console.log(respuesta);
        res.json( respuesta );
    }
    public async listOne(req: Request, res: Response): Promise <void>{
        const {idChecklist} = req.params;
        let consulta='SELECT * FROM checklist WHERE idChecklist = '+idChecklist;
        const respuesta = await pool.query(consulta);
        if(respuesta.length>0){
        res.json(respuesta[0]);
        return ;
        }
        res.status(404).json({'mensaje': 'Checklist no encontrado'});
    }
    public async create(req: Request, res: Response): Promise<void> {
        const resp = await pool.query("INSERT INTO checklist set ?",
        [req.body]);
        res.json(resp);
    }
    public async actualizar(req: Request, res: Response): Promise<void> {
        const { idChecklist } = req.params;
        const resp = await pool.query("UPDATE checklist set ? WHERE idChecklist = ?", [req.body, idChecklist]);
        res.json(resp);
    }
    public async eliminar(req: Request, res: Response): Promise<void> {
        const { idChecklist } = req.params;
        const resp = await pool.query(`DELETE FROM checklist WHERE idChecklist= ${idChecklist}`);
        res.json(resp);
    }      
}
export const checklistContorller = new ChecklistController();