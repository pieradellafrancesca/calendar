import { useState } from "react";
import Day from "../day";
import "./index.css";

const Month = ({ monthNum, monthName }) => {
  const [activeElement, setActiveElement] = useState(new Date().getDate());
  return (
    <div className="Month">
      <div className="Month__title">
        <h2>{monthName}</h2>
      </div>
      <div className="Month__wrapper">
        {/* {[...new Array(getDaysCurrentMonth())].map((element, index) => ( */}
        {[...new Array(monthNum)].map((element, index) => (
          <Day
            content={index + 1}
            activeElement={activeElement}
            setActiveElement={setActiveElement}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Month;
