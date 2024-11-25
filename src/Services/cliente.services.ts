import { createCliente, findAllCliente, findClienteByEmail, updateCliente, findClienteById, deleteCliente } from '../Repositories/cliente.repositories' 


export const createClienteService = async (data: {nome: string, telefone: string, email: string, cidade:string, cep: string, rua: string, num_casa: string, complementos: string}) => {
  const cliente = await findClienteByEmail(data.email) 

  if (cliente) {
    throw new Error('Cliente já cadastrado') 
  }

  return createCliente(data) 
}

export const findAllClienteService = async () => {
  return findAllCliente() 
}

export const updateClienteService = async (id: number, data: { nome: string, telefone: string, email: string, cidade:string, cep: string, rua: string, num_casa: string, complementos: string }) => {
  const cliente = await findClienteById(id) // Busca um usuário pelo id

  if (!cliente) {
    throw new Error('Cliente não encontrado') // Se o usuário não existir, lança um erro
  }

  return updateCliente(id, data) // Atualiza um usuário
}

export const deleteClienteService = async (id: number) => {
  const cliente = await findClienteById(id) // Busca um usuário pelo id

  if (!cliente) {
    throw new Error('Cliente não encontrado') // Se o usuário não existir, lança um erro
  }

  return deleteCliente(id) // Deleta um usuário
}
































