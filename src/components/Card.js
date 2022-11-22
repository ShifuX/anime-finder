const Card = ({ URL, cardRef, animeName, episode, timestamp, parseData }) => {
  parseData();
  let min = Math.floor(timestamp / 60);
  let sec = Math.floor(timestamp % 60);

  return (
    <div ref={cardRef} className="card-container" hidden>
      <div className="inner-card">
        <img id="card-img" src={URL} alt="Your anime" />
        <h2 id="name-header">{animeName}</h2>
        <ul id="detail-list">
          <li>Episode: {episode}</li>
          <li>
            Time Stamp: {min} min : {sec} sec
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
