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
import React, { useRef } from "react";
import { AiOutlineQuestionCircle, AiOutlineUser } from "react-icons/ai";
import { BsFillMoonFill, BsFillSunFill, BsSearch } from "react-icons/bs";
import { MdPayment } from "react-icons/md";
import { GrDocumentText } from "react-icons/gr";
import { BiLogOut } from "react-icons/bi";
import SearchInput from "./SearchInput";
import AvatarMenu from "./AvatarMenu";
import { FiUsers } from "react-icons/fi";
import Logo from "./Logo";
import SwitchColor from "./SwitchColor";

const NavBar = () => {
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
			<Logo />
			<SearchInput />
			<HStack marginLeft={16}>
				<SwitchColor iconSize={iconSize} />
				<AvatarMenu iconSize={iconSize} />
			</HStack>
		</HStack>
	);
};

export default NavBar;
