"use client";
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import {
  ChangeEvent,
  FC,
  RefObject,
  SyntheticEvent,
  useRef,
  useState,
} from "react";
import { colorMode } from "../theme";
import { DarkInput } from "./DarkInput";
import { sendForm } from "@emailjs/browser";
import { serviceId, templateId } from "../consts";
import { useColorModeValue } from "./ui/color-mode";
import { toaster } from "./ui/toaster";
import { Field } from "./ui/field";

type ContactForm = {
  [key: string]: string | undefined;
  name: string;
  email: string;
  topic: string;
  message: string;
};

interface Props {
  refProp: RefObject<HTMLDivElement | null>;
}

export const Contact: FC<Props> = ({ refProp }) => {
  const formul = useRef(null) as RefObject<HTMLFormElement| null>;
  const toastRef = useRef(null) as RefObject<any | undefined>;

  const [form, setForm] = useState<ContactForm>({
    message: "",
    email: "",
    name: "",
    topic: "",
  });

  const color = useColorModeValue(colorMode.darkBg, colorMode.lightBg);
  const invColor = useColorModeValue(colorMode.lightBg, colorMode.darkBg);
  const invText = useColorModeValue("white", "black");
  const hoverBg = useColorModeValue("gray.600", "gray.400");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (
      form.email === "" ||
      form.message === "" ||
      form.name === "" ||
      form.topic === ""
    ) {
      return failure("empty");
    }
    setForm({ message: "", email: "", name: "", topic: "" });

    toastRef.current = toaster.create({
      title: "Sending message...",
      type: "info",
    });

    const res = await sendForm(serviceId, templateId, formul.current!);
    if (res.status === 200) {
      if (toastRef.current) {
        toaster.update(toastRef.current, {
          title: "Message sent.",
          description: "I've received your message :)",
          type: "success",
          duration: 5000,
          meta: {
            closable: true
          },
        });
      } else {
        toaster.create({
          title: "Message sent.",
          description: "I've received your message :)",
          type: "success",
          duration: 5000,
          meta: {
            closable: true
          },
        });
      }
    } else {
      failure("status");
    }
  };

  const failure = (type: "empty" | "status") => {
    const toastContent = {
      title: "Error",
      description:
        type === "empty"
          ? "You need to fill all the fields in order to send me your message."
          : "Something went wrong while sending the message",
      type: "error",
      duration: 3000,
      meta: {
        closable: true
      },
    };
    
    if (toastRef.current) {
      toaster.update(toastRef.current, toastContent);
    } else {
      toaster.create(toastContent);
    }
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
          <VStack gap={2}>
            <Field label="Name">
              <DarkInput
                changeevent={handleChange}
                fn="name"
                ph="Your name"
                value={form?.name}
              />
            </Field>
            <Field label="Email">
              <DarkInput
                changeevent={handleChange}
                fn="email"
                ph="Your email"
                type="email"
                value={form?.email}
              />
            </Field>
            <Field label="Topic">
              <DarkInput
                changeevent={handleChange}
                fn="topic"
                ph="Topic"
                value={form?.topic}
              />
            </Field>
            <Field label="Message">
              <Textarea
                value={form.message}
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
            </Field>
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
