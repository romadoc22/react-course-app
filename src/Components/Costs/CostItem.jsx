import Card from "../UI/Card";
import "./CostItem.css";
import CostDate from "./CostDate";

function CostItem(props) {
  let description = props.description;
  const changeDescriptionHandler = () => {
    description = "New Text";
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
          Змінити стан
        </button>
      </div>
    </Card>
  );
}
export default CostItem;
