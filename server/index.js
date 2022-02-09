const { ApolloServer, PubSub } = require('apollo-server');
// const { PubSub } = require('graphql-subscriptions');
const pubsub = new PubSub();

const resolvers = require('./resolvers');
const typeDefs = require('./schemas');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: { pubsub }
})

server.listen(3001).then(({ url }) => {
    console.log(`🚀  Server ready at ${ url }`)
})
