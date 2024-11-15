import { PrismaClient } from '@prisma/client' // Importa o PrismaClient

const prisma = new PrismaClient() // Cria uma instância do PrismaClient

export default prisma.dados_cliente // Exporta o modelo de dados_cliente

export default prisma.peças

export default prisma.orçamento

export default prisma.dados_cliente