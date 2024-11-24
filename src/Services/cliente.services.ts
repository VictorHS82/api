import { createCliente, findAllCliente, findClienteByEmail } from '../Repositories/cliente.repositories' 

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


export const createClienteService = async (data: ClienteData) => {
  const clientes = await findClienteByEmail(data.email) 

  if (clientes) {
    throw new Error('Cliente já cadastrado') 
  }

  return createCliente(data) 
}

export const findAllClienteService = async () => {
  return findAllCliente() 
}


































