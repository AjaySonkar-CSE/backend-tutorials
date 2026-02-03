import React, { useState} from 'react';

import './style.css';

import Menu from './menuApi';
import MenuCard from './MenuCard';

const Resturant = () => {

    // const myStyle = { color: "blue" };

    // hucks  image from menuApi.js
    const [menuData, setMenuData] = useState(Menu);
    // console.log("--->", menuData);
    

    return <>
      < MenuCard menuData={menuData}/>
    
    </>
}

export default Resturant;