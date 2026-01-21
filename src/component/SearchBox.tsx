import {  Input } from "@chakra-ui/react";
import { useRef } from "react";
import "../index.css";

interface Props {
  onSearch: (searchText: string) => void;
}
const SearchBox = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current?.value);
      }}
    >
      <Input
        borderBlockEndColor={"red.500"}
        borderTopColor={"green.400"}
        borderLeftColor="green.400"
        borderRightColor="green.400"
        
        ref={ref}
        borderRadius={20}
        placeholder="Search Games"
        variant={"filled"}
      />
    </form>
  );
};

export default SearchBox;
