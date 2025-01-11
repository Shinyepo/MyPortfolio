"use client";
import {
  Flex,
  Grid,
  HStack,
  StackSeparator,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { useColorModeValue } from "./ui/color-mode";

interface Props {
  toProjects: () => void;
  toContact: () => void;
  toSkills: () => void;
}

export const Header: FC<Props> = ({ toContact, toProjects, toSkills }) => {
  const color = useColorModeValue("rgba(0,0,0,.2)", "rgba(255,255,255,.2)");
  return (
    <Flex
      minH="60px"
      borderBottom="1px solid"
      borderColor={color}
      justifyContent="flex-end"
      pr="40px"
    >
      <Grid justifySelf="right">
        <HStack
          gap={7}
          separator={
            <StackSeparator 
              height="60%"
              alignSelf="auto"
              borderColor={color}
            />
          }
        >
          <ColorModeSwitcher />
          <Text cursor="pointer" onClick={toProjects}>
            My Projects
          </Text>
          <Text cursor="pointer" onClick={toSkills}>
            Computing Skills
          </Text>
          <Text cursor="pointer" onClick={toContact}>
            Contact
          </Text>
          {/* <ColorModeSwitcher /> */}
        </HStack>
      </Grid>
    </Flex>
  );
};
