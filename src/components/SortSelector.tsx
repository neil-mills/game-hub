import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import useData from '../hooks/useData';
import { GameQuery } from '../types/GameQuery.type';

interface SortOption {
  value: string;
  label: string;
}

interface Props {
  onSelectOrder: (query: GameQuery) => void;
  query: GameQuery;
}
const SortSelector = ({ onSelectOrder, query }: Props) => {
  const sortOrders: SortOption[] = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Date added' },
    { value: 'name', label: 'Name' },
    { value: 'released', label: 'Release date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average rating' },
  ];
  const selectedOrder: SortOption | undefined = sortOrders.find(
    (order) => order.value === query.ordering
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />} disabled={false}>
        Order by: {selectedOrder?.label || 'Relevance'}
      </MenuButton>
      <MenuList>
        {sortOrders.map(({ value, label }) => (
          <MenuItem
            key={value}
            onClick={() => onSelectOrder({ ...query, ordering: value })}>
            {label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
