import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState(""); //***This Version better for states
  const [enteredDate, setEnteredDate] = useState("");

  /*const [userInput,setUserInput] = useState({           //2nd Type
  enteredTitle: '',
  enteredAmount: '',
  enteredDate: '',
}); */

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value); //Tracks Value Typed and Sets it //***** Better for states (1ST TYPE)

    /*setUserInput({
      ...userInput,                          //Brings Previous values from userInput(ex:enteredTitle and enteredDate) 2ND TYPE
      enteredAmount: event.target.value,
    }) 
    setUserInput((prevState) =>{                                //3rd Type
      return {...prevState, enteredTitle: event.target.value};
    }); */
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value); //*** Better for states
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value); // *** Better for states
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
