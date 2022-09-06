import { EmailIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Icon,
  Image,
  Link,
  List,
  ListIcon,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";
import { FC } from "react";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { colorMode } from "../theme";

export const Footer: FC = () => {
  const fontColor = useColorModeValue("gray.600", "gray.500");
  const iconColor = useColorModeValue(colorMode.lightIcon, colorMode.darkIcon);
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
        <List textAlign={"left"}>
          <ListItem verticalAlign={"middle"}>
            <Link isExternal href="https://github.com/Shinyepo">
              <ListIcon as={FaGithub} color={iconColor} boxSize="16px" d="inline-block" /> My GitHub
            </Link>
          </ListItem>
          <ListItem margin="auto">
            <ListIcon
              as={EmailIcon}
              color={iconColor}
              boxSize="16px"
              transform=""
            ></ListIcon>{" "}
            shinyepo42@gmail.com
          </ListItem>
          <ListItem>
            <ListIcon
              as={FaDiscord}
              color={iconColor}
              boxSize="16px"
              transform=""
            ></ListIcon>{" "}
            Shiny#2819
          </ListItem>
        </List>
        <Box textAlign="right">Built with React and Chakra Ui</Box>
      </Flex>
    </Box>
  );
};
