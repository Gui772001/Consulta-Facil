import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
  host: '127.0.0.1',
  port: 3310,
  user: 'Consulta-Facil',
  password: '123456789',
  database: 'Contato'
});

export default connection;