import React, { useState, useEffect } from 'react';
import NewsCards from './NewsCards';
import Category from './Category';

function NewsItems({ category, setCategory }) {
    const [articles, setArticles] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);

    const resultNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=4a80da18ae0640f1bb66659c79dfba2e&page=${pageNumber}`;
        const data = await fetch(url);
        const parsedData = await data.json();
        setArticles(parsedData.articles);
    };

    useEffect(() => {
        resultNews();
    }, [category, pageNumber]);
    
    const pagePreviousHandler = () => {
        if (pageNumber > 1) {
            setPageNumber(pageNumber - 1);
        }
    };

    const pageNextHandler = async () => {
        const nextPageNumber = pageNumber + 1;
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=4a80da18ae0640f1bb66659c79dfba2e&page=${nextPageNumber}`;
        const data = await fetch(url);
        const parsedData = await data.json();
        setArticles(parsedData.articles);
        setPageNumber(nextPageNumber);
    };

    return (
        <>
            <Category setCategory={setCategory} />
            <h3 className='text-center mt-3' style={{ wordSpacing: '.5rem' }}>NewziFy - Top Headlines Of The Day</h3>
            <div style={{ margin: '2rem', padding: '.5rem' }}>
                <div className="row">
                    {articles.map((element) => (
                        <div className='col-md-3 mb-3' key={element.url}>
                            <NewsCards
                                imageUrl={element.urlToImage || 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia4.s-nbcnews.com%2Fi%2Fnewscms%2F2019_01%2F2705191%2Fnbc-social-default_b6fa4fef0d31ca7e8bc7ff6d117ca9f4.png&tbnid=A8WuPNML3_qgCM&vet=12ahUKEwiVldChytiEAxWcT2wGHSo-AcoQMyghegUIARDJAQ..i&imgrefurl=https%3A%2F%2Fwww.nbcnews.com%2F&docid=DIOCJOvNbLYI3M&w=1680&h=840&itg=1&q=news%20image&client=safari&ved=2ahUKEwiVldChytiEAxWcT2wGHSo-AcoQMyghegUIARDJAQ'}
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
                <div className="container border d-flex justify-content-between">
                    <button disabled={pageNumber === 1} className="btn btn-outline-dark" onClick={pagePreviousHandler}>&larr; Previous</button>
                    <button className="btn btn-outline-dark" onClick={pageNextHandler}>Next &rarr;</button>
                </div>
            </div>
        </>
    );
}

export default NewsItems;
// `https://newsapi.org/v2/top-headlines?country=in&${category}=business&apiKey=4a80da18ae0640f1bb66659c79dfba2e`;