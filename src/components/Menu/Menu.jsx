import React from 'react';
import { useState, useEffect } from 'react';
import { useDrag } from 'react-use-gesture';
import SearchBar from "./SearchBar"
import {menu, bgImages, allMenuCategories} from "../config/source"
import CategoryMenu from "./CategoryMenu"
// import { motion } from 'framer-motion';
import styled from '@emotion/styled'

const Menu = ({ menuPages }) => {
    const [pageIndex, setPageIndex] = useState(0);
    const [currentCategory, setCurrentCategory]=useState("all")
    const [menuItems, setMenuItems]=useState([])
    

    const bind = useDrag(({ down, movement: [mx], direction: [xDir], velocity }) => {
        if (down && velocity > 0.2) {
            if (xDir < 0 && pageIndex < menuPages.length - 1) {
                setPageIndex((prev) => prev + 1);
            }
            if (xDir > 0 && pageIndex > 0) {
                setPageIndex((prev) => prev - 1);
            }
        }
    });

    const handleCategoryClick=(e)=>{
        console.log("clicked")
        const id=e.target.dataset.id
        setCurrentCategory(id)
}

    return (
        <Container >
          <div className="leftDiv">
            <section>
                <h3>MENU</h3>
            </section>
            <section className='menuCategories' onClick={handleCategoryClick}>
                {
                    allMenuCategories.map(item=><p key={item.id} data-id={item.id}>{item.label}</p>)
                }
            </section>    
          </div>
          <div className="rightDiv">
          <section>
            <SearchBar/>
            </section>
            
            <section>
                <CategoryMenu
                contents={currentCategory==="all"?
                Object.values(menu).reduce((a,b)=>[...a, ...b],[]):menu[currentCategory]}
                />
            </section> 
          </div>

        </Container>
    );
};

export default Menu;

const Container=styled.div`
    display: flex;
    justify-content: space-between;
    padding:20px;


    .menuCategories {
        cursor:pointer;
        text-align:left;
    }
`
