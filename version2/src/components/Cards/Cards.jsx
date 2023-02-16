import "./Cards.scss";

const Cards = (data) => {
  //   console.log(data);
  const { title, desc, image } = data;
  return (
    <section>
      <div>
        <h2>{title}</h2>
      </div>
      <div className="img-div">
        <img src={image} />
        <div className="p-div">
          <p>{desc}</p>
        </div>
      </div>
    </section>
  );
};

export default Cards;
