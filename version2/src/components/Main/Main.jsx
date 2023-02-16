import Cards from "../Cards/Cards";
import { data } from "../../data/data";
import "./Main.scss";

const Main = () => {
  return (
    <>
      <h1>Akçakoca Gezilecek Yerler</h1>

      <div className="all-cards">
        {data.map((item, index) => (
          <Cards {...item} key={index} />
        ))}
      </div>
    </>
  );
};

export default Main;
