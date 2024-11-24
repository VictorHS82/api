import { Request, Response } from 'express' // Importa os tipos do Express
import { createClienteService, findAllClienteService } from '../Services/cliente.services' // Importa os métodos do serviço

export const createCliente = async (req: Request, res: Response) => {
  try {
    const cliente = await createClienteService(req.body) // Cria um novo usuário
    return res.status(201).json(cliente) // Retorna o usuário criado
  } catch (error) {
    return res.status(400).json({ message: error }) // Retorna um erro
  }
}

export const findAllCliente = async (req: Request, res: Response) => {
  const cliente = await findAllClienteService() // Busca todos os usuários
  return res.status(200).json(cliente) // Retorna os usuários
}



