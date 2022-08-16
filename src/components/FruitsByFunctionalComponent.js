import fruitsReducer from "../redux/fruits.reducer";
import react, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import fruitsActions from "../redux/fruitsActions";

export default function FruitsByFunctionalComponent() {
  const fruits = useSelector((store) => store.fruits);

  const dispatch = useDispatch();

  const [newFruit, setNewFruit] = useState("");
  // useEffect(fruits, [dispatch]);
  // useEffect(fruits, []);

  // const newFruits = fruits.push(newFruit);
  console.log("fruits", fruits);

  return (
    <>
      <h1>Fruits list</h1>
      <button
        onClick={() => {
          dispatch(fruitsActions.eraseAllFruits());
        }}
      >
        Erase All fruits
      </button>
      <br />
      <button
        onClick={() => {
          dispatch(fruitsActions.resetFruits());
        }}
      >
        Reset to initial Fruits list
      </button>
      <br />
      <input
        onChange={(e) => {
          setNewFruit(e.target.value);
          // alert(newFruits);/
        }}
      />
      <button
        onClick={() => {
          dispatch(fruitsActions.addFruit(newFruit));
        }}
      >
        register new fruit
      </button>
      {fruits.map((fruit, i) => (
        <div key={i}>{fruit}</div>
      ))}
    </>
  );
}
