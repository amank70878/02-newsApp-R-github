import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "./Search.js";

export class navbar extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: "default",
      search: false,
    };
  }

  handleSubmit = (event) =>{
    console.log("handleSubmit ran");
    event.preventDefault(); //prevent page refresh
    console.log(event.target.parentElement.parentElement.firstChild.value); //access input values here
    let inputvalue = event.target.parentElement.parentElement.firstChild.value;
    
    this.setState({ //set the values
      searchInput: inputvalue,
      search: true,
    });
  }

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/general">
              newsMonkey
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/business">
                    business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">
                    entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/general">
                    general
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health">
                    health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">
                    science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">
                    sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">
                    technology
                  </Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  name="first_name"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <Link to="/search">
                  <button
                    className="btn btn-outline-success"
                    type="submit"
                    onClick={this.handleSubmit}
                  >
                    Search
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </nav>
        {this.state.search === true && <Search
          key="search"
          pageContentSize={12}
          searchInput={this.state.searchInput}
        />}
      </>
    );
  }
}

export default navbar;
