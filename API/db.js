import mysql from 'mysql'

//criando o banco de Dados
export const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "xxx",
    database: "crud-node,react & mysql"
});