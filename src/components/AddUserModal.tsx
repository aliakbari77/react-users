import {
	useDisclosure,
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	FormControl,
	FormLabel,
	Input,
	ModalFooter,
} from "@chakra-ui/react";
import React from "react";

interface Props {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}

const AddUserModal = ({ isOpen, onOpen, onClose }: Props) => {
	const userNameRef = React.useRef(null);
	const finalRef = React.useRef(null);

	return (
		<>
			<Modal
				initialFocusRef={userNameRef}
				finalFocusRef={finalRef}
				isOpen={isOpen}
				onClose={onClose}
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Add User</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<FormControl>
							<FormLabel>User Name</FormLabel>
							<Input ref={userNameRef} placeholder="User name" />
						</FormControl>

						<FormControl mt={4}>
							<FormLabel>Email</FormLabel>
							<Input placeholder="Last name" />
						</FormControl>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme="blue" mr={3} onClick={onClose}>
							Save
						</Button>
						<Button onClick={onClose}>Cancel</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default AddUserModal;
