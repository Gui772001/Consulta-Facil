import express from 'express';
import cors from 'cors';
import connection from './db.js';


const app = express()
app.use(cors());
app.use(express.json())

app.post('/contato',(req,res)=> {
    const {name,email,mensagem } = req.body
    const query = 'INSERT INTO Pessoa (name, email, mensagem) VALUES (?, ?, ?)';
    connection.query(query, [name, email, mensagem ], (err) => {
        if (err) {
          return res.status(500).json({ error: 'Erro ao inserir no banco' });
        }
      });
      res.status(201).json({ message: 'Contato salvo com sucesso!' });
    });
    
    app.listen(3001, () => console.log('Servidor rodando na porta 3001'));
