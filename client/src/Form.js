import {useAddNewMovie} from "./hooks/useAddNewMovie";

export const Form = () => {
    const addMovie = useAddNewMovie();

    const handler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        addMovie({
            variables: {
                genre: [formData.get('genre')],
                date: Number(formData.get('date')),
                title: formData.get('title')
            }
        })
        e.target.reset()
    }
    return (
        <form onSubmit={handler}>
            <input name="title" type="text" placeholder={'title'}/>
            <input name="genre" type="text" placeholder={'genre'}/>
            <input name="date" type="number" placeholder={'date'}/>
            <input type="submit" value={'sent'}/>
        </form>
    )
}
