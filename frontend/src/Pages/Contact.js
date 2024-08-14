import "../Styles/Contact.css";
import Navbar from "../Components/Navbar";
import podcastImage from "../Media/Sparked.png";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className="contact-card-container">
        <div className="contact-card">
          <div className="contact-card-components-container">
            <div className="contact-left-side">
              <h1>Get in touch</h1>
              <p>
                Send us a message and we will get back to you as soon as
                possible
              </p>
              <form className="contact-form">
                <input
                  type="text"
                  placeholder="Name"
                  className="contact-form-name"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="contact-form-email"
                />
                <textarea
                  placeholder="Message"
                  className="contact-form-message"
                ></textarea>
                <button>Send</button>
              </form>
            </div>
          </div>
          <div className="contact-right-side">
            <div className="contact-podcast-image">
              <img src={podcastImage} alt="Podcast" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
