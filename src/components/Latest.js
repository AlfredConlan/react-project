import React, { useState, useEffect } from "react";
import axios from "axios";

const Latest = (props) => {
  const [latestData, setLatestData] = useState([]);

  useEffect(() => {
    let queryString = "";

    if (props.searchValue !== "" && props.searchValue !== null) {
      console.log("inside If Statement True");
      console.log(props.searchValue);
      queryString = props.searchValue;
    } else {
      console.log("inside If Statement False");
      queryString = "a";
    }

    var options = {
      method: "GET",
      url: "https://free-news.p.rapidapi.com/v1/search",
      params: { q: queryString, lang: "en" },
      headers: {
        "x-rapidapi-host": "free-news.p.rapidapi.com",
        "x-rapidapi-key": "4b815dbaa8msh9c9083875ac51c9p12bd19jsnb28650bdc115",
      },
    };

    const fetchLatest = () => {
      return axios.request(options).then((latest) => latest.data);
    };

    fetchLatest().then((latestResponse) => {
      // remove duplicates
      const newArray = latestResponse["articles"].filter((v, i, a) => a.findIndex((t) => t.title === v.title) === i);

      setLatestData(newArray);
    });
  }, [props.searchValue]);

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
                  <img src={latest.media} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{latest.title}</h5>
                    <p className="card-text">{latest.summary}</p>
                    <p className="card-text">{latest.author}</p>
                    <p className="card-text">{latest.published_date}</p>
                    <a href={latest.link} target="_blank" rel="noreferrer" className="btn btn-primary">
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
