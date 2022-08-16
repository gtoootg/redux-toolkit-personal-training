import { useSelector, useDispatch } from "react-redux";

export default function AnimalsBySlice() {
  const animals = useSelector((state) => state.animals);

  const dispatch = useDispatch();
  console.log("animals", animals);

  return (
    <>
      <h1>Animals by Create Slice </h1>
      {animals.map((animal) => (
        <p>{animal.label}</p>
      ))}
    </>
  );
}
