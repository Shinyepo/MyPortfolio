import { useRef } from "react";

import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Heading,
} from "@chakra-ui/react";
import { Logo } from "./Logo";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { theme } from "./theme";
import { ScrollTop } from "./components/ScrollTop";
import { Contact } from "./components/Contact";

export const App = () => {
  const projectRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToProjects = () => {
    projectRef.current!.scrollIntoView();
  }
  const scrollToContact = () => {
    contactRef.current!.scrollIntoView();
  }

  return (
    <ChakraProvider theme={theme}>
      <Header toProjects={scrollToProjects} toContact={scrollToContact}/>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="800px" p={3}>
          <VStack spacing={2} mt="150px">
            <Heading>Hi, i'm Daniel!</Heading>
            <Text fontSize="md"  w="300px">I'm a self taught full stack web developer currently looking for a job. In free time im developing my Discord bot and Dashboard. You can check my projects below :)</Text>
          </VStack>
        </Grid>
        <Projects refProp={projectRef} />
        <Contact refProp={contactRef} />
      </Box>
      <ScrollTop />
    </ChakraProvider>
  );
};
