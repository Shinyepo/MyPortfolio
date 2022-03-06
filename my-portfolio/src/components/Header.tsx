import { Flex, Grid, HStack, Text } from "@chakra-ui/react";
import { FC } from "react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";

interface Props {
  toProjects: () => void;
  toContact: () => void;
}

export const Header: FC<Props> = ({toContact, toProjects}) => (
  <Flex
    minH="60px"
    borderBottom="1px solid rgba(255,255,255,.2)"
    justifyContent="flex-end"
    pr="40px"
  >
    <Grid justifySelf="right">
      <HStack spacing={7} >
          <ColorModeSwitcher />
          <Text cursor="pointer" onClick={toProjects}>My Projects</Text>
          <Text cursor="pointer" onClick={toContact}>Contact</Text>
        {/* <ColorModeSwitcher /> */}
      </HStack>
    </Grid>
  </Flex>
);
