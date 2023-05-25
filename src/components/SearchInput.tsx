import { Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';
import { useRef } from 'react';
import { GameQuery } from '../types/GameQuery.type';

interface Props {
  onSubmitSearch: (query: GameQuery) => void;
  query: GameQuery;
}

const SearchInput = ({ onSubmitSearch, query }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event?.preventDefault();
        if (inputRef.current) {
          onSubmitSearch({ ...query, search: inputRef?.current.value });
        }
      }}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={inputRef}
          borderRadius={20}
          placeholder={`Search games...`}
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
