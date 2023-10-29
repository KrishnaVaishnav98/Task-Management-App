import axios from "axios"
import { ADD_PROJECT, GET_PROJECTS, PROJECT_ERROR, PROJECT_LOADING } from "./actionType"


export const get_projects = (token) => (dispatch) => {
    dispatch({ type: PROJECT_LOADING })
    axios.get("https://pro-task.onrender.com/projects", {
        headers: {
            Authorization: token
        }
    })
        .then((res) => {
            console.log(res.data)
            dispatch({ type: GET_PROJECTS, payload: res.data })
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: PROJECT_ERROR })
        })
}

export const add_projects = (token, data) => (dispatch) => {
    dispatch({ type: PROJECT_LOADING })
    axios.post("https://pro-task.onrender.com/projects/newproject", data, {
        headers: {
            Authorization: token
        }
    })
        .then((res) => {
            console.log(res.data)
            dispatch({ type: ADD_PROJECT })
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: PROJECT_ERROR })
        })
}
