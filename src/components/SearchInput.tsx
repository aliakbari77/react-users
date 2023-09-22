import { InputGroup, InputLeftElement, Input, useToast } from "@chakra-ui/react";
import React, { useRef } from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  const searchInput = useRef<HTMLInputElement>(null);
  const toast = useToast()
  return (
    <form onSubmit={(event) => {
        event.preventDefault()
        toast({
            title: "Searching",
            description: "Thanks for searching but back-end not service it.",
            status: "info",
            duration: 3000,
            isClosable: true
        })
    }}>
      <InputGroup marginX={8}>
        <InputLeftElement pointerEvents="none">
          <BsSearch color="gray.300" />
        </InputLeftElement>
        <Input
          ref={searchInput}
          type="tel"
          placeholder="Search..."
          borderRadius={25}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
