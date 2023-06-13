import Card from "../UI/Card";
import "./CostItem.css";
import CostDate from "./CostDate";
import React, { useState } from "react";

function CostItem(props) {
  const [description, setDescription] = useState(
    props.description
  );

  const changeDescriptionHandler = () => {
    setDescription("New cost");
    console.log(description);
  };
  return (
    <Card className="cost-item">
      <CostDate date={props.date} />
      <div className="cost-item__description">
        <h2>{description}</h2>
        <div className="cost-item__price">
          {props.amount}
        </div>
        <button
          onClick={changeDescriptionHandler}>
          Змінити опис
        </button>
      </div>
    </Card>
  );
}
export default CostItem;
