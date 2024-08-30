import "../Styles/Component Styles/Card.css";
import Sparked from "../Media/Sparked.png";
import Play from "../Media/Play.svg"
import Options from "../Media/Options.svg"
const Card = () => {
  const imageUrl = `url(${Sparked})`;

  return (
    <div className="card-container" style={{ "--card-image": imageUrl }}>
      <div className="card-image">
        <img src={Sparked} alt="placeholder" />
      </div>
      <div className="card-content">
        <div className="card-date">Aug 2, 2024</div>
        <h3 className="card-title">Hadi?</h3>
        <p className="card-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores fuga
          omnis corrupti minus modi expedita consectetur, iusto assumenda
          impedit, eum earum ratione voluptatibus. Rem minus voluptate deserunt
          veritatis qui voluptates.
        </p>
        <div className="card-footer">
          <div className="icon">
            <img src={Play} alt="play icon" />
            <span>47M</span>
          </div>
          <div className="icon">
            <img src={Options} alt="more options icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
