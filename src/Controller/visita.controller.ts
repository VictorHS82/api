import { Request, Response } from 'express' // Importa os tipos do Express
import { createVisitaService, findAllVisitaService, updateVisitaService, deleteVisitaService } from '../Services/visita.services' // Importa os métodos do serviço

export const createVisita = async (req: Request, res: Response) => {
  try {
    const Visita = await createVisitaService(req.body) // Cria um novo usuário
    return res.status(201).json(Visita) // Retorna o usuário criado
  } catch (error) {
    return res.status(400).json({ message: error }) // Retorna um erro
  }
}

export const findAllVisita = async (req: Request, res: Response) => {
  const Visita = await findAllVisitaService() // Busca todos os usuários
  return res.status(200).json(Visita) // Retorna os usuários
}


export const updateVisita = async (req: Request, res: Response) => {
  try {
    const Visita = await updateVisitaService(Number(req.params.id), req.body) // Atualiza um usuário
    return res.status(200).json(Visita) // Retorna o usuário atualizado
  } catch (error) {
    return res.status(400).json({ message: error }) // Retorna um erro
  }
}

export const deleteVisita = async (req: Request, res: Response) => {
  try {
    await deleteVisitaService(Number(req.params.id)) // Deleta um usuário
    return res.status(204).send() // Retorna uma resposta vazia
  } catch (error) {
    return res.status(400).json({ message: error }) // Retorna um erro
  }
}