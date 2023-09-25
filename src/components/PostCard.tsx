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
  useDisclosure,
} from "@chakra-ui/react";
import { AiOutlineEdit, AiOutlineHeart } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import AddPostModal from "./AddPostModal";
import EditPostModal from "./EditPostModal";

interface Props {
  post: Post;
}

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

const randomNumberCreated = randomNumber();
const randomDateCreated = randomDate(new Date(2012, 0, 1), new Date());

const PostCard = ({ post }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Card>
        <CardHeader>
          <Heading size="md">{post.title}</Heading>
        </CardHeader>
        <CardBody>
          <Stack>
            <Text>{post.body}</Text>
            <Text textAlign={"right"}>{randomDateCreated}</Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup>
            <Button variant="ghost" colorScheme="red">
              <AiOutlineHeart fontSize={"24px"} />
              <Text marginX={2}>{randomNumberCreated}</Text>
            </Button>
            <Button variant="ghost" colorScheme="blue">
              <FaRegCommentDots fontSize={"24px"} />
              <Text marginX={2}>{randomNumberCreated}</Text>
            </Button>
            <Button variant="ghost">
              <AiOutlineEdit onClick={onOpen} fontSize={"24px"} />
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
      <EditPostModal
        onClose={onClose}
        onOpen={onOpen}
        isOpen={isOpen}
        post={post}
      />
    </>
  );
};

export default PostCard;
