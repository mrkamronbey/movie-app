import axios from "axios";
import { BASE_URL, TOKEN } from "../../../utils/api";

export const DetailsFindMovies = async (id) => {
    const response = await axios.get(`${BASE_URL}/movie/${id}`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    return response.data;
};

export const TopRatingMoviesGet = async (page) =>{
    const response = await axios.get(`${BASE_URL}/movie/top_rated?page=${page}`, {
        headers: {
            Authorization: `Bearer ${TOKEN}`,
          }
    })
    return response.data.results
}
