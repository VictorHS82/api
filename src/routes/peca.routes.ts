import { Router } from 'express';
import { createPeca, findAllPeca, updatePeca, deletePeca } from '../Controller/peca.controller'; // Importa os métodos do controlador

const router = Router() // Cria uma instância do Router

router.post('/', createPeca ) // Define a rota para criar um usuário
router.get('/', findAllPeca ) // Define a rota para buscar todos os usuários
router.patch('/:id', updatePeca) // Define a rota para atualizar um usuário
router.delete('/:id', deletePeca) // Define a rota para deletar um usuário

export default router // Exporta o router
