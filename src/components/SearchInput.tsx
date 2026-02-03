import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const onSearch = useGameQueryStore((state) => state.setSearchText);
    const navigate = useNavigate();
  return (
    <form onSubmit={(e) => {
        e.preventDefault();
        if (!inputRef.current) return;
        onSearch(inputRef.current.value); 
        navigate('/') 
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
