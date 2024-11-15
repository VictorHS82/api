import express from 'express' // Importa o Express

const app = express() // Cria uma instância do Express
const PORT = 3000 // Define a porta do servidor

app.get('/', (req, res) => {
  res.send('Hello World!') // Retorna uma mensagem
})

app.listen(PORT, () => {
  console.log(`Server rodando em http://localhost:${PORT}`) // Inicia o servidor
})