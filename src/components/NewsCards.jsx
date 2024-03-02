// import React from 'react';

// function NewsCards(props) {
//   let { sourceName, newsUrl, imageUrl, title,description } = props;
//   return (
//     <div className="card" style={{ width: '20rem', height: '27rem' }}>
//       <img src={imageUrl} style={{ maxHeight: '15rem' }} className="card-img-top" alt="image" />
//       <div className="card-body" style={{ display: 'flex', flexDirection: 'column' }}>
//         <h5 className="card-title">{title}</h5>
//         <p className="card-text flex-grow-1">Source : {sourceName}</p>
//         <a href={newsUrl} style={{maxWidth:'8rem'}} target='_blank' className="btn btn-sm btn-primary">Read More</a>
//       </div>
//     </div>
//   );
// }

// export default NewsCards;
import React from 'react';

function NewsCards(props) {
  let { sourceName, newsUrl, imageUrl, title, description } = props;
  return (
    <div className="card" style={{ maxWidth: '20rem', minHeight: '27rem' }}>
      <img src={imageUrl} style={{ minHeight:'10rem',maxWidth: '100%', maxHeight: '15rem', objectFit: 'cover' }} className="card-img-top border" alt="image" />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">Source: {sourceName}</p>
        </div>
        <a href={newsUrl} target='_blank' className="btn btn btn-outline-primary" style={{ width: '8rem' }}>Read More</a>
      </div>
    </div>
  );
}

export default NewsCards;

