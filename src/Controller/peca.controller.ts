import { Request, Response } from 'express' // Importa os tipos do Express
import { createPecaService, findAllPecaService, updatePecaService, deletePecaService } from '../Services/peca.services' // Importa os métodos do serviço

export const createPeca = async (req: Request, res: Response) => {
  try {
    const peca = await createPecaService(req.body) // Cria um novo usuário
    return res.status(201).json(peca) // Retorna o usuário criado
  } catch (error) {
    return res.status(400).json({ message: error }) // Retorna um erro
  }
}

export const findAllPeca = async (req: Request, res: Response) => {
  const peca = await findAllPecaService() // Busca todos os usuários
  return res.status(200).json(peca) // Retorna os usuários
}


export const updatePeca = async (req: Request, res: Response) => {
  try {
    const peca = await updatePecaService(Number(req.params.id), req.body) // Atualiza um usuário
    return res.status(200).json(peca) // Retorna o usuário atualizado
  } catch (error) {
    return res.status(400).json({ message: error }) // Retorna um erro
  }
}

export const deletePeca = async (req: Request, res: Response) => {
  try {
    await deletePecaService(Number(req.params.id)) // Deleta um usuário
    return res.status(204).send() // Retorna uma resposta vazia
  } catch (error) {
    return res.status(400).json({ message: error }) // Retorna um erro
  }
}