import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	FormControl,
	FormLabel,
	Input,
	Alert,
	AlertTitle,
	ModalFooter,
	Button,
	Select,
	Textarea,
	Divider,
	useToast,
} from "@chakra-ui/react";
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useUsers from "../hooks/useUsers";
import axios from "axios";

const schema = z.object({
	title: z.string().min(3),
	body: z.string().min(5),
	userId: z.string().min(1, { message: "Please choose one user" }),
});

type FormData = z.infer<typeof schema>;

interface Props {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}

const AddPostModal = ({ isOpen, onOpen, onClose }: Props) => {
	const userNameRef = React.useRef(null);
	const finalRef = React.useRef(null);
	const { data: users, isLoading, error } = useUsers();
	const toast = useToast();

	const {
		handleSubmit,
		formState: { errors },
		register,
	} = useForm<FormData>({
		resolver: zodResolver(schema),
	});

	const onSubmit = (data: any) => {
		console.log(data);
		axios
			.post("https://jsonplaceholder.typicode.com/posxts", {
				title: data.title,
				body: data.body,
				userId: parseInt(data.userId),
			})
			.then((res) => {
				console.log(res);
				toast({
					title: "Create Post Successfully",
					description:
						"New post is created but not store at database.",
					status: "success",
					duration: 3000,
					isClosable: true,
				});
			})
			.catch((err) => {
				console.log(err);
				toast({
					title: "Create Post Failed",
					description: "There is a problem at create new post.",
					status: "error",
					duration: 3000,
					isClosable: true,
				});
			});
		onClose();
	};

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
					<ModalHeader>Add Post</ModalHeader>
					<ModalCloseButton />
					<Divider />
					<ModalBody pb={6}>
						<form onSubmit={handleSubmit(onSubmit)}>
							<FormControl>
								<FormLabel>Title</FormLabel>
								<Input
									{...register("title")}
									placeholder="User name"
								/>
								{errors.title && (
									<Alert
										marginTop={2}
										borderRadius={4}
										status="error"
									>
										<AlertTitle>
											{errors.title.message}
										</AlertTitle>
									</Alert>
								)}
							</FormControl>

							<FormControl mt={4}>
								<FormLabel>Description</FormLabel>
								<Textarea
									{...register("body")}
									placeholder="Here is a sample placeholder"
								/>
								{errors.body && (
									<Alert
										marginTop={2}
										borderRadius={4}
										status="error"
									>
										<AlertTitle>
											{errors.body.message}
										</AlertTitle>
									</Alert>
								)}
							</FormControl>
							<FormControl mt={4}>
								<FormLabel>User</FormLabel>
								<Select
									{...register("userId")}
									placeholder="Select User"
								>
									{users.map((user) => {
										return (
											<option
												key={user.id}
												value={user.id}
											>
												{user.name}
											</option>
										);
									})}
								</Select>
								{errors.userId && (
									<Alert
										marginTop={2}
										borderRadius={4}
										status="error"
									>
										<AlertTitle>
											{errors.userId.message}
										</AlertTitle>
									</Alert>
								)}
							</FormControl>
							<ModalFooter>
								<Button type="submit" colorScheme="blue" mr={3}>
									Save
								</Button>
								<Button onClick={onClose}>Cancel</Button>
							</ModalFooter>
						</form>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default AddPostModal;
