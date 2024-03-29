import { db } from "../db.js";


export const getUsers = (_, res) =>{
    //q de query que faz o select de todos os usuarios
    const q = "SELECT * FROM usuarios";

    //Verificao de erro com a json
    db.query(q,(err, data) =>{
        if(err) return res.json(err);

        return res.status(200).json(data);
    });
}