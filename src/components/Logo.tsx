import { HStack, Heading } from "@chakra-ui/react";
import { FiUsers } from "react-icons/fi";

const Logo = () => {
	return (
		<HStack>
			<FiUsers fontSize={24} />
			<Heading as="h3" fontSize={24}>
				LoGo
			</Heading>
		</HStack>
	);
};

export default Logo;
