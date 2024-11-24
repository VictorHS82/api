import { Router } from 'express';
import { createCliente, findAllCliente } from '../Controller/cliente.controller'; // Importa os métodos do controlador

const router = Router() // Cria uma instância do Router

router.post('/', createCliente ) // Define a rota para criar um usuário
router.get('/', findAllCliente ) // Define a rota para buscar todos os usuários



export default router // Exporta o router




