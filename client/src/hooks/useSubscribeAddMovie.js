import {gql, useSubscription} from '@apollo/client'

const SUBSCRIBE_ADD_MOVIE = gql`
    subscription NewMovie {
      newMovie {
        id
        title
        date
        genre
        actors
      } 
    }
`;

export const useSubscibeAddMovie = () => {
    const subscription = useSubscription(SUBSCRIBE_ADD_MOVIE)

    return subscription
}
