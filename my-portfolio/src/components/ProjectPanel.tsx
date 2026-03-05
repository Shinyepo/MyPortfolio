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
import { Tag } from "./ui/tag";

interface Props {
  image: string;
  title: string;
  desc: string;
  tech?: string;
  url?: string;
  slideImages?: Array<slideImages>;
  wip?: boolean;
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
  wip
}: Props) => {
  const color = useColorModeValue(colorMode.lightIcon, colorMode.darkIcon);

  return (
    <Box textAlign="left" p={["1rem", "1rem", "3rem"]}>
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
            <DialogBody
              display={["flex", "flex", ""]}
              flexDir={["column", "column", ""]}>
              <VStack
                my={["auto", "auto", ""]}>
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
      <Box display="flex">
        {wip ? (<Tag alignSelf="center" bg="red.400">
          WIP
        </Tag>) : null}
        <Text fontSize={["3xl", "3xl", "4xl"]} mt={["1rem", "1rem", ""]} display="flex" flexWrap="nowrap" alignItems="center">
          {title}
        </Text>
      </Box>

      <Text fontSize="sm">{desc}</Text>
      {tech ? (
        <Text fontSize="x-small" fontStyle="italic" mt={2}>
          Made with: {tech}
        </Text>
      ) : null}
      <Box textAlign="right">
        {url ? (
          <Tooltip
            content="Visit"
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
          </Tooltip>) : null}
      </Box>
    </Box>
  );
};
