import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <img src="/images/hero.jpg" alt="hero cake" />
      <div className="hero-title">
        <h1 className="hero-title-big">Dely's</h1>
        <h3 className="hero-title-small">recipes</h3>
      </div>
    </div>
  );
}

export default Hero;
