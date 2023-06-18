import { useState, useEffect } from "react";
import "./App.css";
import demo from "./assets/demo.mp3";
import thumbnail from "./assets/podcastThumbnail.png";

function App() {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/v1/podcast");
        if (!response.ok) {
          throw new Error("Error fetching data");
        }
        const result = await response.json();
        setPodcasts(result?.data);
      } catch (error) {
        console.log("Error:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container p-5">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {podcasts?.map((podcast, i) => (
          <div className="col" key={i}>
            <div className="card h-100">
              <img
                src={thumbnail}
                className="card-img-top"
                style={{ height: "500px" }}
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{podcast?.title}</h5>
                <p className="card-text">{podcast?.description}</p>
                <div>
                  <audio controls>
                    <source src={demo} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
