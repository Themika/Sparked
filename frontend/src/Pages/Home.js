import Card from "../Components/Card";
import Navbar from "../Components/Navbar";
import LongCard from "../Components/longCard";
import "../Styles/Page Styles/Home.css";
import "../Styles/Animation.css"
import { useEffect } from "react";

const scrollEffect = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");

          setTimeout(() => {
            entry.target.classList.add("show-hash");
          }, 4000); 
        } else {
          entry.target.classList.remove("visible");
          entry.target.classList.remove("show-hash");
        }
      });
    },
    { threshold: 0.01 }
  );

  const cardElements = document.querySelectorAll(
    ".long-card-container.left, .long-card-container.right, .recent-episodes"
  );
  cardElements.forEach((el) => {
    observer.observe(el);
  });

  return () => {
    cardElements.forEach((el) => {
      observer.unobserve(el);
    });
  };
};
const Home = () => {
  useEffect(() => {
    const cleanup = scrollEffect();
    return cleanup;
  }, []);

  return (
    <div className="Home-page">
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className="hero-container">
        <div className="left-side">
          <h1>Ignite Your Passion, Lead with Purpose</h1>
          <p>Watch, Learn and keep up to date</p>
          <button>Learn more</button>
        </div>
        <div className="right-side">
          <div className="logo-container">
            <h1>SPARK</h1>
            <p>PODCAST</p>
          </div>
        </div>
      </div>
      <div className="about-area">
        <LongCard
          title="What is Spark Podcast?"
          text="Welcome to SPARK, the podcast where students Armaan Moom and Sagar Garg dive into the world of youth leadership, success, and the challenges we face today! Our mission is to provide insight and to inspire our generation. Let’s spark some inspiration together!"
        />
      </div>
      <div className="recent-episodes">
        <div className="recent-episodes-content">
          <h1 className="recent-episodes-h1">Recent Episodes</h1>
          <div className="recent-episodes-cards">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className="hash1"></div>
      </div>
      <div className="why-listen-area">
        <LongCard
          title="Why Listen to Spark Podcast?"
          text="Discover stories from individuals who have made a significant impact and let their journeys motivate you to embark on your own path. Access practical advice and strategies that cover leadership, personal growth, and overcoming challenges, helping you navigate your own journey with confidence.Become part of a vibrant community of like-minded individuals dedicated to making a difference, sharing experiences, and supporting each other’s aspirations."
          variant="right"
        />
      </div>
      <div className="hosts-area">
        <LongCard
          title="Join the Community"
          text="Join a every growing community of like-minded individuals who are dedicated to making a difference, sharing experiences, and supporting each other’s aspirations. We are here to help you navigate your own journey with confidence."
          variant="left"
        />
      </div>
    </div>
  );
};

export default Home;
