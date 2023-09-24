import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  FormErrorMessage,
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  userName: z.string().min(3),
  email: z.string().email(),
});

type FormData = z.infer<typeof schema>;

interface Props {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const AddUserModal = ({ isOpen, onOpen, onClose }: Props) => {
  const userNameRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
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
          <ModalHeader>Add User</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl>
                <FormLabel>User Name</FormLabel>
                <Input {...register("userName")} placeholder="User name" />
                {errors.userName && (
                  <Alert marginTop={2} borderRadius={4} status="error">
                    <AlertTitle>{errors.userName.message}</AlertTitle>
                  </Alert>
                )}
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Email</FormLabel>
                <Input {...register("email")} placeholder="Last name" />
                {errors.email && (
                  <Alert marginTop={2} borderRadius={4} status="error">
                    <AlertTitle>{errors.email.message}</AlertTitle>
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

export default AddUserModal;
