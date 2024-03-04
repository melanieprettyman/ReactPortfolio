import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Results({ input }) {
  //pass userInput to calculateInvestmentResults
  //return an array of objects {year:#, interest: #, valueEndOfYear: #, annualInvestment: #}
  const resultsData = calculateInvestmentResults(input);

  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        {" "}
        {/* Table header */}
        <tr>
          {" "}
          {/* Table row */}
          <th>Year</th> {/* Table column titles */}
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {" "}
        {/* Table body */}
        {/* Loop through all the results in the array of results, for each result return a row
        set the data (td) for each column in the row */}
        {resultsData.map((yearData) => {
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;
          const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
