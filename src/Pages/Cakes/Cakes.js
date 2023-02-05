import "../PagesCSS/RecipePages.css";
import CakeCards from "./CakeCards";
import SideBar from "../../Components/SideBar/SideBar";

function Cakes({ recipesData }) {
  return (
    <div className="page">
      <div className="sweets">
        <div className="middle-pages">
          <CakeCards recipesData={recipesData} />
          <SideBar />
        </div>
      </div>
    </div>
  );
}

export default Cakes;
