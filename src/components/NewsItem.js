import React from 'react'
// import './News.css'

const NewsItem = ({item}) => {
    return (
        <div className="main">
            <div className="image">
                <img src={item.urlToImage}/>
            </div>
            <div className="lower">
            <div className="title">
               <h2>{item.title}</h2> 
            </div>
            <div className="lower">
    <p>{item.description}</p>
                <br/>
    <p>{item.content}</p>
            </div>
            <div className="author">
                <h5>Source</h5>
    <p>{item.source.name}</p><br/>
    <p>{item.publishedAt}</p>
            </div>
            </div>
        </div>
    )
}

export default NewsItem
