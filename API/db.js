import mysql from 'mysql'

//criando o banco de Dados
export const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "dfmateus555",
    database: "crud-node,react & mysql"
});