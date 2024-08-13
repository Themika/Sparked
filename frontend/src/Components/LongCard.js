import "../Styles/longCard.css";

const LongCard = (props) => {
  const { title, text } = props;
  return (
    <div className="long-card-container">
      <div className="text">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      <div className="long-card-image">
        <img src="path/to/your/image.jpg" alt="About Spark Podcast" />
      </div>
    </div>
  );
};

export default LongCard;