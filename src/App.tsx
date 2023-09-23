import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import NavBar from "./components/NavBar";
import UserList from "./components/UserList";
import PostGrid from "./components/PostGrid";

function App() {
	const [count, setCount] = useState(0);

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
        <PostGrid/>
      </GridItem>
		</Grid>
	);
}

export default App;
