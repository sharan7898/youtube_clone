import React from 'react'
import { Stack, Box } from '@mui/material'

import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'

const Videos = ({videos}) => {
    
  return (
    <Stack direction='row'  gap={2}
    flexWrap='wrap' 
    justifyContent='start'>
    {videos.map((item , idx)=> (
        <Box key={idx}>
        {item.id.videoId && <VideoCard 
        video={item}    /> }
        {item.id.ChannelId && <ChannelCard 
            Channel={item}    /> }
        </Box>
    ))}
    
    </Stack>
  )
}

export default Videos