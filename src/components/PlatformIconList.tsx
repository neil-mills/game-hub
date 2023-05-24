import React from 'react';
import { Platform } from '../types/Platform.type';
import { HStack, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';

const iconMap: { [key: string]: IconType } = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  mac: FaApple,
  linux: FaLinux,
  android: FaAndroid,
  ios: MdPhoneIphone,
  nintendo: SiNintendo,
  web: BsGlobe,
};

interface Props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon
          key={platform.slug}
          color="gray.500"
          as={iconMap[platform.slug]}
        />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
