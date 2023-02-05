import "./Cards.css";
import { BsInfoCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { recipesData } from "../../recipesData";

function Cards() {
  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
  const newList = shuffle(recipesData);

  return (
    <div className="cards">
      {newList.slice(1, 7).map((recipes) => {
        return (
          <article key={recipes.id} className="card-container">
            <div className="card-describe">
              <div className="card-image">
                <img src={recipes.image} alt={recipes.title} />
                <h1 className="overlay">{recipes.title}</h1>
              </div>
              <p>{recipes.describe}</p>
              <div className="button-more">
                <Link
                  className="card-more-info"
                  to={`/sweets/${recipes.title}`}
                >
                  <button className="button-card">
                    <BsInfoCircle className="card-button-info" />
                    <span> Mai Multe </span>
                  </button>
                </Link>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default Cards;
