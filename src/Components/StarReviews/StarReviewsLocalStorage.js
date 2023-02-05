import { useState } from "react";

function StarReviewsLocalStorage(key, value) {
  const localStorageData = localStorage.getItem(key);
  const ratingStar = JSON.parse(localStorageData) || value;
  const [state, setState] = useState(ratingStar);

  function setStateAndLocalStorage(value) {
    setState([...state, value]);
    localStorage.setItem(key, JSON.stringify(state));
  }
  return [state, setStateAndLocalStorage];
}

export default StarReviewsLocalStorage;
