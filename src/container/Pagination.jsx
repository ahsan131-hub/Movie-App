import React from 'react'

const Pagination = ({items,pages,items_per_page,pageNo,changePage,gotoPage}) => {
    const arr=pages>10?[... Array(10).keys()]:[... Array(pages).keys()];

    return (
        <div>
            <nav className="pagination">
                <ul>
                    <li onClick={()=>{changePage(-1)}}>
                        Back
                    </li>
                    {arr.map((key,index)=><li key={index} onClick={()=>{gotoPage(key+1)}}>{key+1}</li>)}
                    <li onClick={()=>{changePage(1)}}>
                        Next
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination
