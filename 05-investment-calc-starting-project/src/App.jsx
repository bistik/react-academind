import { useState } from 'react';
import InputGroup from './components/InputGroup';
import InputText from './components/InputText';
import { calculateInvestmentResults, formatter } from './util/investment';
import ResultTable from './components/ResultTable';

const INIT_INVESTMENT_INPUTS = {
  initialInvestment: 1000,
  annualInvestment: 200,
  expectedReturn: 5,
  duration: 5,
};

function App() {
  const [inputValues, setInvestmentInputs] = useState(INIT_INVESTMENT_INPUTS);

  const invalidDuration = inputValues.duration < 1;

  function handleInputValue(key, newValue) {
    const prevInputs = {
      ...inputValues,
      [key]: newValue,
    };
    setInvestmentInputs(prevInputs);
  }

  return (
    <>
      <InputGroup>
        <InputText
          labelText="Initial Investment"
          inputValue={inputValues.initialInvestment}
          fieldName="initialInvestment"
          onValueChange={handleInputValue}
        />
        <InputText
          labelText="Annual Investment"
          inputValue={inputValues.annualInvestment}
          fieldName="annualInvestment"
          onValueChange={handleInputValue}
        />
        <InputText
          labelText="Expected Return"
          inputValue={inputValues.expectedReturn}
          fieldName="expectedReturn"
          onValueChange={handleInputValue}
        />
        <InputText
          labelText="Duration"
          inputValue={inputValues.duration}
          fieldName="duration"
          onValueChange={handleInputValue}
        />
      </InputGroup>
      <div>
        {invalidDuration && <div className="center">Invalid Duration</div>}
        {!invalidDuration && (
          <ResultTable
            result={calculateInvestmentResults(inputValues)}
            initialInvestment={inputValues.initialInvestment}
            formatter={formatter}
          />
        )}
      </div>
    </>
  );
}

export default App;
