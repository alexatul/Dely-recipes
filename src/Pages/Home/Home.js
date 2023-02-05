import "./Home.css";
import Cards from "../../Components/Cards/Cards";
import SideBar from "../../Components/SideBar/SideBar";
import FilterIngredients from "../../Components/FilterIngredients/Filteringredients";
import Carousel3d from "../../Components/Carousel/Carousel";

function Home() {
  return (
    <div className="home">
      <div className="middle-home">
        <Cards />
        <SideBar />
      </div>
      <FilterIngredients />
      <Carousel3d />
    </div>
  );
}

export default Home;
