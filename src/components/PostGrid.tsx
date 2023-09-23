import { Alert, AlertIcon, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import PostCardContainer from "./PostCardContainer";
import PostCard from "./PostCard";
import axios from "axios";
import { PostQuery } from "../App";
import usePosts from "../hooks/usePosts";

export interface Post {
  userId: number;
  id: number;
  body: string;
  title: string;
}

interface Props {
  postQuery: PostQuery;
}

const PostGrid = ({ postQuery }: Props) => {
  const { data: posts, error, isLoading } = usePosts(postQuery);

  if (error)
    return (
      <Alert status="error">
        <AlertIcon />
        There was an error processing your request
      </Alert>
    );

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 1, lg: 2, xl: 3 }}
      padding="10px"
      spacing={3}
    >
      {posts.map((post) => (
        <PostCardContainer key={post.id}>
          <PostCard post={post} />
        </PostCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default PostGrid;
