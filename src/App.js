import GridContainer from "./container/gridContainer";
import Navbar from "./container/navbar";
import SearchForm from "./container/searchForm";
import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./container/Pagination";
import Loader from "react-loader-spinner";

function App() {
  // const key = "7d5e388f7bd37f654e8918e0a3edf682";
  const key = process.env.REACT_APP_API_KEY;

  const [total_pages, settotal_pages] = useState(-1);
  const [total_results, settotal_results] = useState(-1);
  const [pageNo, setpageNo] = useState(1);
  const [gridItems, setgridItems] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [genres, setgenres] = useState([]);
  const [category, setCategory] = useState("Trending Now");
  const [apiLink, setApiLink] = useState(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`
  );

  const getMovies = (apilink, page = pageNo) => {
    // const res = await axios.get(apiLink);
    // const data = await res.data;
    axios.get(apilink + `&language=en-US&page=${page}`).then((res) => {
      const data = res.data;
      // console.log("recieved data " + data);
      setgridItems(data.results);
      settotal_pages(data.total_pages);
      settotal_results(data.total_results);
      setLoaded(true);
    });
  };

  const getGenres = () => {
    let data = [];
    axios
      .get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${key}`)
      .then((res) => {
        setgenres(res.data.genres);
      });

    // data = await res.data.genres;
    // console.log("data def", data);
  };

  //use effect to load genres adn movies first time
  useEffect(() => {
    setLoaded(false);
    getGenres();
    getMovies(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`,
      pageNo
    );
    // console.log(gridItems);
    return () => {};
  }, []);

  const changePage = (num) => {
    if (pageNo == 1) {
      return;
    }
    getMovies(apiLink, pageNo + num);
    setpageNo(pageNo + num);
  };
  const gotoPage = (num) => {
    getMovies(apiLink, num);
    setpageNo(num);
  };

  const show = (api, category) => {
    // e.preventDefault();
    setLoaded(false);
    setpageNo(1);
    setCategory(category);
    setApiLink(api);
    getMovies(api);
  };

  const showGenre = (genre_id) => {
    const genre = genres.filter((genre) => genre.id === genre_id)[0];
    // console.log(genre_id);
    // console.log(genre.id);
    setCategory(genre.name);
    setApiLink(
      `https://api.themoviedb.org/3/discover/movie?api_key=${key}&sort_by=popularity.desc&with_genres=${genre.id}`
    );
    // console.log("genr");
    setpageNo(1);
    getMovies(
      `https://api.themoviedb.org/3/discover/movie?api_key=${key}&sort_by=popularity.desc&with_genres=${genre.id}`
    );
  };
  return (
    <>
      <Navbar show={show} showGenre={showGenre} genres={genres} />
      <div className="container align-item-center">
        {loaded ? (
          <>
            {/* {gridItems.length === 0 ? (
              <> */}
            <GridContainer items={gridItems} category={category} />
            {/* <h1>
                  {" "}
                  {gridItems.length} {total_results}
                </h1>
              </>
            ) : (
              <h1>Sorry...No Results :(</h1>
            )} */}
            {total_pages > 1 && (
              <Pagination
                pages={total_pages}
                items={total_results}
                item_per_page={gridItems.length}
                pageNo={pageNo}
                changePage={changePage}
                gotoPage={gotoPage}
              />
            )}
          </>
        ) : (
          <div
            className="center"
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Loader type="Puff" color="#333" height={370} width={100} />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
