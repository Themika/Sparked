import Navbar from "../Components/Navbar";
import LongCard from "../Components/LongCard";
import "../Styles/Home.css";
import { useEffect } from "react";

const scrollEffect = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  const longCardElement = document.querySelector(".long-card-container");
  if (longCardElement) {
    observer.observe(longCardElement);
  }

  return () => {
    if (longCardElement) {
      observer.unobserve(longCardElement);
    }
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
          <h1>Empowering Youth Leadership for Success and Change</h1>
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
      <div className="section-area">
        <LongCard 
          title="What is Spark Podcast?" 
          text="Welcome to SPARK, the podcast where students Armaan Moom and Sagar Garg dive into the world of youth leadership, success, and the challenges we face today! Our mission is to provide insight and to inspire our generation. Let’s spark some inspiration together!" 
        />
      </div>
    </div>
  );
};

export default Home;