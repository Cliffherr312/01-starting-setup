import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import React, { useState } from "react"; //Need to load useState to update Screen with button presses
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  //props allows for the trasfer of data from different components

  const [title, setTitle] = useState(props.title); //Needed for button press to update Screen([FirstVarible is starting,SecondVariable is Final state])
  console.log("Expense Item Evaluated by React");

  const clickHandler = () => {
    //Button Click Handler
    setTitle("Updated!");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
