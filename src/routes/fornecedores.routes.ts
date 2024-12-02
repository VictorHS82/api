import { Router } from 'express';
import { createFornecedores, findAllFornecedores, updateFornecedores, deleteFornecedores } from '../Controller/fornecedores.controller'; // Importa os métodos do controlador

const router = Router() // Cria uma instância do Router

router.post('/', createFornecedores as any ) // Define a rota para criar um usuário
router.get('/', findAllFornecedores as any) // Define a rota para buscar todos os usuários
router.patch('/:id', updateFornecedores as any) // Define a rota para atualizar um usuário
router.delete('/:id', deleteFornecedores as any) // Define a rota para deletar um usuário

export default router // Exporta o router