import React, {useState} from "react";
import Expenses from "./components//Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () =>{
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {  //Dynamic updating the expense component
    setExpenses(prevExpenses =>{
      return [expense, ...prevExpenses] //... = calls data from array named and puts it here
    });
  };

  //return React.createElement(
  //'div',
  //{},
  //React.createElement('h2', {}, "Let's get Started!"),
  //React.createElement(Expenses, {items: expenses})
  //);
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
    
    /*(onAddExpense={addExpenseHandler}) = starts app passthrough from addExpenseHandler to onAddExpense to use in this file
    
    items={expenses} = passes the expense function to the expenseItem page
    */
  );
}

export default App;
