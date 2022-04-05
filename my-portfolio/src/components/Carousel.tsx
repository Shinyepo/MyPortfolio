import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, useDisclosure, Icon, Image } from "@chakra-ui/react";
import { FC } from "react";


interface props {
    title: string,
    images: Array<string>;
}

export const Carousel: FC<props> = ({title, images}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (<Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset='slideInBottom'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Icon as={ArrowLeftIcon} />
            <Image src="#" objectFit="cover" w="600px" h="800px" alt="Missing image" />
            <Icon as={ArrowRightIcon} />
          </ModalBody>
        </ModalContent>
      </Modal>);
}