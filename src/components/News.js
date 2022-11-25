import React, { Component } from "react";
import NewsItems from "./Newsitems.js";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageContentSize: 6,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageContentSize: PropTypes.number,
    category: PropTypes.string,
    apiKey: PropTypes.string,
  };

  capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalize(this.props.category)} - newsMonkey`;
  }

  async loadUrl() {
    this.props.setProgress(0)
    console.log(this.state.articles.length + ' ' + this.state.totalResults)
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageContentSize}`;
    this.setState({ loading: true });
    let fetchData = await fetch(apiUrl);
    this.props.setProgress(35)
    let parsedData = await fetchData.json();
    this.props.setProgress(75)
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100)
  }

  async componentDidMount() {
    this.loadUrl();
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageContentSize}`;
    let fetchData = await fetch(apiUrl);
    let parsedData = await fetchData.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  };

  render() {
    return (
      <>

        <div className="my-4 h2 align-items-center">
          News Monkey : Top {this.capitalize(this.props.category)} - Highlights
        </div>

        { this.state.loading && <Spinner/> }

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          // hasMore={(this.state.articles.length !== this.state.totalResults)}
          hasMore={(this.state.articles.length < this.state.totalResults)}
          loader={ <Spinner />}
          style={{overflowX : "hidden"}}
        >

          <div className="row">
            {this.state.articles.map((element, index) => {
                return (  <div className="col-md-4 my-3" key={index}>
                            <NewsItems title={element.title ? element.title : ""} desc={element.content ? element.content : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name} />
                          </div>
                );
            })};
          </div>

        </InfiniteScroll>
        
      </>
    );
  }
}

export default News;
