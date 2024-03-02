import React, { useState, useEffect } from 'react'
import NewsCards from './NewsCards'

function NewsItems(props) {
    let [articles, setArticles] = useState([]);
    let resultNews = async () => {
        const url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a63ab02946b640f1a45559f967c8e017';
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles);

    };
    useEffect(() => {
        resultNews();
    }, []);

    return (
        <>
            <div style={{ margin: '2rem', padding: '.5rem', border: '2px solid black' }}>
                <div className="row ">
                    {articles.map((element) => {
                        return (
                            <div className='col-md-3 mb-3' key={element.url}>
                                <NewsCards imageURL=
                                    {element.urlToImage} title={element.title}
                                    newsUrl={element.url} />
                            </div>
                        )
                    }

                    )}




                </div>

            </div>

        </>
    )
}

export default NewsItems
