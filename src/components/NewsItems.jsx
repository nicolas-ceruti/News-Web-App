import React, { useState, useEffect } from 'react'
import NewsCards from './NewsCards'

function NewsItems({category}) {
    let [articles, setArticles] = useState([]);
    let resultNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=a63ab02946b640f1a45559f967c8e017`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles);

    };
    useEffect(() => {
        resultNews();
    }, [category]);
    
    

    return (
        <>
            <h3 className='text-center mt-3' style={{ wordSpacing: '.5rem' }}>  NewziFy - Top HeadLines Of The Day</h3>

            <div style={{ margin: '2rem', padding: '.5rem'}}>
                <div className="row ">
                    {articles.map((element) => {
                        return (
                            <div className='col-md-3 mb-3' key={element.url}>
                                <NewsCards  imageUrl={element.urlToImage!==null?element.urlToImage:'https://images.freeimages.com/images/large-previews/03a/news-1567279.jpg?fmt=webp&w=500'} title={element.title}
                                    newsUrl={element.url} sourceName={element.source.name} description={element.description}/>
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
