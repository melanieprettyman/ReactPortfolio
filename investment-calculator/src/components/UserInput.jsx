// UserInput state and the function to set the state are passed to UserInput component as props
export default function UserInput({ userInput, handleChange }) {
  return (
    //css for whole comp
    <section id="user-input">
      {/* css that ensure the input feilds are showing up next to eachother */}
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            //input is required
            required
            // set the value that will be displayed to the screen for this input field
            value={userInput.initialInvestment}
            //when the input is changed, call the onChange function to update the state
            onChange={(event) =>
              handleChange("initialInvestment", event.target.value)
            }
          />
        </p>

        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              handleChange("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
              handleChange("expectedReturn", event.target.value)
            }
          />
        </p>

        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => handleChange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
