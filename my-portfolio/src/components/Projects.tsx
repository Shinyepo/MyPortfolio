import {
  Box,
  Grid,
  GridItem,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { FC, RefObject } from "react";
import { epodditImages, monkeyImages, spiceImages } from "../consts";
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
            title="Epoddit - Reddit Clone"
            image="https://i.imgur.com/4bvGZPP.png"
            desc="Epoddit is a clone of a very popular website called Reddit. Users can create threads to discuss different topics. Comment, like and dislike content they enjoy or not."
            url="https://epoddit.shinyepo.dev/"
            slideImages={epodditImages}
            tech="TypeScript - React, NextJS, Prisma and Jest."
          />
        </GridItem>
        <GridItem colSpan={1}>
          <ProjectPanel
            title="MonkeyFigths - a browser game"
            image="https://i.imgur.com/bnq3PSG.png"
            desc="A simple browser game about recruiting units, fighting with other players and climbing leaderboard. Complete missions to get resources for upgrading your buildings and recruiting more units. Compete with other players and reach the top of the leaderboard."
            url="https://mf.shinyepo.dev/"
            slideImages={monkeyImages}
            tech="C# - Blazor WebAssembly, SendGrid"
          />
        </GridItem>
        <GridItem colSpan={1}>
          <ProjectPanel
            title="Spice - E-commerce"
            image="https://i.imgur.com/Fs4U0FE.png"
            desc="This is my very first web app. A e-commerce website. With the manager account you can freely add, change and delete categories, subcategories, menu items, coupons or even users. User accounts have 4 different permission groups. Manager - a admin account with full access, Front Desk - managing orders and delivery, Kitchen - managing preparation state of the order and Customer - can only submit the order. Website is connected with Stripe's(online payment service) test mode."
            url="https://spice.shinyepo.dev/"
            slideImages={spiceImages}
            tech="C# - ASP.NET Core MVC, Stripe"
          />
        </GridItem>
      </Grid>
    </Box>
  );
};
