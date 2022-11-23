import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    let { title, desc, imageUrl, newsUrl, author, publishedAt, source } =
      this.props;
    return (
      <div>
        <div className="card" style={{ width: "380px" }}>
          <span
            className="position-absolute top-0 translate-middle badge bg-danger"
            style={{ zIndex: 1, left: "349px" }}
          >
            {source}
          </span>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://img.freepik.com/free-vector/global-digital-earth-network-connection-technology-background_1017-23328.jpg?w=1800&t=st=1669135478~exp=1669136078~hmac=f2a4307c7dd097821e7edd89e99d297a37744dec5a5006c1451744262e776032"
            }
            className="card-img-top"
            height="220px"
            alt="..."
          />
          <div className="card-body ">
            <h5 style={{ height: "50px" }} className="card-title">
              {title.length < 55 ? title : title.slice(0, 55) + `...`}...
            </h5>
            <p style={{ height: "95px" }} className="card-text ">
              {desc.length < 165 ? desc : desc.slice(0, 165) + `...`}
            </p>
            <hr />
            <div className="mb-2 h6 position-relative">
              <span>By : {!author ? "unknown" : author}</span>
              <span
                className="mt-1 d-flex justify-content-end position-absolute top-0"
                style={{ right: "0px" }}
              >
                <a href={newsUrl} className="btn btn-primary">
                  Visit url
                </a>
              </span>
            </div>
            <small className="text-muted">
              on : {new Date(publishedAt).toGMTString()}
            </small>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;
