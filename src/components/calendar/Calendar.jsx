import { useState } from "react";
import Month from "../month";
import {
  getDaysCurrentMonth,
  getMonthName,
  capitalizeFirstLetter,
} from "../../utils/func";
import "./index.css";

const Calendar = () => {
  const [monthCounter, setMonthCounter] = useState(0);

  const onHandlePreviousClick = () => setMonthCounter((prev) => prev - 1);
  const onHandleNextClick = () => setMonthCounter((prev) => prev + 1);
  return (
    <div className="Calendar">
      <button className="Calendar__prevBtn" onClick={onHandlePreviousClick}>
        {"<"}
      </button>
      <Month
        monthNum={getDaysCurrentMonth(monthCounter)}
        monthName={capitalizeFirstLetter(
          getMonthName(new Date().getMonth() + monthCounter)
        )}
      />
      <button className="Calendar__nextBtn" onClick={onHandleNextClick}>
        {">"}
      </button>
    </div>
  );
};

export default Calendar;
