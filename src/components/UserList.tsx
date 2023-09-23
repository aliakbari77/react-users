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

export interface User {
	id: number;
	name: string;
	email: string;
}

interface Props {
	onSelectUser: (user: User) => void;
}

const UserList = ({ onSelectUser }: Props) => {
	const [users, setUsers] = useState<User[]>([]);
	const [isLoading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);
		axios
			.get<User[]>("https://jsonplaceholder.typicode.com/users")
			.then((req) => {
				setUsers(req.data);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setLoading(false);
			});
	}, []);
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
							<Button
								variant="link"
								onClick={() => onSelectUser(user)}
							>
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
