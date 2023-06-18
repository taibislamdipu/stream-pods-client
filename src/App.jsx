import { useState } from "react";

import "./App.css";
import Podcast from "./components/podcast/podcast";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <Podcast />
        <Podcast />
      </div>
    </>
  );
}

export default App;
