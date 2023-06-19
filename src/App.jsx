import { useState, useEffect } from "react";
import "./App.css";
import thumbnail from "./assets/podcastThumbnail.png";
import audioFile from "./assets/demo.mp3";
import { ImHeadphones } from "react-icons/im";

function App() {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/podcast`
        );
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
    <div className="container py-5">
      <h2 className="py-3">Latest episodes</h2>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {podcasts?.map((podcast, i) => (
          <div className="col" key={i}>
            <div className="card h-100">
              <img
                src={thumbnail}
                className="card-img-top object-fit-contain"
                alt="thumbnail"
                loading="lazy"
              />
              <div className="card-body">
                <p className="card-title text-success d-flex align-items-center gap-1">
                  <ImHeadphones />
                  {podcast?.title}
                </p>
                <h5 className="card-text">{podcast?.description}</h5>

                <div className="overflow-hidden overflow-sm-scroll">
                  <audio controls>
                    <source src={audioFile} type="audio/mpeg" />
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
