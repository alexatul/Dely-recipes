import "./FilterIngredients.css";
import { recipesData } from "../../recipesData";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { GiCook, GiCookingPot } from "react-icons/gi";
import { Link } from "react-router-dom";

function FilterIngredients() {
  const [isSelectDisplay, setIsSelectDisplay] = useState(false);
  const [filterTags, setFilterTags] = useState([]);

  const allIngredients = [];
  recipesData.forEach(function (entry) {
    entry.ingredients.forEach((item) => {
      allIngredients.push(item);
    });
  });

  const optionIngredient = allIngredients.map(function (row) {
    return { value: row.name, label: row.name };
  });

  optionIngredient.sort(function (a, b) {
    const valueA = a.value.toUpperCase();
    const valueB = b.value.toUpperCase();
    if (valueA < valueB) {
      return -1;
    }
    if (valueA > valueB) {
      return 1;
    }
    return 0;
  });

  const uniqueIngredients = [
    ...new Map(optionIngredient.map((v) => [v.value, v])).values(),
  ];

  const selectRef = useRef();
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setIsSelectDisplay();
      }
    };
    document.addEventListener("click", checkIfClickedOutside);
    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [isSelectDisplay]);

  const filteredDATA = recipesData.filter((recipe) =>
    filterTags.length > 0
      ? filterTags.every((filterTag) =>
          recipe.ingredients.map((tag) => tag.name).includes(filterTag)
        )
      : recipesData
  );

  const filterHandler = (event) => {
    if (event.target.checked) {
      setFilterTags([...filterTags, event.target.value]);
    } else {
      setFilterTags(
        filterTags.filter((filterTag) => filterTag !== event.target.value)
      );
    }
  };

  const clearFilters = () => {
    setFilterTags([]);
  };

  return (
    <div className="filter-ingredients">
      <section className="section-select">
        <h1>Alege cateva ingrediente pentru a putea vedea retele propuse :</h1>
        <div className="cooking-icons">
          <GiCook className="chef-cook" />
          <GiCookingPot />
        </div>
        <div className="section-select-button">
          <button
            type="submit"
            onClick={() => setIsSelectDisplay(!isSelectDisplay)}
          >
            Selecteaza ingredientele ...
            {isSelectDisplay ? <div>| &#11161;</div> : <div>| &#11163;</div>}
          </button>
        </div>
        <form>
          {isSelectDisplay && (
            <div className="select-form">
              <button type="reset" onClick={clearFilters}>
                Reseteaza cautarea
              </button>
              {uniqueIngredients.map((item1) => (
                <label>
                  <input
                    type="checkbox"
                    onChange={filterHandler}
                    value={item1.value}
                  />
                  <span>{item1.value}</span>
                </label>
              ))}
            </div>
          )}
        </form>
      </section>
      <div className="filtered-data-container">
        {filterTags.length !== 0 && (
          <div className="filtered-data-result">
            {filteredDATA.map((recipe) => (
              <div className="filtered-data" key={recipe.id}>
                <div className="filtered-data-image">
                  <Link to={`${recipe.path}${recipe.title}`}>
                    <img src={recipe.image} alt={recipe.title} />
                  </Link>
                </div>
                {recipe.title}
              </div>
            ))}
            {filteredDATA.length === 0 && <div>Niciun rezultat</div>}
          </div>
        )}
      </div>
    </div>
  );
}

export default FilterIngredients;
