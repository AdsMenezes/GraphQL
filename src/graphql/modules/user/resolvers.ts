import { v4 as uuidv4 } from 'uuid';

import db from '../../../database'

interface IUserArgs {
  id: string
}

interface ICreateUserArgs {
  data: {
    name: string
    email: string
    age: number
  }
}

interface IUpdateUserArgs extends ICreateUserArgs {
  id: string
}

export default {
  User: {
    profile(user: any) {
      return db.profiles.find(profile => profile.id === user.profile_id)
    }
  },

  Query: {
    user(_: undefined, args: IUserArgs) {
      return db.users.find(user => user.id === args.id)
    },
    users() {
      return db.users
    }
  },

  Mutation: {
    createUser(_: undefined, args: ICreateUserArgs) {
      const { name, email, age } = args.data

      const userAlreadyExists = db.users.some(user => user.email === email)

      if (userAlreadyExists) {
        throw new Error('User already exists')
      }

      const user = {
        id: uuidv4(),
        name,
        email,
        age,
        profile_id:  1,
      }

      db.users.push(user)

      return user
    },

    updateUser(_: undefined, args: IUpdateUserArgs) {
      const { name, email, age } = args.data

      const userIndex = db.users.findIndex(user => user.id === args.id)

      if (!!userIndex) {
        throw new Error('User not exists')
      }

      const user = db.users[userIndex]

      if(name) user.name = name
      if(email) user.email = email
      if(age) user.age = age

      return user
    },

    deleteUser(_: undefined, args: IUserArgs) {
      const userIndex = db.users.findIndex(user => user.id === args.id)

      console.log(userIndex)
      
      if (!!userIndex) {
        throw new Error('User not exists')
      }

      db.users.splice(userIndex, 1)

      return true
    }
  }
}