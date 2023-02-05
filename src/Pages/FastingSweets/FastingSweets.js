import "../PagesCSS/RecipePages.css";
import FastingSweetsCards from "./FastingSweetCards";
import SideBar from "../../Components/SideBar/SideBar";

function FastingSweets({ recipesData }) {
  return (
    <div className="page">
      <div className="sweets">
        <div className="middle-pages">
          <FastingSweetsCards recipesData={recipesData} />
          <SideBar />
        </div>
      </div>
    </div>
  );
}

export default FastingSweets;
