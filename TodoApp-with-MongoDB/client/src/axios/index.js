const axios = require("axios").default;
const HTTP = axios.create({
    baseURL: "http://localhost:5000",
})

export const login = async (formData) =>
    await HTTP.post("/users/signin", formData)

export const register = async (formData) =>
    await HTTP.post("/users/signup", formData)

export const addTodo = async (formData) =>
    await HTTP.post("/users/home", formData)