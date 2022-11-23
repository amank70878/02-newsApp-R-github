import React, { Component } from "react";
import NewsItems from "./Newsitems.js";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageContentSize: 6,
    category: "general",
    apiKey: "969abe35eedf4ce68889af56e0843b55",
  };

  static propTypes = {
    country: PropTypes.string,
    pageContentSize: PropTypes.number,
    category: PropTypes.string,
    apiKey: PropTypes.string,
  };
  
  capitalize = (word)=>{
    return word.charAt(0).toUpperCase() +  word.slice(1)
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
    };
    document.title = `${this.capitalize(this.props.category)} - newsMonkey`
  }

  async loadUrl() {
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageContentSize}`;
    this.setState({ loading: true });
    let fetchData = await fetch(apiUrl);
    let parsedData = await fetchData.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.loadUrl();
  }

  prevbtn = async () => {
    this.setState({ page: this.state.page - 1 });
    this.loadUrl();
  };

  nextbtn = async () => {
    this.setState({ page: this.state.page + 1 });
    this.loadUrl();
  };

  render() {
    return (
      <>
        <div className="container">
          <div className=" my-4 d-flex justify-content-between align-items-center">
            <span className="h1">
              News Monkey : Top {this.capitalize(this.props.category)} - Highlights
            </span>
            <span className="mx-3">page : {this.state.page} / {Math.ceil(this.state.totalResults/this.props.pageContentSize)}</span>
          </div>
          {this.state.loading && <Spinner />}
          <div className="row">
            {!this.state.loading &&
              this.state.articles.map((element) => {
                return (
                  <div className="col-md-4 my-3" key={element.url}>
                    <NewsItems
                      title={element.title ? element.title : ""}
                      desc={element.content ? element.content : ""}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      publishedAt={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
          </div>
          <div className="container my-2 d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-secondary"
              onClick={this.prevbtn}
            >
              Previous
            </button>
            <button
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageContentSize)
              }
              type="button"
              className="btn btn-secondary"
              onClick={this.nextbtn}
            >
              Next
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default News;
