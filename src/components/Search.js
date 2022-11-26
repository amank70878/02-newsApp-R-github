import React, { useState, useEffect } from "react";
import NewsItems from "./Newsitems.js";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const Search = (props) => {

  // const capitalize = (word) => {
  //   return word.charAt(0).toUpperCase() + word.slice(1);
  // };

  const [articles, setarticles] = useState([])
  const [totalResults, settotalResults] = useState(0)
  const [loading, setloading] = useState(true)
  // const [search, setSearch] = useState(true)
  const [page, setpage] = useState(1)

  const loadUrl = async()=> {
    // props.setProgress(0)
    let apiUrl = `https://newsapi.org/v2/top-headlines?q=${props.searchInput}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageContentSize}`;
    setloading(true)
    let fetchData = await fetch(apiUrl);
    // props.setProgress(35)
    let parsedData = await fetchData.json();
    // props.setProgress(75)

    setarticles(parsedData.articles)
    settotalResults(parsedData.totalResults)
    setloading(false)
    // props.setProgress(100)
  }

  useEffect(() => {
    loadUrl();
    // document.title = `${capitalize(props.category)} - newsMonkey`;
    document.title = `${props.category} - newsMonkey`;
    // eslint-disable-next-line 
  }, [])
  
  const fetchMoreData = async () => {
    // let apiUrl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageContentSize}`;
    let apiUrl = `https://newsapi.org/v2/top-headlines?q=${props.searchInput}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageContentSize}`;
    setpage(page+1)
    let fetchData = await fetch(apiUrl);
    let parsedData = await fetchData.json();

    setarticles(articles.concat(parsedData.articles))
    settotalResults(parsedData.totalResults)
    console.log(articles.length + '  ' + totalResults)

  };
  
  return (
    <>
      <div style={{marginTop: '65px'}}></div>
      <h1 className="my-4 h2 align-items-center">
        News Monkey : search for :-  {props.searchInput} 
      </h1>

      { loading && <Spinner/> }

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={(articles.length !== totalResults)}
        loader={ <Spinner />}
        style={{overflowX : "hidden"}}
      >

        <div className="row">
          {articles.map((element, index) => {
              return (  <div className="col-md-4 mb-3" key={index}>
                          <NewsItems title={element.title ? element.title : ""} desc={element.content ? element.content : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name} />
                        </div>
              );
          })};
        </div>

      </InfiniteScroll>
      
    </>
  );
}

Search.defaultProps = {
  pageContentSize: 6,
  apiKey: "969abe35eedf4ce68889af56e0843b55",
};

Search.propTypes = {
  pageContentSize: PropTypes.number,
  apiKey: PropTypes.string,
};

export default Search;
