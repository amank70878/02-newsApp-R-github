import "./App.css";
import React, { useState } from "react";
import LoadingBar from 'react-top-loading-bar'
import Navbar from "./components/Navbar.js";
import News from "./components/News.js";
// import Search from "./components/Search.js";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

const App = (props) => {

  let apikey_ = process.env.REACT_APP_NEWS_MONKEY_API_KEY;
  let pageContentSize_ = 9;
  let country_ = 'in';
  // let searchInput_ = 'india';
  const [progress, setProgress] = useState(0)


    return (
      <>
        <Router>
          <Navbar />
          
          <div className="container my-2">
            <Routes>
              <Route exact path="/" element={<News setProgress={setProgress} key='home' apiKey={apikey_} pageContentSize={pageContentSize_} country={country_} category="general" /> } />
              <Route exact path="/business" element={<News setProgress={setProgress} key='business' apiKey={apikey_} pageContentSize={pageContentSize_} country={country_} category="business" /> } />
              <Route exact path="/entertainment" element={<News setProgress={setProgress} key='entertainment' apiKey={apikey_} pageContentSize={pageContentSize_} country={country_} category="entertainment" /> } />
              <Route exact path="/general" element={<News setProgress={setProgress} key='general' apiKey={apikey_} pageContentSize={pageContentSize_} country={country_} category="general" /> } />
              <Route exact path="/health" element={<News setProgress={setProgress} key='health' apiKey={apikey_} pageContentSize={pageContentSize_} country={country_} category="health" /> } />
              <Route exact path="/science" element={<News setProgress={setProgress} key='science' apiKey={apikey_} pageContentSize={pageContentSize_} country={country_} category="science" /> } />
              <Route exact path="/sports" element={<News setProgress={setProgress} key='sports' apiKey={apikey_} pageContentSize={pageContentSize_} country={country_} category="sports" /> } />
              <Route exact path="/technology" element={<News setProgress={setProgress} key='technology' apiKey={apikey_} pageContentSize={pageContentSize_} country={country_} category="technology" /> } />
              {/* <Route exact path="/search" element={<Search setProgress={setProgress} key='search' apiKey={apikey_} pageContentSize={pageContentSize_} searchInput='india'/> } /> */}
              {/* <Route exact path="/search" element={<Search setProgress={setProgress} key="search" apiKey={apikey_} pageContentSize={pageContentSize_} searchInput={'india'} />}/> */}
            </Routes>
          </div>
          <LoadingBar
              color='#f11946'
              progress= {progress}
          />
        </Router>
      </>
    );
}

export default App;




// https://newsapi.org/account
// pass: aman@1newsapi
// to chk the wokring https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=969abe35eedf4ce68889af56e0843b55

// api key is : f3b32bf24e944fd39ae2d198bda7b75e
// hm
// api key is : 969abe35eedf4ce68889af56e0843b55
// amankaimy
// api key is : 119d3e03f37e4063b1709396d6031562
// rk5903705@gmail.com