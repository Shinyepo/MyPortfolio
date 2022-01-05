import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import { FC, RefObject } from "react";
import { ProjectPanel } from "./ProjectPanel";

interface Props {
  refProp: RefObject<HTMLDivElement>;
}

export const Projects: FC<Props> = ({ refProp }) => (
  <Box bg="#dbdde6" color="black" ref={refProp}>
    <Heading pt="30px">My Projects</Heading>

    <Grid
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(2, 1fr)"
      gap={2}
      py="3rem"
      px="8rem"
    >
      <GridItem colSpan={2} rowSpan={2}></GridItem>
      <GridItem colSpan={1}>
        <ProjectPanel
          title="Wuffel - Discord bot and Dashboard"
          image="http://cdn.statcdn.com/Infographic/images/normal/4056.jpeg"
          desc="A discord bot that helps administrators manage their server. Gather logs on users activities on the server in one place. Watch over text channels for banned words, spam or raids. Easy to use commands to ban, kick, mute users and more. Im currently working on developing a easy to use and manage support/ticket system. Bot is fully configurable through the Dashboard im developing at the same time or built in commands."
          tech="TypeScript, React, Node.js, Express, PostgreSQL, Redis"
          url="#"
        />
      </GridItem>
      <GridItem colSpan={1}>
        <ProjectPanel
          title="MonkeyFigths - a browser game"
          image="http://cdn.statcdn.com/Infographic/images/normal/4056.jpeg"
          desc="A simple browser game about recruiting units, fighting with other players and climbing leaderboard. Complete missions to get resources for upgrading your buildings and recruit more units. Compete with other players and reach the top of the leaderboard."
        />
      </GridItem>
    </Grid>
  </Box>
);
