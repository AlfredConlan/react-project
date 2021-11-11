import React, { useState, useEffect } from "react";
import axios from "axios";

const Headlines = (props) => {
  const [headlineData, setHeadlineData] = useState([]);

  useEffect(() => {
    let queryString = "";

    if (props.searchValue !== "" && props.searchValue !== null) {
      console.log("inside If Statement True");
      console.log(props.searchValue);
      queryString = props.searchValue;
    } else {
      console.log("inside If Statement False");
      queryString = "united states";
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

    const fetchHeadlines = () => {
      return axios.request(options).then((headlines) => headlines.data);
    };

    fetchHeadlines().then((headlineResponse) => {
      // remove duplicates
      const newArray = headlineResponse["articles"].filter((v, i, a) => a.findIndex((t) => t.title === v.title) === i);

      setHeadlineData(newArray);
    });
  }, [props.searchValue]);

  return (
    <div>
      <h1 className="text-center pt-3 pb-5">Headlines About Our Humans</h1>
      {headlineData.map((headline) => (
        <div>
          <div className="container">
            <div className="row pb-5">
              <div className="col ">
                <div className="card ">
                  <img src={headline.media} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{headline.title}</h5>
                    <p className="card-text">{headline.summary}</p>
                    <p className="card-text">{headline.author}</p>
                    <p className="card-text">{headline.published_date}</p>
                    <a href={headline.link} target="_blank" rel="noreferrer" className="btn btn-primary">
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
