import "./Carousel.css";

function Carousel3d() {
  return (
    <div className="carousel3d">
      <div className="slider">
        <span style={{ "--i": 1 }}>
          <img alt="Tiramisu" src="/images/tiramisu.jpg" />
        </span>
        <span style={{ "--i": 2 }}>
          <img alt="Ciorba de perisoare" src="/images/ciorba-perisoare.jpg" />
        </span>
        <span style={{ "--i": 3 }}>
          <img alt="Paleuri" src="/images/paleuri.jpg" />
        </span>
        <span style={{ "--i": 4 }}>
          <img alt="Foccacia" src="/images/focaccia-post.jpg" />
        </span>
        <span style={{ "--i": 5 }}>
          <img alt="Tort cu cafea" src="/images/tort-cafea6.jpg" />
        </span>
        <span style={{ "--i": 6 }}>
          <img alt="Paste carbonara" src="/images/paste-carbonara.jpg" />
        </span>
        <span style={{ "--i": 7 }}>
          <img alt="Tort trio" src="/images/tort-trio6.jpg" />
        </span>
        <span style={{ "--i": 8 }}>
          <img alt="Tort cu ciocolata alba" src="/images/tort-cioco-alba.jpg" />
        </span>
      </div>
    </div>
  );
}

export default Carousel3d;
