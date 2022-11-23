import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar.js";
import News from "./components/News.js";
// import Search from "./components/Search.js";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

export default class App extends Component {
  
  // apikey_ = 'f3b32bf24e944fd39ae2d198bda7b75e';
  apikey_ = '969abe35eedf4ce68889af56e0843b55';
  pageContentSize_ = 12;
  country_ = 'in';
  searchInput_ = 'india';
  render() {
    // let { searchInput } = this.props;
    return (
      <>
        <Router>
          <Navbar />
          <div className="container my-2">
            <Routes>
              <Route exact path="/general" element={<News key='home' apiKey={this.apikey_} pageContentSize={this.pageContentSize_} country={this.country_} category="general" /> } />
              <Route exact path="/business" element={<News key='business' apiKey={this.apikey_} pageContentSize={this.pageContentSize_} country={this.country_} category="business" /> } />
              <Route exact path="/entertainment" element={<News key='entertainment' apiKey={this.apikey_} pageContentSize={this.pageContentSize_} country={this.country_} category="entertainment" /> } />
              <Route exact path="/general" element={<News key='general' apiKey={this.apikey_} pageContentSize={this.pageContentSize_} country={this.country_} category="general" /> } />
              <Route exact path="/health" element={<News key='health' apiKey={this.apikey_} pageContentSize={this.pageContentSize_} country={this.country_} category="health" /> } />
              <Route exact path="/science" element={<News key='science' apiKey={this.apikey_} pageContentSize={this.pageContentSize_} country={this.country_} category="science" /> } />
              <Route exact path="/sports" element={<News key='sports' apiKey={this.apikey_} pageContentSize={this.pageContentSize_} country={this.country_} category="sports" /> } />
              <Route exact path="/technology" element={<News key='technology' apiKey={this.apikey_} pageContentSize={this.pageContentSize_} country={this.country_} category="technology" /> } />
              {/* <Route exact path="/search" element={<Search key='search' apiKey={this.apikey_} pageContentSize={this.pageContentSize_} searchInput={this.searchInput_} category={searchInput}/> } /> */}
            </Routes>
          </div>
        </Router>
      </>
    );
  }
}

// api key is : f3b32bf24e944fd39ae2d198bda7b75e
// https://newsapi.org/account
// pass: aman@1newsapi

// api key is : 969abe35eedf4ce68889af56e0843b55
// https://newsapi.org/account
// pass: aman@1newsapi