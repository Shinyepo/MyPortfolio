import {
  ArrowForwardIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Center,
  Flex,
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
import { FC } from "react";
import { colorMode } from "../theme";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

interface Props {
  image: string;
  title: string;
  desc: string;
  tech?: string;
  url?: string;
  slideImages?: Array<slideImages>;
}

type slideImages = {
  url: string;
  caption?: string;
};

export const ProjectPanel: FC<Props> = ({
  image,
  title,
  desc,
  tech,
  url,
  slideImages,
}) => {
  const color = useColorModeValue(colorMode.lightIcon, colorMode.darkIcon);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bgColor = useColorModeValue(colorMode.lightBg, colorMode.darkBg);

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
          <ModalContent bg="">
            <ModalHeader>{title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack>
                <Box
                  maxW="1450px"
                  maxH="850px"
                  w="100%"
                  h="100%"
                  className="slide-container"
                >
                  <Slide autoplay={false} transitionDuration="500" canSwipe={false}>
                    {slideImages?.map((slideImage, index) => (
                      <Flex className="each-slide" key={index}>
                        <Image src={slideImage.url} alt="Missing image." />
                      </Flex>
                    ))}
                  </Slide>
                </Box>
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
