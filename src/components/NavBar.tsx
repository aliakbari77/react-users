import {
  Avatar,
  AvatarGroup,
  HStack,
  Heading,
  Box,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsFillMoonFill, BsSearch } from "react-icons/bs";

const NavBar = () => {
  return (
    <HStack
      justifyContent="space-between"
      paddingX={4}
      paddingY={2}
      boxShadow="0px 0px 3px gray"
    >
      <Heading>Users</Heading>
      <InputGroup marginX={8}>
        <InputLeftElement pointerEvents="none">
          <BsSearch color="gray.300" />
        </InputLeftElement>
        <Input type="tel" placeholder="Search..." borderRadius={25} />
      </InputGroup>
      <HStack>
        <BsFillMoonFill fontSize="20px" />
        <AvatarGroup
          paddingLeft={4}
          marginLeft={4}
          spacing="1rem"
          borderLeft="1px solid black"
        >
          <Avatar bg="teal.500" size="sm" />
        </AvatarGroup>
      </HStack>
    </HStack>
  );
};

export default NavBar;
