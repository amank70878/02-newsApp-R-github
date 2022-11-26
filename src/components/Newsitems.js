import React from "react";

const NewsItems = (props) => {
    return (
      <div className="my-3">
        <div className="card" style={{ width: "380px",}}>
          <div style={{ zIndex: 100,  position: 'absolute', top: '0px', right: '-37px' }}>
            <span className="translate-middle badge bg-danger">{props.source} </span>
          </div>
          <img
            src={
              props.imageUrl
                ? props.imageUrl
                : "https://img.freepik.com/free-vector/global-digital-earth-network-connection-technology-background_1017-23328.jpg?w=1800&t=st=1669135478~exp=1669136078~hmac=f2a4307c7dd097821e7edd89e99d297a37744dec5a5006c1451744262e776032"
            }
            className="card-img-top"
            height="220px"
            alt="..."
          />
          <div className="card-body ">
            <h5 style={{ height: "50px" }} className="card-title">
              {props.title.length < 55 ? props.title : props.title.slice(0, 55) + `...`}...
            </h5>
            <p style={{ height: "95px" }} className="card-text ">
              {props.desc.length < 165 ? props.desc : props.desc.slice(0, 165) + `...`}
            </p>
            <hr />
            <div className="mb-2 h6 position-relative">
              <span>By : {!props.author ? "unknown" : props.author}</span>
              <span
                className="mt-1 d-flex justify-content-end position-absolute top-0"
                style={{ right: "0px" }}
              >
                <a href={props.newsUrl} className="btn btn-primary">
                  Visit url
                </a>
              </span>
            </div>
            <small className="text-muted">
              on : {new Date(props.publishedAt).toGMTString()}
            </small>
          </div>
        </div>
      </div>
    );
  }

export default NewsItems;
