import React from 'react'
import { useState , useEffect } from 'react'
import { Box, Stack ,Typography } from '@mui/material'

import {fetchFromAPI} from '../utils/fetchFromAPI'

import Sidebar from './Sidebar'
import Videos from './Videos'

const Feed = () => {

const [selectedCategory, setselectedCategory] = useState('New')
const [videos, setvideos] = useState([])

useEffect(() => {
fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
.then((data) => setvideos(data.items))
}, [selectedCategory]);

  return (
    <Stack sx={{flexDirection:{sx: "column" ,md:"row" }}}>
    <Box  sx={{height: {sx:"auto", md:"92vh"} , borderRight:"1px solid grey" , px: {sx:0 , md:2}}}>
    <Sidebar
    selectedCategory= {selectedCategory}
    setselectedCategory= {setselectedCategory}
    />
    <Typography className='Copyrights'
    variant='body2'
    sx={{mt:1.5, color:'red'}}>
    Copyrights 2023 sharan codes
    </Typography>
    </Box>

    <Box p={2} sx={{overflowY:'auto', height:'90vh', flex:2}}>
    <Typography variant='h4'fontWeight='bold' mb={2} sx={{
      color:'whitesmoke'
    }} >
    {selectedCategory} <span style={{color:'#F31503'}}> Videos</span>
    
    </Typography>

    <Videos  videos={videos}/>
    </Box>
    
    </Stack>
  )
}

export default Feed