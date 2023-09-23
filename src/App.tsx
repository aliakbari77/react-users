import { Box, Button, ButtonGroup, Grid, GridItem, HStack, Heading, Show } from "@chakra-ui/react";
import { useState } from "react";
import NavBar from "./components/NavBar";
import UserList from "./components/UserList";
import PostGrid from "./components/PostGrid";

function App() {
	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`,
				sm: `"nav nav" "aside main"`,
			}}
		>
			<GridItem area="nav">
				<NavBar />
			</GridItem>
			<Show above="sm">
				<GridItem area="aside">
					<UserList />
				</GridItem>
			</Show>
			<GridItem area="main">
        <HStack justify="space-between">
          <Box padding={4}>
            <Heading>
              All Posts
            </Heading>
          </Box>
          <ButtonGroup padding={4}>
            <Button>
              Add User
            </Button>
            <Button>
              Add Post
            </Button>
          </ButtonGroup>
        </HStack>
        <PostGrid/>
      </GridItem>
		</Grid>
	);
}

export default App;
