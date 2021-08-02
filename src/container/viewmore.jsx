import axios from 'axios'
import React from 'react'
import { useEffect ,useState} from 'react'
import { useParams ,Link} from 'react-router-dom'

const ViewMore = () => {
    const [movie, setmovie] = useState({}) 
    const [genres, setGenres] = useState([])
    const {movie_id}=useParams();

    useEffect(() => {
        //
        axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
        .then(res=>{
            setmovie(res.data)
            setGenres(res.data.genres)
        })
       
    }, [])

    
    return (
        <div className="view-more">
            <div className="poster">
                    <img src={"https://image.tmdb.org/t/p/original/"+movie.poster_path} alt="poster" />
            </div>
            <div className="info">
                <div className="heading-name"><h1>{movie.original_title}</h1>
                    <Link to={`/watch-trailor/${movie_id}`} className="btn btn-primary btn-lg">Watch Trailer</Link>
                    </div>

                <hr />
                <h3> { movie.tagline}</h3>
                <span className="badge bg-primary">Vote : {movie.vote_count}</span>
                {movie.adult && <span className="badge bg-danger">18+</span>}
                {genres.map((g,index)=><span key={index} className="badge bg-secondary">{g.name}</span>)}
                
                <p>{movie.overview}</p>
                <div>
                    <p>
                       Release Date: {movie.release_date}
                    </p>
                    <p>Language :{movie.original_language}</p>
                   
                </div>

            </div>
        </div>
    )
}

export default ViewMore
