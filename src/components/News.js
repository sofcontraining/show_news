import React, { useState, useEffect } from 'react'
import Newsitem from './Newsitem'

export default function News() {


  const [articles, setArticles] = useState([])

  const fetchData = async () => {
    const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4ac841428ad44f8691a2d63ba0d94af6")
    // console.log(response)
    const data = await response.json()
    // console.log(data)
    setArticles(data.articles)
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    // <>
    // {articles.map((element)=>{
    //   console.log(element)
    // })}
    // </>
    <div className='container my-4'>
      <h1>Top News Headlines</h1>
      <div className='row my-3'>
        {
          articles.map(element => {
            return <div className='col-md-4'>
              <Newsitem key={element.url} title={element.title} description={element.description} urlToImage={element.urlToImage} url={element.url}/>
            </div>
          })
        }
        {/* <Newsitem key={articles.url} title={articles.title} description={articles.description} urlToImage={articles.urlToImage} /> */}
      </div>
    </div>
  )
}
