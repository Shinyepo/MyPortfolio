"use client";
import { Grid, VStack, Heading, Text } from "@chakra-ui/react";
import { FC } from "react";
import { colorMode } from "../theme";
import { useColorModeValue } from "./ui/color-mode";
const smallText =
  "Passionate programmer with roots in game scripting and community tools. Started by creating Arma 3 scripts and Discord bots for community servers, then transitioned into web development with .NET, TypeScript, and React. I excel at problem-solving and creating innovative solutions. In my free time I keep improving my skills and gaining knowledge by developing a tech-driven mod with Java for Minecraft.";
export const AboutMe: FC = () => {
  const color = useColorModeValue(colorMode.altDarkBg, colorMode.altLightBg);

  return (
    <Grid minH={["700px","700px","800px"]} p={3} textAlign="left">
      <VStack gap={2} mt="150px">
        <Heading size="6xl" textAlign="center">Hi, i'm Daniel!</Heading>
        <Text fontSize="md" w="300px">
          {smallText}
        </Text>
      </VStack>
    </Grid>
  );
};
