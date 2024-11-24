import { Router } from 'express' // Importa o Router do Express
import clientesRoutes from './routes' // Importa as rotas de usuário

const router = Router() // Cria uma instância do Router

router.use('/clientes', clientesRoutes) // Define o prefixo para as rotas de usuário

export default router // Exporta o router