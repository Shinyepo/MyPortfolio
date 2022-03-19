import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Text,
  Textarea,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import {
  ChangeEvent,
  ChangeEventHandler,
  FC,
  FormEventHandler,
  MutableRefObject,
  RefObject,
  SyntheticEvent,
  useRef,
  useState,
} from "react";
import { colorMode } from "../theme";
import { DarkInput } from "./DarkInput";
import { sendForm } from "@emailjs/browser";
import { serviceId, templateId } from "../consts";

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
  const formul = useRef() as MutableRefObject<HTMLFormElement>;

  const [form, setForm] = useState<ContactForm>();

  const color = useColorModeValue(colorMode.darkBg, colorMode.lightBg);
  const invColor = useColorModeValue(colorMode.lightBg, colorMode.darkBg);
  const invText = useColorModeValue("white", "black");
  const hoverBg = useColorModeValue("gray.600", "gray.400");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    console.log(name, value);

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(form);

    const res = await sendForm(serviceId, templateId, formul.current);
    console.log(res);
  };

  return (
    <Flex
      bg={color}
      borderTop="1px solid gray"
      ref={refProp}
      color={invText}
      flexDir="column"
      pb="20px"
    >
      <Heading pt="30px">Contact me!</Heading>
      <Text fontSize="md">
        Feel free to contact me if you have any questions!
      </Text>
      <Box w="600px" justifySelf="center" mx="auto" mt="60px">
        <form ref={formul} onSubmit={handleSubmit}>
          <VStack spacing={2}>
            <FormControl>
              <FormLabel htmlFor="name">Name</FormLabel>
              <DarkInput changeevent={handleChange} fn="name" ph="Your name" />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <DarkInput
                changeevent={handleChange}
                fn="email"
                ph="Your email"
                type="email"
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="topic">Topic</FormLabel>
              <DarkInput changeevent={handleChange} fn="topic" ph="Topic" />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="message">Message</FormLabel>
              <Textarea
                onChange={handleChange}
                name="message"
                id="message"
                placeholder="Your message"
                bg="gray.600"
                color="white"
                borderColor="gray.700"
                maxBlockSize="200px"
                autoComplete="false"
              />
            </FormControl>
          </VStack>
          <Button
            float="right"
            mt="12px"
            bg={invColor}
            color={color}
            _hover={{ bg: hoverBg, color: invText }}
            type="submit"
          >
            Send
          </Button>
        </form>
      </Box>
    </Flex>
  );
};
