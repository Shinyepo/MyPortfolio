import { Box, Center, Image, Text } from "@chakra-ui/react";
import { FC } from "react";

interface Props {
  image: string;
  title: string;
  desc: string;
}

export const ProjectPanel: FC<Props> = ({ image, title, desc }) => {
  return (
    <Box textAlign="left" p={7}>
      <Center>
        <Image
          src={image}
          alt={title}
          h="250px"
          w="400px"
          objectFit="fill"
          alignSelf="center"
        />
      </Center>
      <Text fontSize="4xl">{title}</Text>
      <Text fontSize="sm">{desc}</Text>
    </Box>
  );
};
