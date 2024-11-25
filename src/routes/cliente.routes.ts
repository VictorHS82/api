import { Router } from 'express';
import { createCliente, findAllCliente, updateCliente, deleteCliente } from '../Controller/cliente.controller'; // Importa os métodos do controlador

const router = Router() // Cria uma instância do Router

router.post('/', createCliente ) // Define a rota para criar um usuário
router.get('/', findAllCliente ) // Define a rota para buscar todos os usuários
router.patch('/:id', updateCliente) // Define a rota para atualizar um usuário
router.delete('/:id', deleteCliente) // Define a rota para deletar um usuário

export default router // Exporta o router




