import "../PagesCSS/RecipeSingleCard.css";
import React from "react";
import { useParams } from "react-router-dom";
import SideBar from "../../Components/SideBar/SideBar";
import StarReviews from "../../Components/StarReviews/StarReviews";
import { TbToolsKitchen2 } from "react-icons/tb";
import { BsClock } from "react-icons/bs";

function FoodSingle({ recipesData }) {
  const { title } = useParams();

  return (
    <div className="sweet-recipe">
      {recipesData
        .filter((recipe) => recipe.title === title)
        .map((recipe) => {
          return (
            <div key={recipe.id} className="container-recipe">
              <div className="single-recipe-page">
                <div className="single-recipe">
                  <h1 className="title-recipe">{recipe.title}</h1>
                  <div className="recipe-image">
                    <img
                      className="recipe-image"
                      src={recipe.img1}
                      alt={recipe.title}
                    />
                  </div>
                  <div className="star-rating">
                    <StarReviews />
                  </div>
                  <div className="summary-recipe">
                    <div className="recipe-time">
                      <div className="recipe-line">
                        <div className="recipe-line-left"></div>
                        <BsClock className="recipe-icon clock" />
                        <div className="recipe-line-right"></div>
                      </div>
                      <div className="time">
                        <span className="necessary-time">Timp necesar</span>
                        <span>{recipe.time}</span>
                      </div>
                    </div>
                    <div className="recipe-servings">
                      <div className="recipe-line">
                        <div className="recipe-line-left"></div>
                        <TbToolsKitchen2 className="recipe-icon meal" />
                        <div className="recipe-line-right"></div>
                      </div>
                      <div className="servings">
                        <span className="number-servings">Portii</span>
                        <span>{recipe.servings}</span>
                      </div>
                    </div>
                  </div>

                  <div className="recipe-ingredients">
                    <h3>INGREDIENTE</h3>
                    {recipe.ingredients &&
                      recipe.ingredients.map((ingred, index) => (
                        <div key={index} className="recipe-ingredients-list">
                          <ul>
                            <li>
                              {ingred.quantity}&nbsp; {ingred.name}
                            </li>
                          </ul>
                        </div>
                      ))}
                  </div>

                  <div className="recipe-description">
                    <h3>MOD DE PREPARARE</h3>
                    <p>{recipe.text1}</p>
                    <p>{recipe.text2}</p>
                    <p>{recipe.text3}</p>
                    <p>{recipe.text4}</p>
                  </div>
                </div>
                <SideBar />
              </div>
              <div className="recipe-images">
                <div className="horizontal-image">
                  <img src={recipe.img2} alt="image2-recipe" />
                </div>
                <div className="vertical-image">
                  <img src={recipe.img1} alt="image3-recipe" />
                </div>
                <div className="big-image">
                  <img src={recipe.img4} alt="image4-recipe" />
                </div>
                <div className="vertical-image">
                  <img src={recipe.img5} alt="image5-recipe" />
                </div>
                <div className="big-image">
                  <img src={recipe.img6} alt="image6-recipe" />
                </div>
                <div className="horizontal-image">
                  <img src={recipe.img3} alt="image7-recipe" />
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
export default FoodSingle;
