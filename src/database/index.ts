import { v4 as uuidv4 } from 'uuid'

const db = {
  users: [
    {
      id: uuidv4(),
      name: 'Anderson Menezes',
      email: 'anderson@codrop.com.br',
      age: 26,
      profile_id:  3,
    },
    {
      id: uuidv4(),
      name: 'John Doe',
      email: 'john@exemple.com',
      age: 20,
      profile_id:  2,
    }
  ],
  profiles: [
    {
      id: 1,
      description: 'Usuário comum.',
      type: 'USER'
    },
    {
      id: 2,
      description: 'Usuário operador.',
      type: 'OPERATOR'
    },
    {
      id: 3,
      description: 'Usuário administrador.',
      type: 'ADMINISTRATOR'
    }
  ],
  products: [
    {
      id: uuidv4(),
      name: 'Monitor AOC 24, 144hz',
      value: 1699.90
    },
    {
      id: uuidv4(),
      name: 'Memória Kingston Fury Beast, 8GB, 2666MHz, DDR4',
      value: 279.90
    },
  ]
}

export default db