import { Router } from 'express';
import { createPeca, findAllPeca, updatePeca, deletePeca } from '../Controller/peca.controller'; // Importa os métodos do controlador

const router = Router() // Cria uma instância do Router

router.post('/', createPeca as any ) // Define a rota para criar um usuário
router.get('/', findAllPeca as any ) // Define a rota para buscar todos os usuários
router.patch('/:id', updatePeca as any) // Define a rota para atualizar um usuário
router.delete('/:id', deletePeca as any) // Define a rota para deletar um usuário

export default router // Exporta o router
