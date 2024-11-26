import { Request, Response } from 'express' // Importa os tipos do Express
import { createFornecedoresService, findAllFornecedoresService, updateFornecedoresService, deleteFornecedoresService } from '../Services/fornecedores.services' // Importa os métodos do serviço

export const createFornecedores = async (req: Request, res: Response) => {
  try {
    const Fornecedores = await createFornecedoresService(req.body) // Cria um novo usuário
    return res.status(201).json(Fornecedores) // Retorna o usuário criado
  } catch (error) {
    return res.status(400).json({ message: error }) // Retorna um erro
  }
}

export const findAllFornecedores = async (req: Request, res: Response) => {
  const Fornecedores = await findAllFornecedoresService() // Busca todos os usuários
  return res.status(200).json(Fornecedores) // Retorna os usuários
}


export const updateFornecedores = async (req: Request, res: Response) => {
  try {
    const fornecedores = await updateFornecedoresService(Number(req.params.id), req.body) // Atualiza um usuário
    return res.status(200).json(fornecedores) // Retorna o usuário atualizado
  } catch (error) {
    return res.status(400).json({ message: error }) // Retorna um erro
  }
}

export const deleteFornecedores = async (req: Request, res: Response) => {
  try {
    await deleteFornecedoresService(Number(req.params.id)) // Deleta um usuário
    return res.status(204).send() // Retorna uma resposta vazia
  } catch (error) {
    return res.status(400).json({ message: error }) // Retorna um erro
  }
}