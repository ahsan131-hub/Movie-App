import React, { useState ,useRef, useEffect} from 'react'
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation
  } from "react-router-dom";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import ViewMore from './viewmore';
import WatchTrailor from './watchtrailor';
const Card = ({img_src,title,overview,movie_id}) => {
    let location = useLocation();
    let background=location.state && location.state.background;
    const [isLoaded, setIsLoaded] = useState(false);
    const imageLoaded = () => {
        setIsLoaded(true);
    }

    useEffect(() => {
        
        return () => {
            setIsLoaded(false)
        }
    }, [img_src])

    return (<>
            <div className="my-card" >
                <figure style={{display:  isLoaded ? 'block':'none'}}>
                    <img src={img_src} alt={title} onLoad={imageLoaded} />
                <figcaption>
                    {title}
                </figcaption>
            </figure>
            {!isLoaded &&<Loader type="Puff" color="#333"  height={370} width={100} />}
            
            <div className="card-details">
               <div className="text">
                     <p>{overview}</p>
                </div>
                <div className="options">   
                    <Link to={`/view-more/${movie_id}`}>view more</Link>
                    <Link to= {`/watch-trailor/${movie_id}`}>watch trailor</Link>
                </div>
            </div>
            </div>

         
            
            </>
        
    )
}

export default Card

