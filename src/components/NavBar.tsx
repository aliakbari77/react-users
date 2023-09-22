import {
  Avatar,
  AvatarGroup,
  HStack,
  Heading,
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineQuestionCircle, AiOutlineUser } from "react-icons/ai";
import { BsFillMoonFill, BsFillSunFill, BsSearch } from "react-icons/bs";
import { MdPayment } from "react-icons/md";
import { GrDocumentText } from "react-icons/gr";
import { BiLogOut } from "react-icons/bi";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const iconSize = {
    fontSize: "20px",
  };
  return (
    <HStack
      justifyContent="space-between"
      paddingX={4}
      paddingY={2}
      boxShadow="0px 0px 3px gray"
    >
      <Heading as="h3" fontSize={24}>
        Users
      </Heading>
      <InputGroup marginX={8}>
        <InputLeftElement pointerEvents="none">
          <BsSearch color="gray.300" />
        </InputLeftElement>
        <Input type="tel" placeholder="Search..." borderRadius={25} />
      </InputGroup>
      <HStack>
        {colorMode === "light" ? (
          <BsFillMoonFill {...iconSize} onClick={toggleColorMode} />
        ) : (
          <BsFillSunFill {...iconSize} onClick={toggleColorMode} />
        )}
        <Menu>
          <MenuButton borderLeft={colorMode === "light" ? "1px solid black" :  "1px solid white"}>
            <AvatarGroup marginLeft={2} spacing="1rem">
              <Avatar bg="teal.500" size="sm" />
            </AvatarGroup>
          </MenuButton>
          <MenuList>
            <MenuGroup title="Profile">
              <MenuItem icon={<AiOutlineUser {...iconSize} />}>
                My Account
              </MenuItem>
              <MenuItem icon={<MdPayment {...iconSize} />}>Payments </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="Help">
              <MenuItem icon={<GrDocumentText {...iconSize} />}>Docs</MenuItem>
              <MenuItem icon={<AiOutlineQuestionCircle {...iconSize} />}>
                FAQ
              </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup>
              <MenuItem icon={<BiLogOut {...iconSize} />}>Logout</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </HStack>
    </HStack>
  );
};

export default NavBar;
