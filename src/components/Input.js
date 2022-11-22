import { useState } from "react";
import Button from "./Button";

const Input = ({ getUrl }) => {
  const [imgUrl, setUrlImg] = useState("");

  const onSearch = () => {
    if (!imgUrl) {
      return;
    }

    getUrl(imgUrl);
  };

  return (
    <div className="container">
      <label htmlFor="url-input" className="container-label">
        Image URL:
      </label>
      <input
        className="container-input"
        type="text"
        id="anime-url"
        name="url-input"
        value={imgUrl}
        onChange={(e) => setUrlImg(e.target.value)}
        onClick={() => setUrlImg("")}
      />
      <Button text="Search" onSearch={onSearch} />
    </div>
  );
};

export default Input;
