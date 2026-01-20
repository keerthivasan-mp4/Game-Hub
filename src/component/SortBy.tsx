import {
  Button,
  keyframes,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder:string;
}

const SortBy = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "name", label: "Name" },
    { value: "-released", label: "Released Date" },
    { value: "-added", label: "Date Added" },
    { value: "-rating", label: "Top Rated" },
    { value: "-metacritic", label: "Popular" },
  ];

  const currentSortOrder = sortOrders.find(order=> order.value === sortOrder)



  return (
    <Menu>
      <MenuButton as={Button}  marginLeft={3} padding={2}>
        Sort by: {currentSortOrder?.label} 
      </MenuButton>

      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => onSelectSortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortBy;
