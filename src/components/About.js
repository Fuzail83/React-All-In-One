import React, { useEffect, useState } from "react";
import MenuData from "./common/MenuData";
import "../components/assets/css/About.css";
import Card from "./common/Card";
import Select from "react-select";
import { Helmet } from "react-helmet";

const About = () => {
  // const [effect, setEffect] = useState(0);

  // useEffect(() => {
  //   document.title = `About ${effect}`;
  // }, [effect]);

  // const UseEffect = () => {
  //   setEffect(effect + 1);
  // };

  // get unique category list
  const uniqueCategoryList = [
    "All",
    "Nubaid",
    ...new Set(
      MenuData.map((item) => {
        return item.category;
      })
    ),
  ];

  console.log("uniqueCategoryList", uniqueCategoryList);

  //  React Select Filter Data

  const selectFilters = (category) => {
    if (category.value === "All") {
      setData(MenuData);
      return;
    }
    const selectFilter = MenuData.filter((item) => {
      return item.category === category.value;
    });
    setData(selectFilter);
    console.log("selectFilter", selectFilter);
  };

  // GET Unique Category
  const uniqueSelectFilter = [
    "All",
    ...new Set(
      MenuData.map((item) => {
        return item.category;
      })
    ),
  ];
  console.log(uniqueSelectFilter);

  const filterOptions = uniqueSelectFilter.map((category) => ({
    value: category,
    label: category,
  }));
  //  React Select Filter Data End

  const [selectFilter, setSelectFilter] = useState(uniqueSelectFilter);

  const [data, setData] = useState(MenuData);
  const [categoryListData, setCategoryListData] = useState(uniqueCategoryList);

  console.log("MenuData", MenuData);

  const filterData = (category) => {
    console.log("category", category);
    if (category === "All") {
      setData(MenuData);
      // return;
    } else if (category === "Nubaid") {
      const nubaidData = MenuData.filter((item) => {
        return item.category === "lunch";
      });
      setData(nubaidData);
    } else {
      const newFilterData = MenuData.filter((element) => {
        return element.category === category;
      });
      setData(newFilterData);
    }
  };
  // Get category list
  const categoryList = MenuData.map((item) => {
    return item.category;
  });
  console.log("ggggg", categoryList);

  return (
    <>
      <Helmet title="About" />
      {/* <button onClick={UseEffect}>UseEffect</button>
      <h3>{effect}</h3> */}
      <div className="select-container">
        <h3>React Select </h3>
        <Select
          options={filterOptions}
          onChange={selectFilters}
          value={selectFilter}
          placeholder="Please Select..."
          className="select"
        />
      </div>
      {/* <button onClick={() => setData(MenuData)}>All</button>
      <button onClick={() => filterData("breakfast")}>Breakfast</button>
      <button onClick={() => filterData("evening")}>Evening</button>
      <button onClick={() => filterData("lunch")}>Lunch</button> */}
      <div className="about-container">
        <div className="category-buttons">
          {categoryListData.map((item) => (
            <button
              key={item}
              onClick={() => filterData(item)}
              className="category-button"
            >
              {item}
            </button>
          ))}
        </div>
        <Card data={data} />
      </div>
    </>
  );
};

export default About;
