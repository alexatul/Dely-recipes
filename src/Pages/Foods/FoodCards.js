import "../PagesCSS/RecipeCards.css";
import { Link } from "react-router-dom";
import { BsInfoCircle } from "react-icons/bs";

function FoodCards({ recipesData }) {
  return (
    <>
      {" "}
      <div className="sweet-cards">
        <article className="sweet-container">
          {recipesData
            .filter((recipe) => recipe.category === "foods")
            .map((recipes) => {
              return (
                <div
                  className="sweet-describe"
                  key={recipes.id}
                  ingredients={recipes.ingredients}
                >
                  <div className="sweets-cards-image">
                    <img src={recipes.image} alt={recipes.title} />
                  </div>
                  <div className="sweet-card-text">
                    <Link to={`/foods/${recipes.title}`}>{recipes.title}</Link>
                    <p>{recipes.describe}</p>
                    <div className="button-more slide-inside">
                      <Link
                        className="card-more-info"
                        to={`/foods/${recipes.title}`}
                      >
                        <button className="button-card">
                          <BsInfoCircle className="card-button-info" />
                          Mai Multe
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
        </article>
      </div>
    </>
  );
}

export default FoodCards;
