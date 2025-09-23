import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";

const SearchInput = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const onSearch = useGameQueryStore((state) => state.setSearchText);
  return (
    <form onSubmit={(e) => {
        e.preventDefault();
        if (!inputRef.current) return;
        onSearch(inputRef.current.value);
    }}>
        <InputGroup>
          <InputLeftElement children={<BsSearch />} />
          <Input
            borderRadius={20}
            placeholder="Search games..."
            variant={"filled"}
            ref={inputRef}
          />
        </InputGroup>
    </form>
  );
};

export default SearchInput;
