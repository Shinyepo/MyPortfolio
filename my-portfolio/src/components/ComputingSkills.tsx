"use client";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { FC, RefObject } from "react";
import { colorMode } from "../theme";
import { Skill } from "./Skill";
import { useColorModeValue } from "./ui/color-mode";

interface Props {
  refProp: RefObject<HTMLDivElement | null>;
}

export const ComputingSkills: FC<Props> = ({ refProp }) => {
  const color = useColorModeValue(colorMode.lightBorder, colorMode.darkBorder);
  const gitLogo = useColorModeValue(
    "/tech/githubDark.png",
    "/tech/githubLight.png"
  );
  return (
    <Box ref={refProp}>
      <Heading pt="30px" borderTop="1px solid" borderColor={color}>
        My computing skills
      </Heading>
      <Flex
        justifyContent="center"
        wrap="wrap"
        width="70%"
        margin="auto"
        gap="10px"
        p={6}
      >
        <Skill url="/tech/ts.png" title="TypeScript" />
        <Skill url="/tech/js.png" title="JavaScript" />
        <Skill url="/tech/react.png" title="React" />
        <Skill url="/tech/nextjs.png" title="Next.js" />
        <Skill url="/tech/nodejs.png" title="Node.js" />
        <Skill url="/tech/postgresql.png" title="PostgreSQL" />
        <Skill url="/tech/graphql.png" title="GraphQL" />
        <Skill url="/tech/prisma.png" title="Prisma" />
        <Skill url="/tech/redis.png" title="Redis" />
        <Skill url="/tech/csharp.png" title="C#" />
        <Skill url="/tech/bootstrap.png" title="Bootstrap" />
        <Skill url="/tech/git.png" title="Git" />
        <Skill url={gitLogo} title="GitHub" />
      </Flex>
    </Box>
  );
};
