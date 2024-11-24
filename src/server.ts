import express from 'express' // Importa o Express
import routes from './routes'


const app = express() // Cria uma instância do Express
const PORT = 3000 // Define a porta do servidor
app.use(express.json()); // Permite trabalhar com JSON no corpo das requisições

app.use('/api', routes)


app.listen(PORT, () => {
  console.log(`Server rodando em http://localhost:${PORT}`) // Inicia o servidor
})