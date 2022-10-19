import React from 'react'

const Pagination = ({postsPerPage, totalPosts, paginate}) => {

    const pageNumber = []
    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumber.push(i)
    }

  return (
    <div>
      {pageNumber.map((number) => (
        <div className="btn-group p-1" key={number}>
        <button className="btn" onClick={() => paginate(number)}>{number}</button>
      </div>
      ))}
    </div>
  )
}

export default Pagination
