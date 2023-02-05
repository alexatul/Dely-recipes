import "../PagesCSS/RecipePages.css";
import SweetCards from "./SweetCards";
import SideBar from "../../Components/SideBar/SideBar";

function Sweets({ recipesData }) {
  return (
    <div className="page">
      <div className="sweets">
        <div className="middle-pages">
          <SweetCards recipesData={recipesData} />
          <SideBar />
        </div>
      </div>
    </div>
  );
}

export default Sweets;
