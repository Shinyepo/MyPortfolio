import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import { FC, MutableRefObject, RefObject } from "react";
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
          title="Projekt tytul"
          image="http://cdn.statcdn.com/Infographic/images/normal/4056.jpeg"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, architecto omnis. Nulla eligendi suscipit reiciendis molestiae facere maiores labore, ab a nemo quam corrupti dolore, esse consequuntur! Natus, nostrum ab!"
        />
      </GridItem>
      <GridItem colSpan={1}>
        <ProjectPanel
          title="Projekt tytul"
          image="http://cdn.statcdn.com/Infographic/images/normal/4056.jpeg"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, architecto omnis. Nulla eligendi suscipit reiciendis molestiae facere maiores labore, ab a nemo quam corrupti dolore, esse consequuntur! Natus, nostrum ab!"
        />
      </GridItem>
    </Grid>
  </Box>
);
