import {
  ArrowForwardIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Center,
  Flex,
  HStack,
  Icon,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  Tooltip,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { FC, useState } from "react";
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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bgColor = useColorModeValue(colorMode.lightBg, colorMode.darkBg);
  const [idx, setIdx] = useState(0);

  return (
    <Box textAlign="left" p={7}>
      <Center>
        <Tooltip label="Show me more!">
          <Image
            src={image}
            alt={title}
            h="250px"
            w="400px"
            objectFit="cover"
            alignSelf="center"
            onClick={onOpen}
          />
        </Tooltip>
        <Modal
          isCentered
          onClose={onClose}
          isOpen={isOpen}
          motionPreset="slideInBottom"
          size="full"
        >
          <ModalOverlay />
          <ModalContent bg={bgColor}>
            <ModalHeader>{title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack justifyContent="center">
                <Image
                  src={image}
                  objectFit="initial"
                  // boxSize="xl"
                  maxW="1450px"
                  maxH="850px"
                  alt="Missing image"
                />
                <HStack justifyContent="center" pb="4px" pt="10px">
                  <Icon as={ArrowLeftIcon} />
                  <Icon as={ArrowRightIcon} />
                </HStack>
              </VStack>
            </ModalBody>
          </ModalContent>
        </Modal>
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
