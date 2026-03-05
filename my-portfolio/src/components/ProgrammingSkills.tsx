"use client";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { FC, RefObject } from "react";
import { colorMode } from "../theme";
import { Skill } from "./Skill";
import { useColorModeValue } from "./ui/color-mode";

interface Props {
  refProp: RefObject<HTMLDivElement | null>;
}

export const ProgrammingSkills: FC<Props> = ({ refProp }) => {
  const color = useColorModeValue(colorMode.lightBorder, colorMode.darkBorder);
  return (
    <Box ref={refProp}>
      <Heading pt={["10px","10px","30px"]} borderTop="1px solid" size="4xl" borderColor={color}>
        My programming skills
      </Heading>
      <Flex
        justifyContent="center"
        wrap="wrap"
        width={["85%", "70%"]}
        maxWidth="1000px"
        margin="auto"
        gap={["10px","10px","25px"]}
        py={["1rem","1rem","3rem"]}
      >
        <Skill url="/tech/java.png" title="Java" />
        <Skill url="/tech/spring.png" title="Spring" />
        <Skill url="/tech/csharp.png" title="C#" />
        <Skill url="/tech/net.png" title=".NET" />
        <Skill url="/tech/js.png" title="JavaScript" />
        <Skill url="/tech/ts.png" title="TypeScript" />
        <Skill url="/tech/nodejs.png" title="Node.js" />
        <Skill url="/tech/react.png" title="React" />
        <Skill url="/tech/nextjs.png" title="Next.js" />
        <Skill url="/tech/postgresql.png" title="PostgreSQL" />
        <Skill url="/tech/prisma.png" title="Prisma" />
        <Skill url="/tech/graphql.png" title="GraphQL" />
        <Skill url="/tech/redis.png" title="Redis" />
        <Skill url="/tech/git.png" title="Git" />
      </Flex>
    </Box>
  );
};
