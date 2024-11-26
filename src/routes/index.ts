import { Router } from 'express' // Importa o Router do Express
import clienteRouter from './cliente.routes' // Importa as rotas de usuário
import pecaRouter from './peca.routes'
import fornecedoresRouter from './fornecedores.routes'
import visitaRouter from './visita.routes'
import orçamentoRouter from './orçamento.routes'
const router = Router() // Cria uma instância do Router

router.use('/clientes', clienteRouter) // Define o prefixo para as rotas de usuário
router.use('/peca', pecaRouter)
router.use('/fornecedor', fornecedoresRouter)
router.use('/visita', visitaRouter)
router.use('/orçamento', orçamentoRouter)

export default router // Exporta o router