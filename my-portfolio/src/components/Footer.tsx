import { Box, Flex, Image, Link, useColorModeValue } from "@chakra-ui/react";
import { FC } from "react";

export const Footer: FC = () => {
  const fontColor = useColorModeValue("gray.600", "gray.500");
  const gitLogo = useColorModeValue(
    "https://i.imgur.com/Nx9qW1n.png",
    "https://i.imgur.com/nwb7oh6.png"
  );
  return (
    <Box borderTop="1px solid gray" h="120px">
      <Flex
        m="auto"
        h="100%"
        fontSize="sm"
        p="15px"
        color={fontColor}
        width="60%"
        justifyContent="space-between"
      >
        <Box>
          <Link isExternal href="https://github.com/Shinyepo">
            <Image src={gitLogo} boxSize="12px" d="inline-block" /> My GitHub
          </Link>
        </Box>
        <Box textAlign="right">Built with React and Chakra Ui</Box>
      </Flex>
    </Box>
  );
};
