import React from "react";

import "./selectBox.css";

const SelectBox = ({ parentCallback, peoples }) => {
  const filterPeoples = (e) => {
    let userName = e.target.value;
    const selected = peoples.filter((people) => people.name === userName);

    if (userName === "All People") {
      parentCallback(peoples);
    } else {
      parentCallback(selected);
    }
  };

  return (
    <div className="selectBox">
      <select onChange={filterPeoples}>
        <option>All People</option>
        {peoples.map((people) => (
          <option key={people.id} value={people.name}>
            {people.name}
          </option>
        ))}
      </select>
    </div>
  );
};
export default SelectBox;
