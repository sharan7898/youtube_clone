import React from 'react'
import { Stack } from '@mui/material'

import { categories } from '../utils/constants'
import { red } from '@mui/material/colors'



const Sidebar = ({selectedCategory, setselectedCategory}) =>  (
    <Stack  
    direction='row'
    sx={{overflowY:'auto',
    height:{sx:'auto', md:'95%'},
    flexDirection:{md:'column'}}}>

    {categories.map((category) => (
      <button className='category-btn'
      onClick={() => setselectedCategory
      (category.name)}
      style={{
      background:category.name === selectedCategory && '#FC103'  ,
      color:'white',
      key:category.name
      }}>
      <span style={{opacity: category.icon === selectedCategory ? '1' : '0.8'}}>{category.icon}</span>
      <span style={{color: category.name === selectedCategory ? 'white' : 'red' ,
      marginLeft:'15px'}}>{category.name}</span>
      </button>

    ))}
    
    </Stack>
  )


export default Sidebar