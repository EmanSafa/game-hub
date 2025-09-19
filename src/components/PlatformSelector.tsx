import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import type { Platform } from "../hooks/usePlatforms";
import usePlatforms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatformId";
interface IProps {
  onSelectedPlatform: (platform: Platform) => void;
  selectedPlatformId: number;
}
const PlatformSelector = ({
  onSelectedPlatform,
  selectedPlatformId,
}: IProps) => {
  const { data, error } = usePlatforms();
  const selectedPlatform = usePlatform(selectedPlatformId);
  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
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
