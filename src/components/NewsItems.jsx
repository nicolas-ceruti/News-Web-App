import React, { useState, useEffect } from 'react';
import NewsCards from './NewsCards';
import Category from './Category';

function NewsItems({ category, setCategory ,country,isLoggedIn,setIsLoggedIn}) {
    const [articles, setArticles] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);

    const resultNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=4a80da18ae0640f1bb66659c79dfba2e&page=${pageNumber}`;
        const data = await fetch(url);
        const parsedData = await data.json();
        setArticles(parsedData.articles);
    };

    useEffect(() => {
        resultNews();
    }, [category, pageNumber,country]);
    
    const pagePreviousHandler = () => {
        if (pageNumber > 1) {
            setPageNumber(pageNumber - 1);
        }
    };

    const pageNextHandler = async () => {
        const nextPageNumber = pageNumber + 1;
        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=4a80da18ae0640f1bb66659c79dfba2e&page=${nextPageNumber}`;
        const data = await fetch(url);
        const parsedData = await data.json();
        setArticles(parsedData.articles);
        setPageNumber(nextPageNumber);
    };

    return (
        <>
            <Category setCategory={setCategory} setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
            <h3 className='text-center ' style={{ wordSpacing: '.5rem' ,marginTop:'5rem'}}>NewziFy - Top Headlines Of The Day</h3>
            <div style={{ margin: '3rem', padding: '.5rem' }}>
                <div className="row">
                    {articles.map((element) => (
                        <div className='col-md-3 mb-3' key={element.url}>
                            <NewsCards
                                imageUrl={element.urlToImage || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrIuFW7NeWsGsABRfHpMPTYnrIgZcPVCuPOA&usqp=CAU'}
                                title={element.title}
                                newsUrl={element.url}
                                sourceName={element.source.name}
                                description={element.description}
                                authorName={element.author || 'Anonymous'}
                                publishedAt={element.publishedAt}
                            />
                        </div>
                    ))}
                </div>
                <div className="container  d-flex justify-content-between">
                    <button disabled={pageNumber === 1} className="btn btn-outline-dark" onClick={pagePreviousHandler}>&larr; Previous</button>
                    <button className="btn btn-outline-dark" onClick={pageNextHandler}>Next &rarr;</button>
                </div>
            </div>
        </>
    );
}

export default NewsItems;
