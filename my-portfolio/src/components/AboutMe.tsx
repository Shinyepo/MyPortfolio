import {
  Grid,
  VStack,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { FC } from "react";
import { colorMode } from "../theme";
const smallText =
  "I'm a full stack web developer currently looking for a job. In free time i'm developing my Discord bot and Dashboard. You can check my projects below :)";
const epxandedText = "I'm a full stack web developer currently looking for a job. In free time i'm developing my Discord bot and Dashboard. You can check my projects below :) more....";

export const AboutMe: FC = () => {
  const [text, setText] = useState<"small" | "expanded">("small");
  const color = useColorModeValue(colorMode.altLightBg, colorMode.altDarkBg);
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
      <VStack spacing={2} mt="150px">
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
                Hide text...
              </Text>
            </>
          )}
        </Text>
      </VStack>
    </Grid>
  );
};
