import {
	Box,
	Button,
	ButtonGroup,
	Grid,
	GridItem,
	HStack,
	Heading,
	Show,
	useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import NavBar from "./components/NavBar";
import UserList, { User } from "./components/UserList";
import PostGrid from "./components/PostGrid";
import AddUserModal from "./components/AddUserModal";

export interface PostQuery {
	userId: number | null;
}

function App() {
	const [postQuery, setPostQuery] = useState<PostQuery>({} as PostQuery);
	const [userSelected, setUserSelected] = useState<User>({} as User);
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
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
								setUserSelected(user);
							}}
						/>
					</GridItem>
				</Show>
				<GridItem area="main">
					<HStack justify="space-between">
						<Box padding={4}>
							<Heading>
								{"Posts: " + userSelected.name || "All Posts"}
							</Heading>
						</Box>
						<ButtonGroup padding={4}>
							<Button onClick={onOpen}>Add User</Button>
							<Button>Add Post</Button>
						</ButtonGroup>
					</HStack>
					<PostGrid postQuery={postQuery} />
				</GridItem>
			</Grid>
      <AddUserModal isOpen={isOpen} onClose={onClose} onOpen={onOpen}/>
		</>
	);
}

export default App;
