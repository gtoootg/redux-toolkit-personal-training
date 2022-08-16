import AnimalsBySlice from "./components/AnimalsBySlice";
import FruitsByFunctionalComponent from "./components/FruitsByFunctionalComponent";
import PersonsByClassComponent from "./components/PersonsByClassComponent";
import HistoricalPersonsByApiSlice from "./components/HistoricalPersonsByApiSlice";

function App() {
  return (
    <div>
      <FruitsByFunctionalComponent />
      <br />
      <div style={{ border: "solid" }}></div>
      <br />
      <AnimalsBySlice />
      <br />
      <div style={{ border: "solid" }}></div>
      <br />
      <PersonsByClassComponent />
      <br />
      <div style={{ border: "solid" }}></div>
      <br />
      <HistoricalPersonsByApiSlice />
    </div>
  );
}

export default App;
