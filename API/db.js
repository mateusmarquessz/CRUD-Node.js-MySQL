import mysql from 'mysql'

//criando o banco de Dados
export const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "1234",
    database: "crud-node,react & mysql"
});