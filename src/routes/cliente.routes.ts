import { Router } from 'express';
import { createCliente, findAllCliente, updateCliente, deleteCliente } from '../Controller/cliente.controller'; // Importa os métodos do controlador

const router = Router() // Cria uma instância do Router

router.post('/', createCliente as any ) // Define a rota para criar um cliente
router.get('/', findAllCliente as any ) // Define a rota para buscar todos os usuários
router.patch('/:id', updateCliente as any) // Define a rota para atualizar um usuário
router.delete('/:id', deleteCliente as any) // Define a rota para deletar um usuário

export default router // Exporta o router




