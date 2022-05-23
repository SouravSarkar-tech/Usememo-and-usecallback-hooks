import { useState, useCallback, useMemo } from "react";
import './App.css';
import Thetitle from "./components/Thetitle";
import Counter from "./components/Counter";
import Button from "./components/Button";



function App() {
  const [firstCounter, SetFirstCounter] = useState(0);
  const [secondCounter, SetSecondCounter] = useState(0);



  const IncreseValBy1 = useCallback(() => {
    SetFirstCounter((PrevState) => PrevState + 1);
  }, []);

  

  const IncreseValBy10 = useCallback(() => {
    SetSecondCounter((PrevState) => PrevState + 10);
  }, []);

  
  const functionToCheck = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return firstCounter % 2 === 0;
  }, [firstCounter]);

  return (
    <div className="app">
      <Thetitle />
      <div className="box">
        <Counter thecount={firstCounter} titleofthecount="First Counter" />
        <Button  clickHandler={IncreseValBy1}>Increment The Value By 1</Button>
        <br />
        <p className='EvenOdd'>Check Whether The Number Is a Odd Integer Or An Even Integer:  <span className='oddeven'>{functionToCheck ? "Even Number" : "Odd Number"}</span></p>
      </div>

      <div className="box">
        <Counter thecount={secondCounter} titleofthecount="Second Counter" />
        <Button  clickHandler={IncreseValBy10}>Increment The Value By 10</Button>
      </div>
    </div>
  );
}

export default App;