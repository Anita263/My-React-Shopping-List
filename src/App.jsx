import "./styles/index.sass";
import image from "./images/image.png";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="image">
      <img src={image} className="image" alt="img" />
      <div className="App">
        <Header />
        <Main />
        
      </div>
    </div>
  );
}

export default App;
