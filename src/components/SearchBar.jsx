import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <Paper
    component="form"
    onSubmit={()=>{}}
    sx={{
    borderRadius:"50px",
    border:"1px solod #e3e3e3",  
    pl:2,
    mr:{sm:5},
    boxShadow:"none"  
    }}>

    <input
    className='search-bar'
    placeholder='Search'
    value=""
    onChange={() => {}}
    />

    <IconButton  type='submit' sx={{p:'20px',
    color:'red'}}>
    <SearchIcon/>
    </IconButton>
    
    </Paper>
  )
}

export default SearchBar