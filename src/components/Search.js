import React, { Component } from "react";
import NewsItems from "./Newsitems.js";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class Search extends Component {
  static defaultProps = {
    pageContentSize: 6,
    apiKey: "969abe35eedf4ce68889af56e0843b55",
  };

  static propTypes = {
    pageContentSize: PropTypes.number,
    apiKey: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      search: false,
      page: 1,
    };
  }

  async loadUrl() {
    let apiUrl = `https://newsapi.org/v2/top-headlines?q=${this.props.searchInput}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageContentSize}`;
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
        <div className="container my-2">
          <div className=" my-6 d-flex justify-content-between">
            <span className="h1">
            News Monkey : find every highlight of the world
            </span>
            <span className="mx-3">
              page : {this.state.page} /{" "}
              {Math.ceil(this.state.totalResults / this.props.pageContentSize)}
            </span>
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
          {this.state.totalResults > this.props.pageContentSize && (
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
                  Math.ceil(
                    this.state.totalResults / this.props.pageContentSize
                  )
                }
                type="button"
                className="btn btn-secondary"
                onClick={this.nextbtn}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </>
    );
  }
}
export default Search;
