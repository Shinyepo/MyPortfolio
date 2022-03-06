import { DownloadIcon } from "@chakra-ui/icons";
import { Box, Icon, Tooltip } from "@chakra-ui/react";
import { FC, useState } from "react";

export const ScrollTop: FC = () => {
  const [visible, setVisible] = useState(false);

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
        bg="gray.700"
        p="20px"
        borderRadius="50%"
        onClick={scrollToTop}
        cursor="pointer"
      >
        <Icon as={DownloadIcon} boxSize={8} transform="rotate(180deg)">
          Scroll to top
        </Icon>
      </Box>
    </Tooltip>
  );
};
