import { Request, Response } from 'express' // Importa os tipos do Express
import { createOrçamentoService, findAllOrçamentoService, updateOrçamentoService, deleteOrçamentoService } from '../Services/orçamento.services' // Importa os métodos do serviço

export const createOrçamento = async (req: Request, res: Response) => {
  try {
    const Orçamento = await createOrçamentoService(req.body) // Cria um novo usuário
    return res.status(201).json(Orçamento) // Retorna o usuário criado
  } catch (error) {
    return res.status(400).json({ message: error }) // Retorna um erro
  }
}

export const findAllOrçamento = async (req: Request, res: Response) => {
  const Orçamento = await findAllOrçamentoService() // Busca todos os usuários
  return res.status(200).json(Orçamento) // Retorna os usuários
}


export const updateOrçamento = async (req: Request, res: Response) => {
  try {
    const Orçamento = await updateOrçamentoService(Number(req.params.id), req.body) // Atualiza um usuário
    return res.status(200).json(Orçamento) // Retorna o usuário atualizado
  } catch (error) {
    return res.status(400).json({ message: error }) // Retorna um erro
  }
}

export const deleteOrçamento = async (req: Request, res: Response) => {
  try {
    await deleteOrçamentoService(Number(req.params.id)) // Deleta um usuário
    return res.status(204).send() // Retorna uma resposta vazia
  } catch (error) {
    return res.status(400).json({ message: error }) // Retorna um erro
  }
}