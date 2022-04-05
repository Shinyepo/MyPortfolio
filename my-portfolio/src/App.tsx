import { useRef } from "react";

import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  Heading,
} from "@chakra-ui/react";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { theme } from "./theme";
import { ScrollTop } from "./components/ScrollTop";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ComputingSkills } from "./components/ComputingSkills";
import { init } from "@emailjs/browser";
import { userId } from "./consts";

export const App = () => {
  const projectRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  init(userId);

  const scrollToProjects = () => projectRef.current!.scrollIntoView();
  const scrollToContact = () => contactRef.current!.scrollIntoView();
  const scrollToSkills = () => skillsRef.current!.scrollIntoView();

  return (
    <ChakraProvider theme={theme}>
      <Header toProjects={scrollToProjects} toContact={scrollToContact} toSkills={scrollToSkills}/>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="800px" p={3}>
          <VStack spacing={2} mt="150px">
            <Heading>Hi, i'm Daniel!</Heading>
            <Text fontSize="md" w="300px">
              I'm a full stack web developer currently looking for a
              job. In free time i'm developing my Discord bot and Dashboard. You
              can check my projects below :)
            </Text>
          </VStack>
        </Grid>
        <Projects refProp={projectRef} />
        <ComputingSkills refProp={skillsRef} />
        <Contact refProp={contactRef} />
        <Footer />
      </Box>
      <ScrollTop />
    </ChakraProvider>
  );
};
