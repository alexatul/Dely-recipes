import "./Fasting.css";
import React from "react";
import { Link } from "react-router-dom";

function Fastings() {
  return (
    <div className="fasting">
      <div className="button-fasting">
        <Link to="/fasting-sweets">
          <button>
            <span> Prajituri de post </span>
          </button>
        </Link>
      </div>
      <div className="button-fasting">
        <Link to="/fasting-foods">
          <button>
            <span> Mancaruri de post </span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Fastings;
