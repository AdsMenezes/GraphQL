import db from '../../../database'

type UserArgs = {
  id: string
}

export default {
  User: {
    profile(user: any) {
      return db.profiles.find(profile => profile.id === user.profile_id)
    }
  },

  Query: {
    user(_: undefined, args: UserArgs) {
      return db.users.find(user => user.id === args.id)
    },
    users() {
      return db.users
    }
  }
}