import React from "react";
import { Post } from "./PostGrid";
import { Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Divider, Heading, Stack, Text } from "@chakra-ui/react";

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
                    <Text>
                        {post.body}
                    </Text>
                </Stack>
                <Divider/>
                <CardFooter>
                    <ButtonGroup>
                        <Button variant="solid" colorScheme="red">
                            Like
                        </Button>
                        <Button variant="solid" colorScheme="blue">
                            Comment
                        </Button>
                        <Button variant="outline">
                            Edit
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </CardBody>
		</Card>
	);
};

export default PostCard;
