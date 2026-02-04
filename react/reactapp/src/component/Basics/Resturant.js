import React, { useState} from 'react';

import './style.css';

import Menu from './menuApi';
import MenuCard from './MenuCard';

const Resturant = () => {

    // const myStyle = { color: "blue" };

    // hucks  image from menuApi.js
    const [menuData, setMenuData] = useState(Menu);
    // console.log("--->", menuData);

    const filterItem = (category) => {
      const updatedList = Menu.filter((curElem) => {
        return curElem.category === category;
      })

      setMenuData(updatedList);
    };
    

    return <>

      <nav className='navbar'>
        <div className="btn-group">
          <button className="btn-group__item" onClick={() => filterItem("breakfast")}>Breackfast</button>
          <button className="btn-group__item">Lunch</button>
          <button className="btn-group__item">Evening</button>
          <button className="btn-group__item">Dinner</button>
          <button className="btn-group__item">All</button>
        </div>
      </nav>
      < MenuCard menuData={menuData}/>
    
    </>
}

export default Resturant;