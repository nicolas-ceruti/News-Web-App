import React from 'react'

function NewsCards(props) {
    let {sourceName,newsUrl,imageUrl,title,descprition}=props
  return (
     <div className="card" style={{width:'20rem'}}>
    <img src={imageUrl} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{sourceName}</p>
      <a href={newsUrl} target='_blank'className="btn btn-sm btn-primary">Read More</a>
    </div>
  </div> 
  )
}

export default NewsCards
