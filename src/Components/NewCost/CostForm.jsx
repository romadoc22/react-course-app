import { useState } from "react";
import "./CostForm.css";
const CostForm = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputAmount, setInputAmount] =
    useState("");
  const [inputDate, setInputDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   name: "",
  //   amount: "",
  //   date: "",
  // });
  const nameChangeHandler = (event) => {
    setInputName(event.target.value);
  };
  const amountChangeHandler = (event) => {    
    setInputAmount(event.target.value);
     // setUserInput((prevState) => 
    // {return {...prevState, amount: event.target.value}})
  };
  const dateChangeHandler = (event) => {
    setInputDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   date: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const costData = {
      description: inputName,
      amount: inputAmount,
      date: new Date(inputDate),
    };
    props.onSaveCostData(costData);
    setInputName('')
    setInputAmount('')
    setInputDate('')
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__controls">
          <label>Назва</label>
          <input
            type="text"
            value={inputName}
            onChange={nameChangeHandler}
          />
        </div>
        <div className="new-cost__controls">
          <label>Сума</label>
          <input            
            type="number"
            value={inputAmount}
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-cost__controls">
          <label>Дата</label>
          <input            
            type="date"
            value={inputDate}
            onChange={dateChangeHandler}
            min="2019-01-01"
            step="2023-12-31"
          />
        </div>
        <div className="new-cost__actions">
          <button            
            type="submit">
            Додати
          </button>
        </div>
      </div>
    </form>
  );
};
export default CostForm;
