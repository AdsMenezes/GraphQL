import db from '../../../database'

type ProductArgs = {
  id: string
}

export default {
  Query: {
    product(_: undefined, args: ProductArgs) {
      return db.products.find(product => product.id === args.id)
    },
    products() {
      return db.products
    }
  }
}