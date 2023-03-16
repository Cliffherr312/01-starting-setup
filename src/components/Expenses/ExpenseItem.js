import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import React from "react"; //{ useState } Needed to load useState to update Screen with button presses
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  //props allows for the trasfer of data from different components
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      
    </Card>
  );
};

export default ExpenseItem;
