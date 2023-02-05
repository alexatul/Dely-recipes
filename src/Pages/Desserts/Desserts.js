import "./Desserts.css";
import React from "react";
import { Link } from "react-router-dom";

function Desserts() {
  return (
    <div className="desserts">
      <div className="button-desserts">
        <Link to="/sweets">
          <button>
            <span> Prajituri </span>
          </button>
        </Link>
      </div>
      <div className="button-desserts">
        <Link to="/cakes">
          <button>
            <span> Torturi </span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Desserts;
