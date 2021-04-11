import React from "react";
import "./styles.css";

const HomePage = () => {
  return (
    <div id="main">
      <div className="container-header">
        <h1 style={{ color: "#fff" }}>Verzel</h1>
        <div>
          <button type="submit" className="button-sign-in">
            <a href="/login">Sign in</a>
          </button>
          <button type="submit" className="button-sign-up">
            <a href="/register">Sign up</a>
          </button>
        </div>
      </div>
      <div className="container-text">
        <div className="container-text-header">
          <h1
            style={{
              color: "#fff",
            }}
          >
            Where the world builds software
          </h1>
          <h2 style={{ color: "#fff" }}>
            Millions of developers and companies build, ship, and maintain their
            software on GitHub—the largest and most advanced development
            platform in the world. Millions of developers and companies build,
            ship, and maintain their software on GitHub—the largest and most
            advanced development platform in the world. Millions of developers
            and companies build, ship, and maintain their software on GitHub—the
            largest and most advanced development platform in the world.
          </h2>
        </div>
        <img
          src="https://github.githubassets.com/images/modules/site/home/globe.jpg"
          alt=""
          className="img-moon"
        />
      </div>
      <img
        className="home-hero-glow"
        src="https://github.githubassets.com/images/modules/site/home/hero-glow.svg"
        alt=""
      />
    </div>
  );
};

export default HomePage;
