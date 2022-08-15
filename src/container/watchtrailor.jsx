import axios from 'axios';
import React from 'react'
import { useEffect,useState } from 'react';
import { useParams ,useHistory} from 'react-router-dom'
import YouTube from 'react-youtube';

const WatchTrailor = () => {
    const {movie_id} = useParams();
    let history = useHistory();
    let results=[]
    const [trailor, settrailor] = useState({});
    useEffect(() => {
        //api request
        
        const getData=(async ()=>{
               const res= await  axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
               results=(await res.data.results)
               
               settrailor(results.filter((obj)=>
                   obj.type=="Trailer"&&obj.site=="YouTube"
               )[0]);
               
        });
        getData();
      
    }, [])
 
    let back = e => {
      e.stopPropagation();
      history.goBack();
    };
    const opts = {
        height: '500px',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
  
   
    return (
      <div className="trailor-div">
         <YouTube videoId={`${trailor.key}`} opts={opts}  />
          
          <h1 className="trailor-heading">{trailor.name}</h1>
          <button  className="back-button" type="button" onClick={back}>
            return to back
          </button>
          
      </div>
    )
}

export default WatchTrailor
