import MovieList from "./movie_list"
import s from './index.module.css'

const Home = () => {
    return (
        <div className={s.home_wrapper}>
            <MovieList />
        </div>
    )
}

export default Home