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
  HStack,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { AiOutlineEdit, AiOutlineHeart } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";

interface Props {
  post: Post;
}

const PostCard = ({ post }: Props) => {
  function randomDate(start: Date, end: Date) {
    const newDate = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
    const year = newDate.getFullYear();
    const month = newDate.getMonth() + 1;
    const day = newDate.getDate();
    const showDate = [year, month, day].join("-");
    return showDate;
  }

  function randomNumber() {
    return Math.floor(Math.random() * 101);
  }

  return (
    <Card height={"340px"}>
      <CardHeader>
        <Heading size="md">{post.title}</Heading>
      </CardHeader>
      <CardBody>
        <Stack>
          <Text>{post.body}</Text>
          <Text textAlign={"right"}>
            {randomDate(new Date(2012, 0, 1), new Date())}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup>
          <Button variant="ghost" colorScheme="red">
            <AiOutlineHeart fontSize={"24px"} />
            <Text marginX={2}>{randomNumber()}</Text>
          </Button>
          <Button variant="ghost" colorScheme="blue">
            <FaRegCommentDots fontSize={"24px"} />
            <Text marginX={2}>{randomNumber()}</Text>
          </Button>
          <Button variant="ghost">
            <AiOutlineEdit fontSize={"24px"} />
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
