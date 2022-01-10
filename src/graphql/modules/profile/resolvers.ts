import db from '../../../database'

type ProfileArgs = {
  id: string
}

export default {
  Query: {
    profile(_: undefined, args: ProfileArgs) {
      return db.profiles.find(profile => profile.id === Number(args.id))
    },
    profiles() {
      return db.profiles
    }
  }
}