import React,{useState} from "react";
import styled from "@emotion/styled"
import SearchIcon from '@mui/icons-material/Search';
import {color} from "../config/constants"

console.log(color)
const SearchBar=({placeholder="Enter item to search"})=>{
    const [searchText, setSearchText]=useState('')
    const handleSearchTextChange=(e)=>{
        const {value}= e.target
        setSearchText(value)
    }
    return <Container>
        <SearchIcon  sx={{ color:`${color.primary}` }}/>
        <input
        value={searchText}
        onChange={handleSearchTextChange}
        placeholder={placeholder}
        />
        </Container>
}

export default SearchBar
const Container=styled.div`
    width:100%;
    border:2px solid orange;
    border-radius:10px;
    padding:2px;

    input {
        background:transparent;
        border:none;
        outline:none;
        border-radius:10px;
    }
`