"use client";
import { Box, Flex, Link, List, ListItem } from "@chakra-ui/react";
import { FC } from "react";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { colorMode } from "../theme";
import { useColorModeValue } from "./ui/color-mode";
import { LuExternalLink } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";

export const Footer: FC = () => {
  const fontColor = useColorModeValue("gray.600", "gray.500");
  const iconColor = useColorModeValue(colorMode.lightIcon, colorMode.darkIcon);
  return (
    <Box borderTop="1px solid gray" h={["80px","80px","120px"]}>
      <Flex
        mx={["5px","5px","auto"]}
        h="100%"
        fontSize="sm"
        px={["2px","2px","15px"]}
        py={["5px","5px","15px"]}
        color={fontColor}
        width={["","","60%"]}
        justifyContent="space-between"
      >
        <List.Root textAlign={"left"} variant="plain">
          <List.Item verticalAlign={"middle"}>
            <List.Indicator
              as={FaGithub}
              color={iconColor}
              boxSize="16px"
              display="inline-block"
            />
            <Link href="https://github.com/Shinyepo">
              My GitHub <LuExternalLink />
            </Link>
          </List.Item>
          <ListItem verticalAlign={"middle"}>
            <List.Indicator
              as={TfiEmail}
              color={iconColor}
              boxSize="16px"
              display="inline-block"
            />
            daniel.berdowski97@gmail.com
          </ListItem>
          <ListItem>
            <List.Indicator
              as={FaDiscord}
              color={iconColor}
              boxSize="16px"
              display="inline-block"
            />
            Shinyepo
          </ListItem>
        </List.Root>
        <Box textAlign="right">Built with React and Chakra Ui</Box>
      </Flex>
    </Box>
  );
};
