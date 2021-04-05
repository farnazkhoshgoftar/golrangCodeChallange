import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { GetPeoples } from "../../redux/peoples/actions";
import Card from "../../components/card";
import PageHOC from "../../components/pageHoc";
import SelectBox from "../../components/selectBox";
import SearchBox from "../../components/searchBox";
import "./home.css";

const Home = () => {
  const initialpeoples = useSelector((state) => state.peoples);
  const [peoples, setPeoples] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetPeoples());
  }, []);

  useEffect(() => {
    setPeoples(initialpeoples);
  }, [initialpeoples]);

  const selectCallbackFunction = (childData) => {
    setPeoples(childData);
  };

  const searchCallbackFunction = (childData) => {
    setPeoples(childData);
  };

  return (
    <PageHOC>
      <div className="container">
        <div className="flex boxes">
          <SelectBox
            peoples={initialpeoples}
            parentCallback={selectCallbackFunction}
          />
          <SearchBox
            peoples={peoples}
            parentCallback={searchCallbackFunction}
          />
        </div>

        <div className="flex">
          {peoples.length !== 0 ? (
            peoples.map((people) => <Card key={people.id} {...people} />)
          ) : (
            <p className='message'>there are no results</p>
          )}
        </div>
      </div>
    </PageHOC>
  );
};
export default Home;
