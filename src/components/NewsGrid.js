import React from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
// import './News.css'

const NewsGrid = ({isLoading,news} ) => {

    console.log(`----------------jzxbckvbzxks`)
    console.log(news)
    console.log('sdhbdovblhbivad')
  return isLoading ? (
    <Spinner />
  ) : (
      <div className="container">
  
      {
          news.map((item,index)=><NewsItem key={index} item={item}></NewsItem>
          )
      }
    
   
    </div>
  );
};

export default NewsGrid;
