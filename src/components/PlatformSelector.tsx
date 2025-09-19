import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatorm from "../hooks/usePlatforms";
import type { Platform } from "../hooks/usePlatforms";
interface IProps {
  onSelectedPlatform: (platform: Platform) => void;
  selectedPlatformId: number;
}
const PlatformSelector = ({
  onSelectedPlatform,
  selectedPlatformId,
}: IProps) => {
  const { data, error } = usePlatorm();
  if (error) return null;
  const selectedPlatorm = data?.results.find(
    (p) => p.id === selectedPlatformId
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatorm?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => onSelectedPlatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
