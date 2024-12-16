import { useState } from "react";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const todayDate = new Date();
  const [dateis, setDateis] = useState(todayDate);
  const handleStepInc = () => {
    setStep(step + 1);
  };
  const handleStepDec = () => {
    setStep(step - 1);
  };
  const handleCountDec = () => {
    setCount(count - step);
    updateDate(-step);
  };
  const handleCountInc = () => {
    setCount(count + step);
    updateDate(step);
  };

  function updateDate(step) {
    const updatedDate = new Date(dateis);
    updatedDate.setDate(updatedDate.getDate() + step);
    setDateis(updatedDate);
  }
  return (
    <div className="w-full flex flex-col h-screen justify-start items-center  space-y-3">
      <div className="border w-2/12 flex justify-between items-center">
        <button
          disabled={step <= 1}
          onClick={handleStepDec}
          className="p-2 bg-red-400"
        >
          -
        </button>
        <span>step:{step}</span>
        <button onClick={handleStepInc} className="p-2 bg-green-400">
          +
        </button>
      </div>
      <div className="border w-2/12 flex justify-between items-center">
        <button onClick={handleCountDec} className="p-2 bg-red-400">
          -
        </button>
        <span className="p-2">count:{count}</span>
        <button onClick={handleCountInc} className="p-2 bg-green-400">
          +
        </button>
      </div>
      <div>
        {todayDate.toDateString() === dateis.toDateString() ? (
          <p>Todays date is: {dateis.toDateString()}</p>
        ) : dateis > todayDate ? (
          <p>
            {count} days after today, the date will be: {dateis.toDateString()}
          </p>
        ) : (
          <p>
            {Math.abs(count)} days before today, the date was:{" "}
            {dateis.toDateString()}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
