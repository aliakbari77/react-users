import { useColorMode } from "@chakra-ui/react";
import React from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

interface Props {
	iconSize: {
		fontSize: string;
	};
}

const SwitchColor = ({iconSize}: Props) => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<>
			{colorMode === "light" ? (
				<BsFillMoonFill {...iconSize} onClick={toggleColorMode} />
			) : (
				<BsFillSunFill {...iconSize} onClick={toggleColorMode} />
			)}
		</>
	);
};

export default SwitchColor;
