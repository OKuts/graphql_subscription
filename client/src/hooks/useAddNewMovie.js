import {gql, useMutation} from '@apollo/client'

const ADD_NEW_MOVIE = gql`
    mutation AddMovie($genre: [Genre]!, $date: Int, $title: String) {
      addMovie(genre: $genre, date: $date, title: $title) {
        actors
        genre
        date
        title
        id
      }
    }
`;

export const useAddNewMovie = () => {
    const [addMovie] = useMutation(ADD_NEW_MOVIE)

    return addMovie
}
