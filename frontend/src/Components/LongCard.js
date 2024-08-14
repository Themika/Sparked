import "../Styles/longCard.css";
import upArrow from "../Media/Sparked.png";

const LongCard = (props) => {
  const { title, text, variant } = props;
  const containerClass = variant === "right" ? "long-card-container right" : "long-card-container left";

  return (
    <div className={containerClass}>
      <div className="text">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      
      <div className="long-card-image">
        <div className="hash1"></div>
        <div className="hash2"></div>
        <div className="hash3"></div>
        <img src={upArrow} alt="About Spark Podcast" />
      </div>
    </div>
  );
};

export default LongCard;
