const {gql} = require("apollo-server");

const typeDefs = gql`
  enum Genre {
    COMEDIAN
    DRAMA
    MELODRAMA
  }  

  type Movie {
    id: String!
    title: String!
    date: Int
    genre: [Genre]!
    actors: [Int!]!
  }
  
  type Actor {
    id: String!
    name: String!
  }
  
  type ActorWithMovies {
     name: String
     movies: [Movie]
  }      
  
  type Query {
    movies: [Movie!]!
    getMovie(id: String!): Movie!
    actors: [Actor!]!
    getActorWithMovies: [ActorWithMovies]
  }
  
  type Mutation {
    addMovie (title: String, date: Int, genre: [Genre]! ): Movie!
  } 
  
  type Subscription {
    newMovie: Movie!
  }
`

module.exports = typeDefs;
