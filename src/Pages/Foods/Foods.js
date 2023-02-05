import "../PagesCSS/RecipePages.css";
import FoodCards from "./FoodCards";
import SideBar from "../../Components/SideBar/SideBar";

function Foods({ recipesData }) {
  return (
    <div className="page">
      <div className="foods">
        <div className="middle-pages">
          <FoodCards recipesData={recipesData} />
          <SideBar />
        </div>
      </div>
    </div>
  );
}

export default Foods;
