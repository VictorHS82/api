import Clientes from '../entities/clientes.entities' 


export const createCliente = async (data: { nome: string, telefone: string, email: string, cidade:string, cep: string, rua: string, num_casa: string, complementos: string }) => {
  return Clientes.create({ data }) 
}

export const findAllCliente = async () => {
  return Clientes.findMany() 
}

export const findClienteByEmail = async (email: string) => {
  return Clientes.findFirst({ where: { email } }) 
}

export const updateCliente = async (id: number, data: { nome: string, telefone: string, email: string, cidade:string, cep: string, rua: string, num_casa: string, complementos: string }) => {
  return Clientes.update({ where: { id }, data }) // Atualiza um usuário
}

export const deleteCliente = async (id: number) => {
  return Clientes.delete({ where: { id } }) // Deleta um usuário
}

export const findClienteById = async (id: number) => {
  return Clientes.findFirst({ where: { id } }) // Busca um usuário pelo id
}
