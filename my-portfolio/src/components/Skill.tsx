import { Box, Heading, Image } from "@chakra-ui/react";
import { FC } from "react";

interface Props {
  title: string;
  url: string;
}

export const Skill: FC<Props> = ({ title, url }) => (
  <Box alignContent="center" width="200px" height="220px" >
    <Image margin="auto" boxSize="150px" objectFit="contain" src={url} alt={title} />
    <Heading mt="10px" as="h5" size="sm">{title}</Heading>
  </Box>
);
