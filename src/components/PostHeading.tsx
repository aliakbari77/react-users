import { Heading } from "@chakra-ui/react";
import React from "react";
import { User } from "./UserList";

interface Props {
  user: User;
}

const PostHeading = ({ user }: Props) => {
  const heading = user.name ? `Posts: ${user.name || ""}` : "All Posts";
  return <Heading>{heading}</Heading>;
};

export default PostHeading;
