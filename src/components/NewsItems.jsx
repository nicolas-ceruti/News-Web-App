import React, { useState, useEffect } from 'react';
import NewsCards from './NewsCards';
import Category from './Category';

function NewsItems({ category, setCategory, country, isLoggedIn, setIsLoggedIn }) {
    const [articles, setArticles] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [error, setError] = useState(null);

    const resultNews = async () => {
        // Hardcoded URL for testing
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=a63ab02946b640f1a45559f967c8e017&page=${pageNumber}`;
        console.log("Fetching URL:", url); // Debug the URL

        try {
            const response = await fetch(url);
            const parsedData = await response.json();
            console.log("Parsed Data:", parsedData);

            if (parsedData.status !== "ok") {
                console.error("API Error:", parsedData.message);
                setError(parsedData.message || "Failed to fetch news");
                setArticles([]);
                return;
            }

            console.log("Total Results:", parsedData.totalResults);
            if (parsedData.totalResults === 0 || !parsedData.articles.length) {
                console.log("No articles found for the current query.");
                setError("No articles found for the selected category and country.");
                setArticles([]);
                return;
            }

            setArticles(parsedData.articles);
            setError(null);
        } catch (error) {
            console.error("Error fetching news:", error);
            setError("An error occurred while fetching news. Please try again.");
            setArticles([]);
        }
    };

    useEffect(() => {
        resultNews();
        console.log("category changed :",category)
    }, [category, pageNumber, country,setCategory,]);

    const pagePreviousHandler = () => {
        if (pageNumber > 1) {
            setPageNumber(pageNumber - 1);
        }
    };

    const pageNextHandler = async () => {
        const nextPageNumber = pageNumber + 1;
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a63ab02946b640f1a45559f967c8e017&page=${nextPageNumber}`;
        console.log("Fetching Next Page URL:", url);

        try {
            const response = await fetch(url);
            const parsedData = await response.json();
            console.log("Next Page Parsed Data:", parsedData);

            setArticles(parsedData.articles);
            setPageNumber(nextPageNumber);
        } catch (error) {
            console.error("Error fetching next page:", error);
        }
    };

    return (
        <>
            <Category setCategory={setCategory} setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
            <h3 className="text-center" style={{ wordSpacing: '.5rem', marginTop: '5rem' }}>
                NewziFy - Top Headlines Of The Day
            </h3>
            <div style={{ margin: '3rem', padding: '.5rem' }}>
                {error ? (
                    <div className="text-center text-danger">{error}</div>
                ) : (
                    <>
                        <div className="row">
                            {articles.map((element) => (
                                <div className="col-md-3 mb-3" key={element.url}>
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
                        <div className="container d-flex justify-content-between">
                            <button disabled={pageNumber === 1} className="btn btn-outline-dark" onClick={pagePreviousHandler}>&larr; Previous</button>
                            <button className="btn btn-outline-dark" onClick={pageNextHandler}>Next &rarr;</button>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default NewsItems;
