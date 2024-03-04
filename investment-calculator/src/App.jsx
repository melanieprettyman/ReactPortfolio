import { useState } from "react";

import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {
  // User input state, holds data entered by the user
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  // Check if the user input is valid, used to conditionally show results table
  const inputIsValid = userInput.duration >= 1;

  // Function to update the user input state. This function is passed as a prop to the UserInput component
  // When updating 1 input field, we don't want to erase the data from the other input fields, so the updated state must depend on the old state
  //Use a function on the old state that return an updated state (copies old state and overrides whats changed)
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} handleChange={handleChange} />
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
