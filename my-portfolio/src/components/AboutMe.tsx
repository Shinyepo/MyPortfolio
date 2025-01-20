"use client";
import { Grid, VStack, Heading, Text } from "@chakra-ui/react";
import { FC } from "react";
import { colorMode } from "../theme";
import { useColorModeValue } from "./ui/color-mode";
const smallText =
  "Passionate programmer with roots in game scripting and community tools. From creating Arma 3 scripts and Discord bots to diving into web development with C#, TypeScript, and React, I thrive on solving problems and crafting innovative solutions. In my free time, I channel my creativity into developing a tech-driven Minecraft mod.";
export const AboutMe: FC = () => {
  const color = useColorModeValue(colorMode.altDarkBg, colorMode.altLightBg);

  return (
    <Grid minH="800px" p={3} textAlign="left">
      <VStack gap={2} mt="150px">
        <Heading size="6xl">Hi, i'm Daniel!</Heading>
        <Text fontSize="md" w="300px">
          {smallText}
        </Text>
      </VStack>
    </Grid>
  );
};
