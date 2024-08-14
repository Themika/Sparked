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

  const cardElements = document.querySelectorAll(
    ".long-card-container.left, .long-card-container.right"
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
      <div className="hosts-area">
        <LongCard
          title="Meet the Hosts"
          text="Get to know Armaan Moom and Sagar Garg, the passionate hosts of SPARK Podcast. How they bring their unique perspectives and experiences to every episode, sparking insightful discussions and engaging with inspiring guests."
          variant="right"
        />
      </div>
      <div className="why-listen-area">
        <LongCard
          title="Why Listen to Spark Podcast?"
          text="Discover stories from individuals who have made a significant impact and let their journeys motivate you to embark on your own path. Access practical advice and strategies that cover leadership, personal growth, and overcoming challenges, helping you navigate your own journey with confidence.Become part of a vibrant community of like-minded individuals dedicated to making a difference, sharing experiences, and supporting each other’s aspirations."
          variant="left"
        />
      </div>
      <div className="Join-the-community">
        <LongCard
          title="Join the Community"
          text="Join the SPARK community and connect with like-minded individuals who share your passion for leadership, success, and personal growth. Stay updated on the latest episodes, events, and opportunities to engage with the SPARK community. Share your thoughts, ideas, and experiences, and be part of a supportive network that inspires and empowers you to achieve your goals."
          variant="right"
        />
      </div>
    </div>
  );
};

export default Home;
