import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { ChangeEvent, FC, RefObject, useState } from "react";
import { DarkInput } from "./DarkInput";

type ContactForm = {
  [key: string]: string | undefined;
  name?: string;
  email?: string;
  topic?: string;
  content?: string;
};

interface Props {
  refProp: RefObject<HTMLDivElement>;
}

export const Contact: FC<Props> = ({ refProp }) => {
  const [form, setForm] = useState<ContactForm>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    console.log(form);
  };

  return (
    <Box
      bg="#dbdde6"
      borderTop="1px solid gray"
      ref={refProp}
      h="600px"
      color="black"
    >
      <Heading pt="30px">Contact me!</Heading>
      <Text fontSize="md">
        Feel free to contact me if you have any questions!
      </Text>
      <Box w="600px" justifySelf="center" mx="auto" mt="60px">
        <form>
          <VStack spacing={2}>
            <FormControl>
              <FormLabel htmlFor="name">Name</FormLabel>
              <DarkInput changeEvent={handleChange} fn="name" ph="Your name" />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <DarkInput
                changeEvent={handleChange}
                fn="email"
                ph="Your email"
                type="email"
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="topic">Topic</FormLabel>
              <DarkInput changeEvent={handleChange} fn="topic" ph="Topic" />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="message">Message</FormLabel>
              <Textarea
                changeEvent={handleChange}
                name="message"
                id="message"
                placeholder="Your message"
                bg="gray.600"
                borderColor="gray.700"
                color="white"
              />
            </FormControl>            
          </VStack>
          <Button float="right" mt="12px" bg="gray.700" color="white" _hover={{bg: "gray.400", color: "black"}} type="submit" >
              Send
            </Button>
        </form>
      </Box>
    </Box>
  );
};
