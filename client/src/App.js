import './App.css';
import {useGetAllMovies} from "./hooks/useGetAllMovies";
import {useEffect, useState} from "react";
import {useSubscibeAddMovie} from "./hooks/useSubscribeAddMovie";
import {Form} from "./Form";

function App() {
    const subscription = useSubscibeAddMovie();
    const query = useGetAllMovies()
    const [data, setData] = useState([]);

    useEffect(() => {
        if (query?.data?.movies) setData(query.data.movies)
    }, [query?.data?.movies])

    useEffect(() => {
        if (subscription?.data?.newMovie) {
            setData(old => [...old, subscription.data.newMovie])
        }
    }, [subscription?.data?.newMovie])

    return (
        <div className="App">
            <Form />
            {data.map(movie => <p key={movie.id}>{movie.title}</p>)}
        </div>
    );
}

export default App;
