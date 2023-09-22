import { Grid, GridItem } from '@chakra-ui/react'
import { useState } from 'react'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`
   }}>
      <GridItem area="nav"><NavBar/></GridItem>
      <GridItem area="main">main</GridItem>
   </Grid>
  )
}

export default App
