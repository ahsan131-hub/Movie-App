import axios from 'axios'
import React, { useEffect,useState } from 'react'
import {Dropdown}from 'react-bootstrap';

const Navbar = ({
   show, showGenre,genres}) => {
const [search,setSearch ] = useState("")
const searchMovie=e=>{
  e.preventDefault();
  show(` https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${search}`)
  console.log(search);
}
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><h1>Movie App</h1></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li key={1} className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" onClick={()=>{show(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`, "Trending Now.");}}>Trending Now</a>
              </li>
              <li key={2} className="nav-item">
                <a className="nav-link" href="#" onClick={()=>{show( `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`,`Top Rated.`);}}>Top Rated</a>
              </li>

              <li keu={3} className="nav-item">
                <a className="nav-link " href="#" tabindex="-1" aria-disabled="true" onClick={()=>{show(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}`,"Up Coming.")}}>Upcoming</a>
              </li>
              <li className="nav-item dropdown">
             
              <Dropdown>
                <Dropdown.Toggle variant=" outline-primary" id="dropdown-basic">
                 Genre
                </Dropdown.Toggle>
                  <Dropdown.Menu>
                              {genres.map((obj,index)=>{
                                  return <Dropdown.Item key={index} value={obj.id} onClick={()=>{showGenre(obj.id)}}>{obj.name}</Dropdown.Item>
                                }) } 
                  </Dropdown.Menu>
              </Dropdown>
              </li>
            </ul>
            
            <div className="gap-2 d-flex  justify-content-end "></div>
            <form className="d-flex col-6 justify-content-end" onSubmit={searchMovie}>
              <input className="form-control me-2 " type="search" placeholder="Search" onChange={(e)=>{setSearch(e.target.value)}} aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    )
}

export default Navbar
