import React, { useState } from "react";

import './searchBox.css'

const SearchBox = ({ parentCallback, peoples }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const editSearchTerm = (event) => {
    setSearchTerm(event.target.value);
  };

  const search = () => {
    const searchResult = peoples.filter((people) =>
      people.name.toLowerCase().includes(searchTerm.toLowerCase())||
      people.username.toLowerCase().includes(searchTerm.toLowerCase())||
      people.email.toLowerCase().includes(searchTerm.toLowerCase())||
      people.phone.toLowerCase().includes(searchTerm.toLowerCase())
    );
    parentCallback(searchResult);
  };
  return (
    <div className='searchBox'>
      <input
        type="text"
        value={searchTerm}
        onChange={editSearchTerm}
        placeholder="Search!"
      />
      <button onClick={search}>search</button>
    </div>
  );
};
export default SearchBox;
