import { Menu, MenuButton, AvatarGroup, Avatar, MenuList, MenuGroup, MenuItem, MenuDivider, useColorMode } from "@chakra-ui/react";
import { AiOutlineUser, AiOutlineQuestionCircle } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { MdPayment } from "react-icons/md";
import {TiDocumentText} from "react-icons/ti"

interface Props{
    iconSize: {
        fontSize: string;
    }
}

const AvatarMenu = ({iconSize}: Props) => {
    const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Menu>
			<MenuButton
				borderLeft={
					colorMode === "light"
						? "1px solid black"
						: "1px solid white"
				}
			>
				<AvatarGroup marginLeft={2} spacing="1rem">
					<Avatar bg="teal.500" size="sm" />
				</AvatarGroup>
			</MenuButton>
			<MenuList>
				<MenuGroup title="Profile">
					<MenuItem icon={<AiOutlineUser {...iconSize} />}>
						My Account
					</MenuItem>
					<MenuItem icon={<MdPayment {...iconSize} />}>
						Payments{" "}
					</MenuItem>
				</MenuGroup>
				<MenuDivider />
				<MenuGroup title="Help">
					<MenuItem icon={<TiDocumentText {...iconSize} />}>
						Docs
					</MenuItem>
					<MenuItem icon={<AiOutlineQuestionCircle {...iconSize} />}>
						FAQ
					</MenuItem>
				</MenuGroup>
				<MenuDivider />
				<MenuGroup>
					<MenuItem icon={<BiLogOut {...iconSize} />}>
						Logout
					</MenuItem>
				</MenuGroup>
			</MenuList>
		</Menu>
	);
};

export default AvatarMenu;
