import React, { useState, useEffect } from 'react'
import NewsCards from './NewsCards'
import Category from './Category';

function NewsItems({category,setCategory}) {
    let [articles, setArticles] = useState([]);
    let[pageNumber,setPageNumber]=useState(1)
    let resultNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=in&${category}=business&apiKey=4a80da18ae0640f1bb66659c79dfba2e`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles);

    };
    useEffect(() => {
        resultNews();
    }, [category]);
    
    

    return (
        <>
        <Category setCategory={setCategory}/>
            <h3 className='text-center mt-3' style={{ wordSpacing: '.5rem' }}>  NewziFy - Top HeadLines Of The Day</h3>

            <div style={{ margin: '2rem', padding: '.5rem'}}>
                <div className="row ">
                    {articles.map((element) => {
                        return (
                            <div className='col-md-3 mb-3' key={element.url}>
                                <NewsCards  imageUrl={element.urlToImage!==null?element.urlToImage:'https://images.freeimages.com/images/large-previews/03a/news-1567279.jpg?fmt=webp&w=500'} title={element.title}
                                    newsUrl={element.url} sourceName={element.source.name} description={element.description} authorName={element.author===null?'Anonymous':element.author} publishedAt={element.publishedAt}/>
                            </div>
                        )
                    }

                    )}




            <div className="container border d-flex justify-content-between  " >
                <button disabled={pageNumber==1} className="btn btn-outline-dark" >&larr; Previous</button>
                <button className="btn btn-outline-dark"  >Next &rarr;</button>

            </div>
                </div>

            </div>

        </>
    )
}

export default NewsItems
