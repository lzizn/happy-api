import express from 'express';
import path from 'path';
import cors from 'cors';

import 'express-async-errors';

import './database/connection';

import routes from './routes'
import errorHandler from './errors/handler'

const app = express();


app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);


//ROTA para listar usuários (conjunto de usuarios)
//Recurso = usuário
// Métodos HTTP = GET, POST, PUT e DELETE

// GET = Buscar uma informaçao (lista, item)
// POST = Criando uma informaçao, um recurso (nesse caso, se fosse post, seria criar um novo usuário)
// PUT = Editando uma informaçao (se fosse put, seria editar um usuário)
// DELETE = deletando uma informaçao

// Parametros 
// Query Params: http://localhost:3333/users?search=diego
// Route Params: http://localhost:3333/users/1 (Identificar um recurso) < usuario de ID 1

// Body (Corpo da requisiçao) : http://localhost:3333/users

app.listen(3333);

// REQ -> RES
// localhost:3333;