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
import React, { ChangeEvent, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useUsers from "../hooks/useUsers";
import axios from "axios";
import { Post } from "./PostGrid";

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
  post: Post;
}

const AddPostModal = ({ isOpen, onOpen, onClose, post }: Props) => {
  const userNameRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const { data: users, isLoading, error } = useUsers();
  const toast = useToast();
  const [newPost, setNewPost] = useState<Post>({
    id: post.id,
    userId: post.userId,
    body: post.body,
    title: post.title,
  });

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
      .post("https://jsonplaceholder.typicode.com/posts", {
        title: data.title,
        body: data.body,
        userId: parseInt(data.userId),
      })
      .then((res) => {
        console.log(res);
        toast({
          title: "Update Post Successfully",
          description: "Post is updated but not store at database.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: "Update Post Failed",
          description: "There is a problem at update post.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
    onClose();
  };

  const handleChangePost = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;
    console.log(event);
    setNewPost({ ...newPost, [name]: value });
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
                  placeholder="Title"
                  value={newPost.title}
                  onChange={handleChangePost}
                />
                {errors.title && (
                  <Alert marginTop={2} borderRadius={4} status="error">
                    <AlertTitle>{errors.title.message}</AlertTitle>
                  </Alert>
                )}
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Description</FormLabel>
                <Textarea
                  {...register("body")}
                  placeholder="Here is a sample placeholder"
                  value={newPost.body}
                  onChange={handleChangePost}
                />
                {errors.body && (
                  <Alert marginTop={2} borderRadius={4} status="error">
                    <AlertTitle>{errors.body.message}</AlertTitle>
                  </Alert>
                )}
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>User</FormLabel>
                <Select
                  {...register("userId")}
                  placeholder="Select User"
                  value={newPost.userId}
                  onChange={handleChangePost}
                >
                  {users.map((user) => {
                    return (
                      <option key={user.id} value={user.id}>
                        {user.name}
                      </option>
                    );
                  })}
                </Select>
                {errors.userId && (
                  <Alert marginTop={2} borderRadius={4} status="error">
                    <AlertTitle>{errors.userId.message}</AlertTitle>
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
