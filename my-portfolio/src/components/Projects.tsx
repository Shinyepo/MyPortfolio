"use client";
import {
  Box,
  Grid,
  GridItem,
  Heading,
} from "@chakra-ui/react";
import { FC, RefObject } from "react";
import { epodditImages, minecraftImages, monkeyImages, spiceImages, wuffelImages } from "../consts";
import { colorMode } from "../theme";
import { ProjectPanel } from "./ProjectPanel";
import { useColorModeValue } from "./ui/color-mode";

interface Props {
  refProp: RefObject<HTMLDivElement | null>;
}

export const Projects: FC<Props> = ({ refProp }) => {
  const color = useColorModeValue(colorMode.lightBorder, colorMode.darkBorder);
  return (
    <Box borderTop="1px solid" borderColor={color} ref={refProp}>
      <Heading pt="30px" size="4xl">My Projects</Heading>

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
            tech="TypeScript - TypeScript, React, NextJS, Prisma and Jest."
          />
        </GridItem>
        <GridItem colSpan={1}>
          <ProjectPanel
            title="Wuffel - Discord bot Dashboard"
            image="https://i.imgur.com/ya3FGQ7.png"
            desc="Wuffel is a Discord bot with built-in administrative functions. All functions can be configured with a web dashboard."
            url="https://wuffel.shinyepo.dev/"
            slideImages={wuffelImages}
            tech="TypeScript - React, NextJS, GraphQL and Redis."
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
        <GridItem colSpan={1}>
          <ProjectPanel
            title="TorqueCraft - Minecraft mod (1.21)"
            image="https://i.imgur.com/NhpdotM.jpeg"
            desc="A tech-driven minecraft mod focused on realism. This mod introduces rotary powered machines like fan, sprinkler, grinder, water pump and more. Different machines require different Torque and Angular speed values. To satisfy the needs you can use multiple steam engines or gearboxes with gear ratios. In the near future i will be adding gasoline and diesel powered engines with highier outputs with new machines."
            url=""
            slideImages={minecraftImages}
            tech="Java, NeoForge"
            wip
          />
        </GridItem>
      </Grid>
    </Box>
  );
};
