import axios from 'axios';

export const getRandomList = async(type, genre) => {
    const request = await axios.get(`http://localhost:5555/list/${type ? '?type=' + type : ''}${genre ? '&genre=' + genre : ''}`, {
        headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        }
    });
    return request;
}

export const getMovie = async(item) => {
    const request = await axios.get(`http://localhost:5555/movie/find/${item}`, {
        headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        }
    });
    return request;
}

export const getRandomContent = async(type) => {
    const request = await axios.get(`http://localhost:5555/movie/random?type=${type}`, {
        headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        }
    });
    var result = request.data[0];
    if (result.isDestroy === true) {
        return getRandomContent(type);
    }
    return request;
}

//check login
export const checkLogin = async(user) => {
    const request = await axios.post(`http://localhost:5555/auth/login`, user);
    return request;
}

//register user
export const registerUser = async(email, username, password) => {
    console.log(email, username, password);
    const request = await axios.post(`http://localhost:5555/auth/register`, email, username, password);
    console.log(request);
    return request;
}