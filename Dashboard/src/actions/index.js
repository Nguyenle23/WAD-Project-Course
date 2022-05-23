import axios from 'axios';

//--------------home-----------------

//get statistics table
export const getStats = async(type, genre) => {
    const request = await axios.get(`http://localhost:5555/user/stats`, {
        headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        }
    });
    return request;
}

//get all new register users
export const getUser = async(type, genre) => {
    const request = await axios.get(`http://localhost:5555/user?new=true`, {
        headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        }
    });
    return request;
}

//check login
export const checkLogin = async(user) => {
    const request = await axios.post(`http://localhost:5555/auth/login`, user);
    return request;
}

//-----------------movie------------

//fetch all movies
export const fetchMovies = async(data) => {
    const request = await axios.get(`http://localhost:5555/movie/`, {
        headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
    });
    return request;
}

//create movie
export const uploadMovie = async(movie) => {
    const request = await axios.post(`http://localhost:5555/movie/`, movie, {
        headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        }
    });
    return request;
}

//update movie
export const upgradeMovie = async(id, data) => {
    const request = await axios.put(`http://localhost:5555/movie/${id}`, data, {
        headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        }
    });
    return request;
}

//delete solfly movie
export const removeMovie = async(id) => {
    const request = await axios.delete(`http://localhost:5555/movie/${id}`, {
        headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
    });
    return request;
}

//-----------list-----------------

//fetch all lists
export const fetchList = async() => {
    const request = await axios.get(`http://localhost:5555/list/`, {
        headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
    });
    return request;
}

//create list
export const uploadList = async(movie) => {
    const request = await axios.post(`http://localhost:5555/list/`, movie, {
        headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        }
    });
    return request;
}

//delete solfly list
export const removeList = async(id) => {
    const request = await axios.delete(`http://localhost:5555/list/${id}`, {
        headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
    });
    return request;
}

//-------------user-------------

//get all user
export const getAllUser = async() => {
    const request = await axios.get(`http://localhost:5555/user/getAll`, {
        headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
    });
    return request;
}

//update user
export const upgradeUser = async(id, data) => {
    const request = await axios.put(`http://localhost:5555/user/updateUser/${id}`, data, {
        headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        }
    });
    return request;
}

//delete user
export const removeUser = async(id) => {
    const request = await axios.delete(`http://localhost:5555/user/removeUser/${id}`, {
        headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
    });
    return request;
}