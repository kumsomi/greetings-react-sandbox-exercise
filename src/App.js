import { useState } from "react";
import "./styles.css";

var welcomeMessage = "HEY, Goodmorning ";
var username = prompt("Give me your name");
var color = "blue";

//useState variable and setter

export default function App() {
  const [likeCounter, setLikeCounter] = useState(0);

  function likeClickHandler() {
    var likeCounters = likeCounter + 1;
    setLikeCounter(likeCounters);
  }

  return (
    <div className="App">
      <h1>
        {welcomeMessage}
        <span style={{ color: color }}>{username}</span>
      </h1>
      <button onClick={likeClickHandler}>Like Me</button>
      {likeCounter}
    </div>
  );
}
