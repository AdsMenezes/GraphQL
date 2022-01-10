import { ApolloServer } from "apollo-server"

import { typeDefs, resolvers } from "./graphql"

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen(3333).then(({ url }) => {
  console.log(`Server started at ${url}`)
})