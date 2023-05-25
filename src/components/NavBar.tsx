import React from 'react';
import { HStack, Image, Text } from '@chakra-ui/react';
import Logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';
import { GameQuery } from '../types/GameQuery.type';

interface Props {
  onSubmitSearch: (query: GameQuery) => void;
  query: GameQuery;
}

const NavBar = ({ onSubmitSearch, query }: Props) => {
  return (
    <HStack padding="10px" justifyContent={'space-between'}>
      <Image src={Logo} boxSize="60px" />
      <SearchInput onSubmitSearch={onSubmitSearch} query={query} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
