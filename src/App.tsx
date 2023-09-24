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
import PostHeading from "./components/PostHeading";
import AddPostModal from "./components/AddPostModal";

export interface PostQuery {
  userId: number | null;
}

function App() {
  const [postQuery, setPostQuery] = useState<PostQuery>({} as PostQuery);
  const [userSelected, setUserSelected] = useState<User>({} as User);

  const {
    isOpen: isOpenAddUserModal,
    onOpen: onOpenAddUserModal,
    onClose: onCloseAddUserModal,
  } = useDisclosure();
  const {
    isOpen: isOpenAddPostModal,
    onOpen: onOpenAddPostModal,
    onClose: onCloseAddPostModal,
  } = useDisclosure();

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
              <PostHeading user={userSelected} />
            </Box>
            <ButtonGroup padding={4}>
              <Button onClick={onOpenAddUserModal} colorScheme="teal">Add User</Button>
              <Button onClick={onOpenAddPostModal} colorScheme="blue">Add Post</Button>
            </ButtonGroup>
          </HStack>
          <PostGrid postQuery={postQuery} />
        </GridItem>
      </Grid>
      <AddUserModal
        isOpen={isOpenAddUserModal}
        onClose={onCloseAddUserModal}
        onOpen={onOpenAddUserModal}
      />
      <AddPostModal
        isOpen={isOpenAddPostModal}
        onClose={onCloseAddPostModal}
        onOpen={onOpenAddPostModal}
      />
    </>
  );
}

export default App;
