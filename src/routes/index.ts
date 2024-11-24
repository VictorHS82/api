import { Router } from 'express' // Importa o Router do Express
import clienteRouter from './cliente.routes' // Importa as rotas de usuário

const router = Router() // Cria uma instância do Router

router.use('/clientes', clienteRouter) // Define o prefixo para as rotas de usuário

export default router // Exporta o router