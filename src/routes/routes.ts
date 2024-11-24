import { Router } from 'express';
import { createClientes, findAllClientes } from '../controller/cliente.controller'; // Importa os métodos do controlador

const router = Router() // Cria uma instância do Router

router.post('/', createClientes as any) // Define a rota para criar um usuário
router.get('/', findAllClientes as any) // Define a rota para buscar todos os usuários




export default router // Exporta o router