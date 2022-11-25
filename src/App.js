import "./App.css";
import React, { Component } from "react";
import LoadingBar from 'react-top-loading-bar'
import Navbar from "./components/Navbar.js";
import News from "./components/News.js";
// import Search from "./components/Search.js";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

export default class App extends Component {

  apikey_ = process.env.REACT_APP_NEWS_MONKEY_API_KEY;
  pageContentSize_ = 9;
  country_ = 'in';
  searchInput_ = 'india';

  state= {
    progress : 0
  }

  setProgress = (progress)=>{
    this.setState({progress: progress})
  }

  render() {
    return (
      <>
        <Router>
          <Navbar />
          
          <div className="container my-2">
            <Routes>
              <Route exact path="/" element={<News setProgress={this.setProgress} key='home' apiKey={this.apikey_} pageContentSize={this.pageContentSize_} country={this.country_} category="general" /> } />
              <Route exact path="/business" element={<News setProgress={this.setProgress} key='business' apiKey={this.apikey_} pageContentSize={this.pageContentSize_} country={this.country_} category="business" /> } />
              <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key='entertainment' apiKey={this.apikey_} pageContentSize={this.pageContentSize_} country={this.country_} category="entertainment" /> } />
              <Route exact path="/general" element={<News setProgress={this.setProgress} key='general' apiKey={this.apikey_} pageContentSize={this.pageContentSize_} country={this.country_} category="general" /> } />
              <Route exact path="/health" element={<News setProgress={this.setProgress} key='health' apiKey={this.apikey_} pageContentSize={this.pageContentSize_} country={this.country_} category="health" /> } />
              <Route exact path="/science" element={<News setProgress={this.setProgress} key='science' apiKey={this.apikey_} pageContentSize={this.pageContentSize_} country={this.country_} category="science" /> } />
              <Route exact path="/sports" element={<News setProgress={this.setProgress} key='sports' apiKey={this.apikey_} pageContentSize={this.pageContentSize_} country={this.country_} category="sports" /> } />
              <Route exact path="/technology" element={<News setProgress={this.setProgress} key='technology' apiKey={this.apikey_} pageContentSize={this.pageContentSize_} country={this.country_} category="technology" /> } />
              {/* <Route exact path="/search" element={<Search key='search' apiKey={this.apikey_} pageContentSize={this.pageContentSize_} searchInput={this.searchInput_} category={searchInput}/> } /> */}
            </Routes>
          </div>
          <LoadingBar
              color='#f11946'
              progress= {this.state.progress}
              // height={3}
          />
        </Router>
      </>
    );
  }
}

// https://newsapi.org/account
// pass: aman@1newsapi

// api key is : f3b32bf24e944fd39ae2d198bda7b75e
// hm

// api key is : 969abe35eedf4ce68889af56e0843b55
// amankaimy

// api key is : 119d3e03f37e4063b1709396d6031562
// rk5903705@gmail.com