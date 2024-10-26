import React, { useEffect, useState } from 'react';
import News from './News';

function State() {
  const [news, setNews] = useState([]); // Initialize news state

  const getData = async () => {
    
      const response = await fetch(`https://newsapi.org/v2/everything?sources=bbc-news&apiKey=f04edb6d724e44b9bd9d95ee0ac738db&page=1&pageSize=10`);
      const data = await response.json();
      setNews(data.articles); 
    }

  useEffect(() => {
    getData(); 
  }, []);

  return (
    <>
      <div className="flex justify-center flex-wrap gap-10 mt-8">
        {news.map((i) => {
          return (
            <News 
              key={i.url} 
              img={i.urlToImage} 
              description={i.description.length > 80 ? i.description.slice(0, 80) : i.description} 
              title={i.title.length > 40 ? i.title.slice(0, 40) : i.title} 
            />
          );
        })}
      </div>
    </>
  );
}

export default State;
