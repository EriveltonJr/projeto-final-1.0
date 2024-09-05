const express = require('express');
const prisma = require('@prisma/client');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3001;

app.use(express.json());


const users = [
  { name: 'Rafa', age: 29 },
];


const prismaClient = new prisma.PrismaClient();

app.get('/usuarios', async (req, res) => {
  try {
    const users = await prismaClient.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
});

app.post('/usuarios', async (req, res) => {
  try {
    const { name, age } = req.body;
    const newUser = await prismaClient.user.create({
      data: { name, age },
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
