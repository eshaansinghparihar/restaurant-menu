import React from 'react';
import { useState, useEffect } from 'react';
import { useDrag } from 'react-use-gesture';
import SearchBar from "./SearchBar"
import {menu, bgImages, allMenuCategories} from "../config/source"
import CategoryMenu from "./CategoryMenu"
import {color} from "../config/constants"
// import { motion } from 'framer-motion';
import styled from '@emotion/styled'

const Menu = () => {
    const [currentCategory, setCurrentCategory]=useState("all")
    const [contents, setContents]=useState(Object.values(menu).reduce((a,b)=>[...a, ...b],[]))
    const [localContents, setLocalContents]=useState(Object.values(menu).reduce((a,b)=>[...a, ...b],[]))

    console.log(bgImages)

    const handleCategoryClick=(e)=>{
        console.log("clicked")
        const id=e.target.dataset.id
        console.log("clicked", id)
        if(id){
            setCurrentCategory(id)
            if(id==="all"){
                setContents(Object.values(menu).reduce((a,b)=>[...a, ...b],[]))
                setLocalContents(Object.values(menu).reduce((a,b)=>[...a, ...b],[]))
            }else{
                setContents(menu[id])
                setLocalContents(menu[id])
            }
            
        }
}

    return (
        <Container color={color.primary}>
          <div className="leftDiv">
            <section>
                <h3>MENU</h3>
            </section>
            <section className='menuCategories' onClick={handleCategoryClick}>
                {
                    allMenuCategories.map(item=><p key={item.id} data-id={item.id} className={item.id===currentCategory?"borderOrange":""}>{item.label}</p>)
                }
            </section>    
          </div>
          <div className="rightDiv">
          <section>
            <SearchBar placeholder='Enter food item' setLocalContents={setLocalContents} contents={contents} />
            </section>
            
            <section>
                <CategoryMenu
                contents={localContents}
                backgroundImage={bgImages[currentCategory]}
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
        height: 100%;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    justify-content: space-around;
    cursor:pointer;
    font-size:1.5rem;

    .borderOrange {
        border-bottom:2px solid orange !important;
    }

        p{
            width: 100%;
    border-bottom: 1px solid black;

            &:hover {
                color:${props=>props.color};
            }

            
        }
    }

    .leftDiv {
        width:30%;


    }

    .rightDiv {
        width:70%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: flex-end;

    

        & section:first-child {
            min-width:200px;
            max-width:300px;
        }

        & section:last-child {
            width:100%;
            padding:0 20px;
        }


    }
`
