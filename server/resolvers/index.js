const movies = require('../data/movies');
const actors = require('../data/actors');

module.exports = {
    Query: {
        getMovie: (_, args) => movies.find(movie => movie.id === args.id),
        movies: () => movies,
        actors: () => actors,
        getActorWithMovies: () => actors.map(actor => {
                return {
                    name: actor.name,
                    movies: movies.filter(movie => movie.actors.includes(actor.id))
                }
            }
        ),
    },
    Mutation: {
        addMovie: (_, args, {pubsub}) => {
            const newMovie = {
                id: Date.now(),
                actors: [],
                ...args,
            }
            movies.push(newMovie)
            pubsub.publish('ADD', { newMovie })
            return newMovie
        }
    },
    Subscription: {
        newMovie: {
            subscribe: (_, __, {pubsub}) => pubsub.asyncIterator('ADD'),
        }
    }
}
