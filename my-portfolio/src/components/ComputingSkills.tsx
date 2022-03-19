import { Box, Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import { FC, RefObject } from "react";
import { colorMode } from "../theme";
import { Skill } from "./Skill";

interface Props {
  refProp: RefObject<HTMLDivElement>;
}

export const ComputingSkills: FC<Props> = ({ refProp }) => {
  const color = useColorModeValue(colorMode.lightBorder, colorMode.darkBorder);
  const gitLogo = useColorModeValue("https://i.imgur.com/Nx9qW1n.png","https://i.imgur.com/nwb7oh6.png")
  return (
    <Box>
      <Heading pt="30px" borderTop="1px solid" borderColor={color}>
        My computing skills
      </Heading>
      <Flex
        ref={refProp}
        justifyContent="center"
        wrap="wrap"
        width="70%"
        margin="auto"
        gap="10px"
        p={6}
      >
        <Skill url="https://i.imgur.com/nIETPOK.png" title="C#" />
        <Skill url="https://i.imgur.com/jpZGJYT.png" title="HTML" />
        <Skill url="https://i.imgur.com/YGMDFbO.png" title="CSS" />
        <Skill url="https://i.imgur.com/VeCmGbz.png" title="Bootstrap" />
        <Skill url="https://i.imgur.com/gDFIzXx.png" title="JavaScript" />
        <Skill url="https://i.imgur.com/60iFpL1.png" title="TypeScript" />
        <Skill url="https://i.imgur.com/d7kDrtY.png" title="Node.js" />
        <Skill url="https://i.imgur.com/5DHVRLF.png" title="React" />
        <Skill url="https://wiki.postgresql.org/images/3/30/PostgreSQL_logo.3colors.120x120.png" title="PostgreSQL" />
        <Skill url="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" title="Git" />
        <Skill url={gitLogo} title="GitHub" />
      </Flex>
    </Box>
  );
};
