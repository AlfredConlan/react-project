import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = (props) => {
  const [homeData, setHomeData] = useState([]);

  useEffect(() => {
    let queryString = "";

    if (props.searchValue !== "" && props.searchValue !== null) {
      queryString = "dog AND " + props.searchValue;
    } else {
      queryString = "dog AND owner NOT china NOT attack NOT dead";
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

    const fetchHome = () => {
      return axios.request(options).then((homes) => homes.data);
    };

    fetchHome().then((homeResponse) => {
      // remove duplicates
      const newArray = homeResponse["articles"].filter((v, i, a) => a.findIndex((t) => t.title === v.title) === i);

      setHomeData(newArray);
    });
  }, [props.searchValue]);

  return (
    <div>
      <h1 className="text-center pt-3 pb-5">Pippin and Sam's Daily Dog News</h1>
      {homeData.map((home) => (
        <div>
          <div className="container">
            <div className="row pb-5">
              <div className="col ">
                <div className="card ">
                  <img src={home.media} className="card-img-top p-5" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{home.title}</h5>
                    <p className="card-text">{home.summary}</p>
                    <p className="card-text">{home.author}</p>
                    <p className="card-text">{home.published_date}</p>
                    <a href={home.link} target="_blank" rel="noreferrer" className="btn btn-primary">
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

export default Home;
