import React, { useState ,useEffect} from 'react'
import NewsCards from './NewsCards'

function NewsItems() {
    let [articles, setArticles] = useState([]);
    let resultNews = async () => {
        const url = '';
        let data = await fetch(url);
        // let parsedData = await data.json();
        // setArticles(parsedData.articles);

    };
    useEffect(() => {
        resultNews();
    }, []);
    
    return (
        <>
            <div style={{ margin: '2rem', padding: '.5rem', border: '2px solid black' }}>
                <div className="row ">
                    
                    <div className="col-md-3 mb-3">

                    </div>

                </div>
            </div>
        </>
    )
}

export default NewsItems
