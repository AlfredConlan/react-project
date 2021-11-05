import React, { useState, useEffect } from "react";
import axios from "axios";

const Headlines = () => {
  const [headlineData, setHeadlineData] = useState([]);

  const fetchHeadlines = () => {
    return axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=d0c40a3778c242da91dccb23508fa472").then((headlines) => headlines.data);
  };

  useEffect(() => {
    fetchHeadlines().then((headlineResponse) => {
      setHeadlineData(headlineResponse["articles"]);
    });
  }, []);

  return (
    <div>
      <h1 className="text-center pt-3 pb-5">Headlines About Our Humans</h1>
      {headlineData.map((headline) => (
        <div>
          <div className="container">
            <div className="row pb-5">
              <div className="col ">
                <div className="card ">
                  <img src={headline.urlToImage} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{headline.title}</h5>
                    <p className="card-text">{headline.description}</p>
                    <a href={headline.url} className="btn btn-primary">
                      View Full Article
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Headlines;
