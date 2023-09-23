import {
  List,
  ListItem,
  ListIcon,
  Button,
  Heading,
  Box,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdCheckCircle, MdSettings } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import useUsers from "../hooks/useUsers";

export interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  onSelectUser: (user: User) => void;
}

const UserList = ({ onSelectUser }: Props) => {
  const { data: users, isLoading, error } = useUsers();

  return (
    <>
      <Box padding={4}>
        <Heading marginBottom={4} fontSize="24px">
          Users List
        </Heading>
        <List spacing={8}>
          {users.map((user) => (
            <ListItem key={user.id}>
              <ListIcon as={AiOutlineUser} fontSize="24px" />
              <Button variant="link" onClick={() => onSelectUser(user)}>
                {user.name}
              </Button>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
};

export default UserList;
