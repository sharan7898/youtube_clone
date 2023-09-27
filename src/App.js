import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import { Box } from '@mui/material';

import {Navbar , Feed ,ChannelDetail ,SearchFeed ,VideoDetail } from './components';


const App = () => (
<BrowserRouter>
<Box sx={{backgroundColor: 'black'}}>

<Navbar/>
<Routes>
<Route path='/' element={<Feed/>}></Route>
<Route path='/videos:id' element={<VideoDetail/>}></Route>
<Route path='/channel:id' element={<ChannelDetail/>}></Route>
<Route path='/seacrh:searchTerm' element={<SearchFeed/>}></Route>


</Routes>


</Box>


</BrowserRouter>



)

export default App;
