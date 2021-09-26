import "./styles.css";

var welcomeMessage = "HEY, Goodmorning ";
// var username=prompt("Give me your name")
var color = "blue";
var username = "kum somi";
export default function App() {
  return (
    <div className="App">
      <h1>
        {welcomeMessage}
        <span style={{ color: color }}>{username}</span>
      </h1>
    </div>
  );
}
