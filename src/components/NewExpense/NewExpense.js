import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      //Tells what functions on another page to call from
      ...enteredExpenseData, //Calls data from another page
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} /> 
    </div>
  );
};
//******* (onSaveExpenseData = {function}) is how you transmit data up using props.
export default NewExpense;
