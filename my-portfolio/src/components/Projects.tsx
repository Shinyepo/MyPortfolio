import {
  Box,
  Grid,
  GridItem,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { FC, RefObject } from "react";
import { monkeyImages } from "../consts";
import { colorMode } from "../theme";
import { ProjectPanel } from "./ProjectPanel";

interface Props {
  refProp: RefObject<HTMLDivElement>;
}

export const Projects: FC<Props> = ({ refProp }) => {
  const color = useColorModeValue(colorMode.lightBorder, colorMode.darkBorder);
  return (
    <Box borderTop="1px solid" borderColor={color} ref={refProp}>
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
            title="MonkeyFigths - a browser game"
            image="https://i.imgur.com/bnq3PSG.png"
            desc="A simple browser game about recruiting units, fighting with other players and climbing leaderboard. Complete missions to get resources for upgrading your buildings and recruiting more units. Compete with other players and reach the top of the leaderboard."            
            url="https://www.monkeyfights.shinyepo.dev/"
            slideImages={monkeyImages}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <ProjectPanel
            title="Placeholder Title"
            image=""
            desc="Placeholder"
            slideImages={[]}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <ProjectPanel
            title="Placeholder Title"
            image=""
            desc="Placeholder"
            slideImages={[]}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <ProjectPanel
            title="Placeholder Title"
            image=""
            desc="Placeholder"
            slideImages={[]}
          />
        </GridItem>
      </Grid>
    </Box>
  );
};
