import {Request,Response} from 'express';
import pool from '../database';
class   ClientesController
{
    public async list(req: Request, res: Response ): Promise<void>
    {
        const respuesta = await pool.query('SELECT * FROM clientes order by idCliente');
        console.log(respuesta);
        res.json( respuesta );
    }
    public async listOne(req: Request, res: Response): Promise <void>{
        const {idCliente} = req.params;
        let consulta='SELECT * FROM clientes WHERE idCliente = '+idCliente;
        const respuesta = await pool.query(consulta);
        if(respuesta.length>0){
        res.json(respuesta[0]);
        return ;
        }
        res.status(404).json({'mensaje': 'Cliente no encontrado'});
    }
    public async create(req: Request, res: Response): Promise<void> {
        const resp = await pool.query("INSERT INTO clientes set ?",
        [req.body]);
        res.json(resp);
    }
    public async actualizar(req: Request, res: Response): Promise<void> {
        const { idCliente } = req.params;
        const resp = await pool.query("UPDATE clientes set ? WHERE idCliente = ?", [req.body, idCliente]);
        res.json(resp);
    }
    public async eliminar(req: Request, res: Response): Promise<void> {
        const { idCliente } = req.params;
        const resp = await pool.query(`DELETE FROM clientes WHERE idClientes= ${idCliente}`);
        res.json(resp);
    }      
}
export const clientesController = new ClientesController();