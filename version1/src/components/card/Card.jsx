import "./Card.scss";

const Card = (data) => {
  console.log("ne geldi", data);
  const { desc, image, title } = data;
  return (
    <div className="card">
      <div className="title">{title}</div>
      <div className="image">
        <img src={image} alt="notfound" />
        <div className="desc">{desc}</div>
      </div>
    </div>
  );
};
export default Card;
