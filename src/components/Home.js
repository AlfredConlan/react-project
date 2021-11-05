import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [homeData, setHomeData] = useState([]);

  const fetchHome = () => {
    return axios
      .get('https://newsapi.org/v2/everything?q="dog" OR "Dog" AND "owner"&sortBy=relevancy&language=en&sortBy=publishedAt&q=a&apiKey=d0c40a3778c242da91dccb23508fa472')
      .then((homes) => homes.data);
  };

  useEffect(() => {
    fetchHome().then((homeResponse) => {
      console.log(homeResponse);
      setHomeData(homeResponse["articles"]);
    });
  }, []);

  return (
    <div>
      <h1 className="text-center pt-3 pb-5">Pippin and Sam's Daily Dog News</h1>
      {homeData.map((home) => (
        <div>
          <div className="container">
            <div className="row pb-5">
              <div className="col ">
                <div className="card ">
                  <img src={home.urlToImage} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{home.title}</h5>
                    <p className="card-text">{home.description}</p>
                    <p className="card-text">{home.source.name}</p>
                    <p className="card-text">{home.publishedAt.replace("T", " ").replace("Z", "")}</p>
                    <a href={home.url} target="_blank" rel="noreferrer" className="btn btn-primary">
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
