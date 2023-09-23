import { SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import PostCardContainer from "./PostCardContainer";
import PostCard from "./PostCard";
import axios from "axios";

export interface Post {
	userId: number;
	id: number;
	body: string;
	title: string;
}

const PostGrid = () => {
	const [posts, setPosts] = useState<Post[]>([]);
	const [error, setError] = useState("");

	useEffect(() => {
		axios
			.get<Post[]>("https://jsonplaceholder.typicode.com/posts")
			.then((res) => {
				setPosts(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<SimpleGrid columns={{ sm: 1, md: 1, lg: 2, xl: 3 }} padding="10px" spacing={3}>
			{posts.map((post) => (
				<PostCardContainer>
					<PostCard post={post}/>
				</PostCardContainer>
			))}
		</SimpleGrid>
	);
};

export default PostGrid;
