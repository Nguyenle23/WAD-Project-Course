import {
    createMovieFailure,
    createMovieStart,
    createMovieSuccess,
    updateMovieStart,
    updateMovieSuccess,
    updateMovieFailure,
    deleteMovieFailure,
    deleteMovieStart,
    deleteMovieSuccess,
    getMoviesFailure,
    getMoviesStart,
    getMoviesSuccess,
} from "./MovieAction";
import { fetchMovies, uploadMovie, upgradeMovie, removeMovie } from '../../actions/index'

//get all movies
export const getMovies = async(dispatch) => {
    dispatch(getMoviesStart());
    try {
        fetchMovies().then((res) => {
            var render
            const movieData = res.data
            for (var i of movieData) {
                if (i.isDestroy === true) {
                    render = movieData.filter(movie => movie.isDestroy === false)
                }
                render = movieData.filter(movie => movie.isDestroy === false)
            }
            dispatch(getMoviesSuccess(render));
        })
    } catch (err) {
        dispatch(getMoviesFailure());
    }
};

//create movie
export const createMovie = async(movie, dispatch) => {
    dispatch(createMovieStart());
    try {
        uploadMovie(movie).then((res) => {
            dispatch(createMovieSuccess(res.data))
        })
    } catch (err) {
        dispatch(createMovieFailure());
    }
};

//update movie
export const updateMovie = async(id, movie, dispatch) => {
    dispatch(updateMovieStart());
    try {
        upgradeMovie(id, movie).then((res) => {
            dispatch(updateMovieSuccess(res.data))
        })
    } catch (err) {
        dispatch(updateMovieFailure());
    }
};

//delete movie
export const deleteMovie = async(id, dispatch) => {
    dispatch(deleteMovieStart());
    try {
        await removeMovie(id);
        dispatch(deleteMovieSuccess(id));
    } catch (err) {
        dispatch(deleteMovieFailure());
    }
};