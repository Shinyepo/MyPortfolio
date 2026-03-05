"use client";
import { useRef } from "react";
import { Box } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { ScrollTop } from "./components/ScrollTop";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ProgrammingSkills } from "./components/ProgrammingSkills";
import { init } from "@emailjs/browser";
import { userId } from "./consts";
import { AboutMe } from "./components/AboutMe";
import { Toaster } from "./components/ui/toaster";

export const App = () => {
  const projectRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  init(userId);

  const scrollToProjects = () => projectRef.current!.scrollIntoView();
  const scrollToContact = () => contactRef.current!.scrollIntoView();
  const scrollToSkills = () => skillsRef.current!.scrollIntoView();

  return (
    <>
      <Header
        toProjects={scrollToProjects}
        toContact={scrollToContact}
        toSkills={scrollToSkills}
      />
      <Box textAlign="center" fontSize="xl">
        <AboutMe />
        <Projects refProp={projectRef} />
        <ProgrammingSkills refProp={skillsRef} />
        <Contact refProp={contactRef} />
        <Footer />
        <ScrollTop />
        <Toaster />
      </Box>
    </>
  );
};
