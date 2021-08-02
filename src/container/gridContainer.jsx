import React from 'react'
import { useEffect ,useState} from 'react'
import axios from 'axios'
import Card from './card'
const GridContainer = ({items,category}) => {
   
    return (
    <>
        <div class="category">
            <h1>{category}</h1>
        </div>
        <div className="grid">
            {items.map((item,index)=>(<Card key={index}
             img_src={"https://image.tmdb.org/t/p/original/"+item.poster_path} title={item.title} movie_id={item.id}overview={item.overview} Loaded={false}/>)
        )
            }        
        </div>
        </>
    )
}

export default GridContainer
