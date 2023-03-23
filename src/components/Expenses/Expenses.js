import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from './ExpensesList';
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filterExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear; //getting the dates of the filtedYear of the current state
  });

  

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filterExpenses}/>
        <ExpenseList items={filterExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
