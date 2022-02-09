import {gql, useQuery} from '@apollo/client'

const GET_ALL_MOVIES = gql`
    query Movies {
      movies {
        id
        title
        date
        genre
        actors
      }
    }
`;

export const useGetAllMovies = () => {
    const query = useQuery(GET_ALL_MOVIES)

    return query
}
