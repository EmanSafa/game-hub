import { HStack, Icon } from "@chakra-ui/react";
import type { Platform } from "../hooks/usePlatforms";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import type { IconType } from "react-icons";

interface IProps {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: IProps) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <div>
      <HStack marginY={"7px"}>
        {platforms.map((platform) => (
          <Icon
            as={iconMap[platform.slug]}
            key={platform.id}
            color={"gray.400"}
          />
        ))}
      </HStack>
    </div>
  );
};

export default PlatformIconList;
