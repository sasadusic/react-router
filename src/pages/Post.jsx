import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const Post = () => {

    const { id } = useParams() // getting the id from the URL

    const query = new URLSearchParams(useLocation().search)

  return (
    <div className="card">
    <h3>Post id: {id}</h3>
    <p className="phar">First Name: <span className="span bold">{query.get('first')}</span></p>
    <p className="phar">Last Name: <span className="span bold">{query.get('last')}</span></p>
    <button className="btn">Read More</button>
    </div>
  )
}

export default Post