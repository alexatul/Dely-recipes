import "../PagesCSS/RecipePages.css";
import FastingFoodCards from "./FastingFoodCards";
import SideBar from "../../Components/SideBar/SideBar";

function FastingFoods({ recipesData }) {
  return (
    <div className="page">
      <div className="sweets">
        <div className="middle-pages">
          <FastingFoodCards recipesData={recipesData} />
          <SideBar />
        </div>
      </div>
    </div>
  );
}

export default FastingFoods;
