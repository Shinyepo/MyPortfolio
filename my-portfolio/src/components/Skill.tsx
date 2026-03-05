"use client";
import { Box, Heading, Image } from "@chakra-ui/react";
import { FC } from "react";

interface Props {
  title: string;
  url: string;
}

export const Skill: FC<Props> = ({ title, url }) => (
  <Box alignContent="center" >
    <Image margin="auto" boxSize={[50,50,150]} objectFit="contain" src={url} alt={title} />
    <Heading mt={[0,0,"10px"]} size={["xs","xs","md"]} >{title}</Heading>
  </Box>
);
