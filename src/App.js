import React, { useState, useEffect } from "react";

// import "./App.css";
import Header from "./components/Header";
import NewsGrid from "./components/NewsGrid";
import Axios from "axios";
// import Search from "./components/Search";

function App() {
  // const [value, setValue] = useState("");
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // let mounted=true
   Axios.get(`http://newsapi.org/v2/top-headlines?country=in&apiKey=05e860d20e5548f49fde01598290c05c`)
    .then(response=>{
      const LatestNews=response.data.articles;
      setNews(LatestNews)
      setIsLoading(false)
    })  
    .catch(err=>console.log(err))
  }, []);

  return (
    <>
      <Header />
      {/* <Search getValue={(v) => setValue(v)} /> */}
      <NewsGrid isLoading={isLoading} news={news} />
    </>
  );
}

export default App;
