import { DownloadIcon } from "@chakra-ui/icons";
import { Box, Icon, Tooltip, useColorModeValue } from "@chakra-ui/react";
import { FC, useState } from "react";
import { colorMode } from "../theme";

export const ScrollTop: FC = () => {
  const [visible, setVisible] = useState(false);
  const bgColor = useColorModeValue(colorMode.lightBg, colorMode.darkBg);
  const iconColor = useColorModeValue(colorMode.lightIcon, colorMode.darkIcon);



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
    <Tooltip label="Scroll to top" hasArrow>
      <Box
        d={visible ? "inline" : "none"}
        pos="fixed"
        bottom="60px"
        right="40px"
        zIndex="1"
        bg={bgColor}
        p="20px"
        borderRadius="50%"
        onClick={scrollToTop}
        cursor="pointer"
      >
        <Icon as={DownloadIcon} color={iconColor} boxSize={8} transform="rotate(180deg)">
          Scroll to top
        </Icon>
      </Box>
    </Tooltip>
  );
};
