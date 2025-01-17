"use client";
import {
  Grid,
  VStack,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { FC } from "react";
import { colorMode } from "../theme";
import { useColorModeValue } from "./ui/color-mode";
const smallText =
  "I'm a fullstack web developer currently looking for a job. Constantly learning new things. In free time i'm developing my Discord bot and Dashboard. You can check my projects below :)";
const epxandedText =
  "I'm a fullstack web developer currently looking for a job. Constantly learning new things. In free time i'm developing my Discord bot and Dashboard. You can check my projects below :) I started my journey with programming in high school. I've been developing community game servers for Arma III and GTA V for 3 years. After that i moved to Discord. I started developing my very first bot for my friends community server. The bot was equiped with functions like: registering new users to the server with specific roles, displaying more specific information about users, logging system for messages and other user activities and many more fun, moderating and utility functions. My goal now is to learn more advanced techniques to speed up developing process.";

export const AboutMe: FC = () => {
  const [text, setText] = useState<"small" | "expanded">("small");
  const color = useColorModeValue(colorMode.altDarkBg, colorMode.altLightBg);

  const toggleText = () => {
    if (text === "small") {
      setText("expanded");
    } else {
      setText("small");
    }
  };

  const handleClick = () => {
    toggleText();
  };
  return (
    <Grid minH="800px" p={3} textAlign="left">
      <VStack gap={2} mt="150px">
        <Heading>Hi, i'm Daniel!</Heading>
        <Text fontSize="md" w="300px">
          {text === "small" ? (
            <>
              {smallText}
              <br />
              <Text
                onClick={handleClick}
                color={color}
                textAlign="right"
                cursor="pointer"
              >
                Read more...
              </Text>
            </>
          ) : (
            <>
              {epxandedText}
              <br />
              <Text
                onClick={handleClick}
                color={color}
                textAlign="right"
                cursor="pointer"
              >
                ...Hide text
              </Text>
            </>
          )}
        </Text>
      </VStack>
    </Grid>
  );
};
