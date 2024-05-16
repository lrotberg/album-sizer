import "./App.css";
import Fraction from "./components/Fraction";
import { createFraction } from "./helperFunctions";

function App() {
  const { top, bottom, wholeNumber } = createFraction(5.6144);
  return <Fraction top={top} bottom={bottom} wholeNumber={wholeNumber} />;
}

export default App;
