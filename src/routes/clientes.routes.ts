import { Router } from 'express';
import { createClientes, findAllClientes } from '../controller/cliente.controller'; // Importa os métodos do controlador
//import { validate } from '../Middleware/validate.middleware' // Importa o middleware de validação
//import { CreateClientesDto } from '../DTOS/dtos' // Importa o DTO de usuário

const router = Router() // Cria uma instância do Router

router.post('/',createClientes) // Define a rota para criar um usuário
router.get('/', findAllClientes) // Define a rota para buscar todos os usuários





//router.post('/', validate(CreateClientesDto), createClientes) // Define a rota para criar um usuário
//router.patch('/:id', validate(CreateUserDto), updateUser) // Define a rota para atualizar um usuário
