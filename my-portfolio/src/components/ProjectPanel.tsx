"use client";
import {
  Box,
  Center,
  Flex,
  Icon,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { colorMode } from "../theme";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./ProjectPanel.css";
import { useColorModeValue } from "./ui/color-mode";
import { Tooltip } from "./ui/tooltip";
import { LuExternalLink } from "react-icons/lu";
import {
  DialogBackdrop,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

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

export const ProjectPanel = ({
  image,
  title,
  desc,
  tech,
  url,
  slideImages,
}: Props) => {
  const color = useColorModeValue(colorMode.lightIcon, colorMode.darkIcon);

  return (
    <Box textAlign="left" p="7">
      <Center>
        <DialogRoot
          placement={"center"}
          size="full"
          closeOnEscape={true}
          closeOnInteractOutside={true}
        >
          <DialogBackdrop />
          <DialogTrigger>
            <Tooltip content="Show me more!">
              <Image
                src={image}
                alt={title}
                h="250px"
                w="400px"
                objectFit="cover"
                alignSelf="center"
              />
            </Tooltip>
          </DialogTrigger>
          <DialogContent>
            <DialogCloseTrigger />
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
            </DialogHeader>
            <DialogBody>
              <VStack>
                <Box
                  maxW="1450px"
                  maxH="850px"
                  w="100%"
                  h="100%"
                  className="slide-container"
                >
                  <Slide
                    autoplay={false}
                    transitionDuration="500"
                    canSwipe={true}
                    arrows={true}
                  >
                    {slideImages?.map((slideImage, index) => (
                      <Flex className="each-slide" key={index}>
                        <Image src={slideImage.url} alt="Missing image." />
                      </Flex>
                    ))}
                  </Slide>
                </Box>
              </VStack>
            </DialogBody>
            <DialogFooter />
          </DialogContent>
        </DialogRoot>
      </Center>
      <Text fontSize="4xl">{title}</Text>
      <Text fontSize="sm">{desc}</Text>
      {tech ? (
        <Text fontSize="x-small" fontStyle="italic" mt={2}>
          Made with: {tech}
        </Text>
      ) : null}
      <Box textAlign="right">
        <Tooltip
          content="Visit"
          contentProps={{
            css: { "--tooltip-bg": "gray.700", "--tooltip-color": "white" },
          }}
          showArrow
        >
          <Link href={url ?? "#"} target="_blank">
            <Icon color={color} boxSize="8" cursor="pointer" mr="0">
              <>
                Visit
                <LuExternalLink />
              </>
            </Icon>
          </Link>
        </Tooltip>
      </Box>
    </Box>
  );
};
