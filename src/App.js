import axios from "axios";
import { useState, useRef } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  const [animeName, setAnimeName] = useState("");
  const [episode, setEpisode] = useState("");
  const [timestamp, setTimestamp] = useState("");
  const [url, setUrl] = useState("");
  const [hiddenCard] = useState(true);
  const cardRef = useRef();

  const getUrl = (URL) => {
    setUrl(URL);
    getAnime(URL);
    toggleVisibility();
  };
  const getAnime = async (URL) => {
    axios.get(`https://api.trace.moe/search?url=${URL}`).then(
      (res) => {
        setAnimeName(res.data.result[0].filename);
        setEpisode(res.data.result[0].episode);
        setTimestamp(res.data.result[0].from);
      },
      (error) => {
        console.log("ERROR!!! " + error);
      }
    );
  };

  const parseData = () => {
    if (animeName.includes(" -")) {
      setAnimeName(
        animeName.substring(animeName.indexOf("]") + 1, animeName.indexOf(" -"))
      );
    } else if (animeName.includes("][")) {
      let name = animeName.substring(animeName.indexOf("]") + 1);
      name = name.substring(1, name.indexOf("]"));
      setAnimeName(name);
    }
  };

  const toggleVisibility = () => {
    cardRef.current.hidden = !hiddenCard;
  };

  return (
    <div>
      <Header title="Find the anime!" />
      <Input getUrl={getUrl} toggleVisibility={toggleVisibility} />
      <Card
        URL={url}
        cardRef={cardRef}
        animeName={animeName}
        episode={episode}
        timestamp={timestamp}
        parseData={parseData}
      />
      <Footer />
    </div>
  );
}

export default App;
