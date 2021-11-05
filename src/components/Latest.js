import React, { useState, useEffect } from "react";
import axios from "axios";

const Latest = () => {
  const [latestData, setLatestData] = useState([]);

  const fetchLatest = () => {
    return axios.get("https://newsapi.org/v2/everything?language=en&sortBy=publishedAt&q=a&apiKey=d0c40a3778c242da91dccb23508fa472").then((latests) => latests.data);
  };

  useEffect(() => {
    fetchLatest().then((latestResponse) => {
      console.log(latestResponse);
      setLatestData(latestResponse["articles"]);
    });
  }, []);

  return (
    <div>
      <h1 className="text-center pt-3">Latest Stories</h1>
      <h3 className="text-center pt-2 pb-5 text-primary">(Not really relevant compared to bones and belly rubs but we thought you might want to read them)</h3>
      {latestData.map((latest) => (
        <div>
          <div className="container">
            <div className="row pb-5">
              <div className="col ">
                <div className="card ">
                  <img src={latest.urlToImage} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{latest.title}</h5>
                    <p className="card-text">{latest.description}</p>
                    <p className="card-text">{latest.source.name}</p>
                    <p className="card-text">{latest.publishedAt.replace("T", " ").replace("Z", "")}</p>
                    <a href={latest.url} target="_blank" rel="noreferrer" className="btn btn-primary">
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

export default Latest;
