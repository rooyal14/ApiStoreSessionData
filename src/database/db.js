require("dotenv").config();
const mysql = require('mysql2/promise');
 
const client = mysql.createPool(process.env.CONNECTION_STRING);



async function getAllSessions() {
    const res = await client.query('SELECT * FROM Sessions');
    return res[0];
}

async function insertSession(sessionObj) {
    const query = `INSERT INTO Sessions (sessionID, dadosPesquisaPoliticos, dadosPesquisaLeis) 
    VALUES (${sessionObj.sessionID}, '${JSON.stringify(sessionObj.dadosPesquisaPoliticos)}', '${JSON.stringify(sessionObj.dadosPesquisaLeis)}');`;
    const res = await client.query(query);
    return res[0];
}



 
module.exports = { getAllSessions, insertSession }