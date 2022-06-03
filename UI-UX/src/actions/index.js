import axios from 'axios';

//get random list
export const getRandomList = async(type, genre) => {
    const request = await axios.get(`http://localhost:5555/list/${type ? '?type=' + type : ''}${genre ? '&genre=' + genre : ''}`, {
        headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        }
    });
    return request;
}

//get movie
export const getMovie = async(item) => {
    const request = await axios.get(`http://localhost:5555/movie/find/${item}`, {
        headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        }
    });
    return request;
}

//get random content
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
    try {
        const request = await axios.post(`http://localhost:5555/auth/login`, user);
        return request;
    } catch (error) {
        console.log(error);
        return error.response;
    }
}

//register user
export const registerUser = async(data) => {
    try {
        const request = await axios.post(`http://localhost:5555/auth/register`, data);
        return request;
    } catch (error) {
        return error.response;
    }

}

//forgot password
export const forgotPassword = async(data) => {
    try {
        const request = await axios.post(`http://localhost:5555/auth/forgot`, data);
        return request;
    } catch (error) {
        return error.response;
    }
}

//reset password
export const resetPassword = async(id, data) => {
    try {
        const request = await axios.post(`http://localhost:5555/auth/reset/${id}`, data);
        return request.data;
    } catch (error) {
        return error.response;
    }
}

//update user
export const upgradeUser = async(id, data) => {
    const request = await axios.put(`http://localhost:5555/user/updateUser/${id}`, data, {
        headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        }
    });
    console.log(request)
    return request;
}