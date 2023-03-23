import React, {useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const[isEditing, setIsEditing] = useState(false); // false here () is original state value

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      //Tells what functions on another page to call from
      ...enteredExpenseData, //Calls data from another page
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () =>{ //Add New Expense form popup when clicked
    setIsEditing(true);
  };

  const stopEditingHandler = () =>{
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>/*!isEditing Check if button is not clicked*/}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel ={stopEditingHandler}/>}
    </div>
  );
};
//******* (onSaveExpenseData = {function}) is how you transmit data up using props.
export default NewExpense;
