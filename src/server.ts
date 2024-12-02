import express from 'express' // Importa o Express
import routes from './routes'
import swaggerUi from 'swagger-ui-express'; // Importa o Swagger UI
import swaggerFile from './swaggerConfig';  // Importa a configuração do Swagger

const app = express() // Cria uma instância do Express
const PORT = 3000 // Define a porta do servidor
app.use(express.json()); // Permite trabalhar com JSON no corpo das requisições

app.use('/api', routes)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));


app.listen(PORT, () => {
  console.log(`Server rodando em http://localhost:${PORT}`) // Inicia o servidor
})