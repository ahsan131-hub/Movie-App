import React from "react"


const SearchForm = () => {
    return (
        <div className="container m-4">
            <form> 
            <div className="row  ">
            <div className="col-sm-7 ">
                <label htmlFor="movieName" className="mr-sm-2">Movie Name(Required)</label>
                <input type="text" id="movieName"  className="form-control" placeholder="e.g: Iron Man" />
            </div>
            <div className="col">
                <label class="mr-sm-2" htmlFor="genre">Genre</label>
                <select id="genre" className="form-select" id="genre">
                <option value="0" selected>All</option>
                <option value="1">Action</option>
                <option value="2">Romantic</option>
                <option value="3">Fiction</option>
                </select>
            </div>

            <div className="col">
                <label htmlFor="year">Year</label>
                <input type="number" start="1900" className="form-control" placeholder="e.g: 2000" />
            </div>

            </div>
        </form>
        </div>    


        
    )
}

export default SearchForm
