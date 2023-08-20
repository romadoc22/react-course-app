import React, { useState } from "react";
import "./Costs.css";
import Card from "../UI/Card";
import CostItem from "./CostItem";
import CostFilter from "./CostFilter";

const Costs = (props) => {
  const [selectedYear, setSelectedYear] = useState("2021");

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  return (
    <div>
      <Card className="costs">
        <CostFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        {props.costs.map((cost) => (
          <CostItem
            key={cost.id}
            date={cost.date}
            description={cost.description}
            amount={cost.amount}
          />
        ))}
      </Card>
    </div>
  );
};
export default Costs;
