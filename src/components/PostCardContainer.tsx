import { Box } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

interface Props{
    children: ReactNode 
}

const PostCardContainer = ({children}: Props) => {
  return (
    <Box>
        {children}
    </Box>
  )
}

export default PostCardContainer