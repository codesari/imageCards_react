import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Card from "./components/card/Card";
import { data } from "./helper/data.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className="container">
        {data.map((item, id) => (
          <Card {...item} key={id} />
        ))}
      </div>
    </div>
  );
}

export default App;
