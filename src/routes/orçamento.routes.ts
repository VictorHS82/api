import { Router } from 'express';
import { createOrçamento, findAllOrçamento, updateOrçamento, deleteOrçamento } from '../Controller/orçamento.controller'; // Importa os métodos do controlador

const router = Router() // Cria uma instância do Router

router.post('/', createOrçamento ) // Define a rota para criar um usuário
router.get('/', findAllOrçamento ) // Define a rota para buscar todos os usuários
router.patch('/:id', updateOrçamento) // Define a rota para atualizar um usuário
router.delete('/:id', deleteOrçamento) // Define a rota para deletar um usuário

export default router // Exporta o router