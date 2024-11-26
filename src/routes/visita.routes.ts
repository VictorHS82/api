import { Router } from 'express';
import { createVisita, findAllVisita, updateVisita, deleteVisita } from '../Controller/visita.controller'; // Importa os métodos do controlador

const router = Router() // Cria uma instância do Router

router.post('/', createVisita ) // Define a rota para criar um usuário
router.get('/', findAllVisita ) // Define a rota para buscar todos os usuários
router.patch('/:id', updateVisita) // Define a rota para atualizar um usuário
router.delete('/:id', deleteVisita) // Define a rota para deletar um usuário

export default router // Exporta o router
