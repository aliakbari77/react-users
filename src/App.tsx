import {
	Box,
	Button,
	ButtonGroup,
	Grid,
	GridItem,
	HStack,
	Heading,
	Show,
} from "@chakra-ui/react";
import { useState } from "react";
import NavBar from "./components/NavBar";
import UserList, { User } from "./components/UserList";
import PostGrid from "./components/PostGrid";

export interface PostQuery {
	userId: number | null;
}

function App() {
	const [postQuery, setPostQuery] = useState<PostQuery>({} as PostQuery);
  const [userSelected, setUserSelected] = useState<User>({} as User)

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
					<UserList
						onSelectUser={(user) => {
							setPostQuery({ ...postQuery, userId: user.id });
              setUserSelected(user)
						}}
					/>
				</GridItem>
			</Show>
			<GridItem area="main">
				<HStack justify="space-between">
					<Box padding={4}>
						<Heading>{ "Posts: " + userSelected.name || "All Posts"}</Heading>
					</Box>
					<ButtonGroup padding={4}>
						<Button>Add User</Button>
						<Button>Add Post</Button>
					</ButtonGroup>
				</HStack>
				<PostGrid postQuery={postQuery} />
			</GridItem>
		</Grid>
	);
}

export default App;
