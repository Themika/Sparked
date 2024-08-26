import "../Styles/Card.css";
import image from "../Media/Sparked.png";

const TinyCard = () => {
  return (
    <div className="container">
      <div className="tiny-card-container">
        <article className="tiny-card-article">
          <img src={image} alt="" className="tiny-card-img" />
          <div className="tiny-card-data">
            <span className="tiny-card-content">
              <h2 className="tiny-card-title">Hadi</h2>
              <span className="tiny-card-date">
                <h4>Event Date</h4>
                <span>2024-08-12</span>
              </span>
              <div className="tiny-card-description">
                <h4>Description</h4>
                <span>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore, doloremque dolorum, quod, labore atque similique fuga
                  ut deserunt itaque vitae magnam eum recusandae culpa
                  praesentium quaerat quas consectetur asperiores dignissimos.
                </span>
              </div>
            </span>
          </div>
        </article>
      </div>
    </div>
  );
};

export default TinyCard;
