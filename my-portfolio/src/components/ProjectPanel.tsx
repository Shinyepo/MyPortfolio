import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Icon,
  Image,
  Link,
  Text,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import { FC } from "react";
import { colorMode } from "../theme";

interface Props {
  image: string;
  title: string;
  desc: string;
  tech?: string;
  url?: string;
}

export const ProjectPanel: FC<Props> = ({ image, title, desc, tech, url }) => {
  const color = useColorModeValue(colorMode.lightIcon, colorMode.darkIcon);
  return (
    <Box textAlign="left" p={7}>
      <Center>
        <Image
          src={image}
          alt={title}
          h="250px"
          w="400px"
          objectFit="fill"
          alignSelf="center"
        />
      </Center>
      <Text fontSize="4xl">{title}</Text>
      <Text fontSize="sm">{desc}</Text>
      {tech ? (
        <Text fontSize="x-small" fontStyle="italic">
          Used technologies: {tech}
        </Text>
      ) : null}
      <Box textAlign="right">
        <Tooltip label="Visit" bg="gray.700" color="white" hasArrow>
          <Link href={url ?? "#"} isExternal>
            <Icon
              as={ArrowForwardIcon}
              color={color}
              boxSize={8}
              cursor="pointer"
              mr="0"
            >
              Visit
            </Icon>
          </Link>
        </Tooltip>
      </Box>
    </Box>
  );
};
