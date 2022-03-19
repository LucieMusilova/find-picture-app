import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hints from './components/Hints';
import Searchbox from './components/Searchbox';
import Pictures from './components/Pictures';
import images from "./images.js";
import NotFound from './components/NotFound';


function App() {

  const [sort, setSort] = useState(images);

  const handleFilter = (value) => {
    value === "all" ? setSort(images) :
    setSort(images.filter(img => img.title === value))
  }

  const handleSearch = (event) =>{
    let value = event.target.value.toLowerCase();
    value === "" ? setSort(images) : setSort(images.filter(name => name.type.includes(value)));
  }


  return (
    <>
      <Header />
      <Searchbox handleSearch={handleSearch}/>
      <Hints handleFilter={handleFilter}/>
      {sort.length === 0 ?
       <NotFound /> : <Pictures sort={sort} />
        }
    </>
  );
}

export default App;
