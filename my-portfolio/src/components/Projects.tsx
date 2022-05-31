import {
  Box,
  Grid,
  GridItem,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { FC, RefObject } from "react";
import { monkeyImages, spiceImages } from "../consts";
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
            title="Spice - a restaurant website"
            image="https://i.imgur.com/Fs4U0FE.png"
            desc="A e-commerce website for fictional restaurant. With the manager account you can freely add, change and delete categories, subcategories, menu items, coupons or even users. User accounts have 4 different permission groups. Manager - a admin account with full access, Front Desk - managing orders and delivery, Kitchen - managing preparation state of the order and Customer - can only submit the order. Website is connected with Stripe's(online payment service) test mode."
            url="https://www.spice.shinyepo.dev/"
            slideImages={spiceImages}
          />
        </GridItem>
      </Grid>
    </Box>
  );
};
