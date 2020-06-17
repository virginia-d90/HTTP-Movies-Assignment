import React, { useState, useEffect } from 'react';
import {  useParams, useHistory } from 'react-router-dom';
import axios from 'axios';


const initialMovie = {
    title: '',
    director: '',
    metascore: '',
    stars: []
}
const UpdateMovie = ({setMovieList}) => {
    const { push } = useHistory();
    const { id } = useParams();
    const [movie, setMovie] = useState(initialMovie)

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/movies/${id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    })

    const changeHandler = e => {
        e.preventDefault();
        let value = e.target.value;
        if(e.target.name === 'metascore'){
            value = parseInt(value, 10)
        }

        setMovie({
            ...movie,
            [e.target.name]: value
        })
    }


    return (
        <>
            <h2>Update Movie</h2>
            <form>
                <label>Title</label>
                <input 
                    type='text'
                    name='title'
                    placeholder='title'
                    value={movie.title}
                    onChange={changeHandler}
                />
                <label>Director</label>
                <input 
                    type='text'
                    name='director'
                    placeholder='director'
                    value={movie.director}
                    onChange={changeHandler}
                />
                <label>Metascore</label>
                <input 
                    type='number'
                    name='metascore'
                    placeholder='metascore'
                    value={movie.metascore}
                    onChange={changeHandler}
                />
                <label>Stars</label>
                <input 
                    type='text'
                    name='stars'
                    placeholder='stars'
                    value={movie.stars}
                    onChange={changeHandler}
                />
                <button>Update</button>
            </form>
        </>
    )

}
export default UpdateMovie