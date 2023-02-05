import { Route, Routes } from "react-router-dom";
import "./App.css";
import { recipesData } from "./recipesData";
import { Link } from "react-router-dom";
import LayoutHome from "./Layouts/LayoutHome";
import Home from "./Pages/Home/Home";
import LayoutPages from "./Layouts/LayoutPages";
import Foods from "./Pages/Foods/Foods";
import FoodSingle from "./Pages/Foods/FoodSingle";
import Sweets from "./Pages/Sweets/Sweets";
import SweetSingle from "./Pages/Sweets/SweetSingle";
import Cakes from "./Pages/Cakes/Cakes";
import CakeSingle from "./Pages/Cakes/CakeSingle";
import FastingSweets from "./Pages/FastingSweets/FastingSweets";
import FastingSweetSingle from "./Pages/FastingSweets/FastingSweetSingle";
import FastingFoods from "./Pages/FastingFoods/FastingFoods";
import FastingFoodSingle from "./Pages/FastingFoods/FastinFoodSingle";
import Desserts from "./Pages/Desserts/Desserts";
import Fastings from "./Pages/Fastings/Fastings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutHome />}>
        <Route index element={<Home />}></Route>
      </Route>
      <Route path="/" element={<LayoutPages />}>
        <Route
          path="foods"
          element={<Foods recipesData={recipesData} />}
        ></Route>
        <Route
          path="/foods/:title"
          element={<FoodSingle recipesData={recipesData} />}
        />
        <Route path="desserts" element={<Desserts />} />
        <Route path="sweets" element={<Sweets recipesData={recipesData} />} />
        <Route
          path="/sweets/:title"
          element={<SweetSingle recipesData={recipesData} />}
        />
        <Route path="cakes" element={<Cakes recipesData={recipesData} />} />
        <Route
          path="/cakes/:title"
          element={<CakeSingle recipesData={recipesData} />}
        />
        <Route path="fasting-recipes" element={<Fastings />} />
        <Route
          path="fasting-sweets"
          element={<FastingSweets recipesData={recipesData} />}
        />
        <Route
          path="/fasting-sweets/:title"
          element={<FastingSweetSingle recipesData={recipesData} />}
        />
        <Route
          path="fasting-foods"
          element={<FastingFoods recipesData={recipesData} />}
        />
        <Route
          path="/fasting-foods/:title"
          element={<FastingFoodSingle recipesData={recipesData} />}
        />
      </Route>
      <Route
        path="*"
        element={
          <div className="page-not-found">
            <p>Page not found</p>
            <Link to="/">
              <h3>GO TO HOME</h3>
            </Link>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
