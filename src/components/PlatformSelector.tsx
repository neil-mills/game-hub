import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import useData from '../hooks/useData';
import { Platform } from '../types/Platform.type';
import { GameQuery } from '../types/GameQuery.type';

interface Props {
  query: GameQuery;
  onSelectPlatform: (query: GameQuery) => void;
}

const PlatformSelector = ({ onSelectPlatform, query }: Props) => {
  const { data, error, isLoading } = useData<Platform>(
    '/platforms/lists/parents'
  );
  if (error) return null;
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown />}
        disabled={isLoading}>
        {query?.platform?.name || `Platforms`}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectPlatform({ ...query, platform })}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
