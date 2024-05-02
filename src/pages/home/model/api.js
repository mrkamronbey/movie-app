import axios from "axios";
import {  BASE_URL, TOKEN } from "../../../utils/api";


export const PopularMoviesGet = async (page) => {
    const response = await axios.get(`${BASE_URL}/movie/popular?page=${page}`, {
        headers: {
            Authorization: `Bearer ${TOKEN}`,
          }
    })
    return response.data.results
}

export const SearchMoviesGet = async (query) => {
    const response = await axios.get(`${BASE_URL}/search/movie?query=${query}`, {
        headers: {
            Authorization: `Bearer ${TOKEN}`,
          }
    })
    return response.data.results
}