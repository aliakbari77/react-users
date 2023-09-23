import React from "react";
import { Post } from "./PostGrid";
import {
    Badge,
	Button,
	ButtonGroup,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Divider,
	Heading,
	Stack,
	Text,
} from "@chakra-ui/react";
import { AiOutlineEdit, AiOutlineHeart } from "react-icons/ai";
import {FaRegCommentDots} from "react-icons/fa"

interface Props {
	post: Post;
}

const PostCard = ({ post }: Props) => {
	return (
		<Card>
			<CardHeader>
				<Heading size="md">{post.title}</Heading>
			</CardHeader>
			<CardBody>
				<Stack>
					<Text>{post.body}</Text>
				</Stack>
				<Divider />
				<CardFooter>
					<ButtonGroup>
						<Button variant="ghost" colorScheme="red">
							<AiOutlineHeart fontSize={"24px"}/>
                            <Text marginX={2}>23</Text>
						</Button>
						<Button variant="ghost" colorScheme="blue">
                            <FaRegCommentDots fontSize={"24px"}/>
							<Text marginX={2}>14</Text>
						</Button>
						<Button variant="ghost">
                            <AiOutlineEdit fontSize={"24px"}/>
                        </Button>
					</ButtonGroup>
				</CardFooter>
			</CardBody>
		</Card>
	);
};

export default PostCard;
