import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';

export default function Home() {
    

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [blogs, setBlogs] = useState([]); 
  
  
  useEffect(() => {
    fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@pabloromanlezcano/")
      .then(res => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setBlogs(data.items);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
{
    return (
        <Layout>
      <div>
        {blogs.map(item => (
          <div>
            <div>
              <img src={item.thumbnail} width='150px' height='150px' />
            </div>
            <div>
              <a href={item.link} target="_blank">{item.title}</a>
            </div>
          </div>
        ))}
      </div>
      </Layout>
    );
  }
}