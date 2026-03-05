"use client";
import { Box, Icon } from "@chakra-ui/react";
import { FC, useState } from "react";
import { colorMode } from "../theme";
import { useColorModeValue } from "./ui/color-mode";
import { Tooltip } from "./ui/tooltip";
import { FaArrowUp } from "react-icons/fa";

export const ScrollTop: FC = () => {
  const [visible, setVisible] = useState(false);
  const iconColor = useColorModeValue(colorMode.darkIcon, colorMode.lightIcon);
  const altBg = useColorModeValue(colorMode.altDarkBg, colorMode.altLightBg);

  const scrollEvent = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", scrollEvent);

  return (
      <Tooltip content="Scroll to top" showArrow positioning={{placement: "top"}}>
        <Box
          display={visible ? "inline" : "none"}
          pos="fixed"
          bottom={["60px","60px","60px"]}
          right={["20px","20px","40px"]}
          zIndex="1"
          bg={altBg}
          p={["10px","10px","20px"]}
          borderRadius="50%"
          onClick={scrollToTop}
          cursor="pointer"
          boxShadow="xl"
          opacity={["50%","70%"]}
          _hover={{opacity: "100%"}}
        >
          <Icon color={iconColor} boxSize={["25px","25px","40px"]}>
            <FaArrowUp />
          </Icon>
        </Box>
      </Tooltip>
  );
};
