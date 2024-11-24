import Clientes from '../entities/clientes.entities' 

interface ClienteData {
  nome: string;
  telefone: string;
  email: string;
  cidade: string;
  cep: string;
  rua: string;
  num_casa: string;
  complementos: string;
}

export const createCliente = async (data: ClienteData) => {
  return Clientes.create({ data }) 
}

export const findAllCliente = async () => {
  return Clientes.findMany() 
}

export const findClienteByEmail = async (email: string) => {
  return Clientes.findFirst({ where: { email } }) 
}

