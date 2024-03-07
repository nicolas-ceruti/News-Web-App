// import React from 'react';

// function NewsCards(props) {
//   let { sourceName, newsUrl, imageUrl, title,description } = props;
//   return (
//     <div className="card" style={{ width: '20rem', height: '27rem' }}>
//       <img src={imageUrl} style={{ maxHeight: '15rem' }} className="card-img-top" alt="image" />
//       <div className="card-body" style={{ display: 'flex', flexDirection: 'column' }}>
//         <h5 className="card-title">{title}</h5>
//         <p className="card-text flex-grow-1">Source : {sourceName}</p>
//         <Link href={newsUrl} style={{maxWidth:'8rem'}} target='_blank' className="btn btn-sm btn-primary">Read More</Link>
//       </div>
//     </div>
//   );
// }

// export default NewsCards;
import React from 'react';
import {Link} from 'react-router-dom'
import backgroundImage from '/Users/mangeshyadav/Desktop/React/new-app/src/assets/beams-basic.png'

function NewsCards(props) {
  let { sourceName, newsUrl, imageUrl, title,authorName,publishedAt} = props;
  return (
    <div className="card " style={{ maxWidth: '20rem', minHeight: '27rem',backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    }}>
      <img src={imageUrl} style={{ minHeight:'10rem',maxWidth: '100%', maxHeight: '15rem', objectFit: 'cover' }} className="card-img-top border" alt="image" />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">Source: {sourceName} <br />Author:{authorName} <br/>Published At:{publishedAt}</p>
        </div>

        <div style={{display:'flex',justifyContent:'space-between'}}>
        <Link href={newsUrl} target='_blank' className="btn btn btn-outline-primary " style={{ width: '8rem' }}>Read More</Link>

        </div>
      </div>

    </div>
  );
}

export default NewsCards;

