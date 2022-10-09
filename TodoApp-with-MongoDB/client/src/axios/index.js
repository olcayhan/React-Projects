const axios = require("axios").default;
const HTTP = axios.create({
    baseURL: "http://localhost:5000",
})

export const login = async (formData) => {
     return await HTTP.post("/users/signin", formData)
}

export const register = async (formData) => {
     return await HTTP.post("/users/signup", formData)
}


export const addTodo = async (formData) => {
     return await HTTP.post("/users/home", formData)

}

export const getTodo = async () => {
     return await HTTP.get("/users/home")

}