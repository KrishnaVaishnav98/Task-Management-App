import {
    Image,
    Text,
    FormLabel,
    FormControl,
    Input,
    useDisclosure,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { Context } from "../Redux/Context";
import { useDispatch } from "react-redux";
import { add_projects } from "../Redux/ProjectReducer/action";


const AddProject = ({ isOpen, onClose, onOpen }) => {

    const initData = {
        title: "",
        description: "",
        note: "",
        userId: ""
    };
    const [formData, setFormData] = useState(initData);
    const { loggedInUser, token } = useContext(Context);
    const dispatch = useDispatch();
    console.log("LoggedInUser", loggedInUser, token)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({
            ...formData, userId: loggedInUser._id
        });
        dispatch(add_projects(token, formData))
        onClose();
    };

    return (
        <>
            <Button mt={"20px"} onClick={onOpen} size="sm" mb="20px">
                +
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader
                        textAlign={"center"}
                        color={"#E57373"}
                        fontWeight={"bold"}
                    >
                        {"ADD PROJECT"}
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl isRequired mb="15px">
                            <FormLabel color={"gray.600"}>Project Name</FormLabel>
                            <Input
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                type="text"
                                placeholder="Project"
                            />
                        </FormControl>

                        <FormControl isRequired mb="15px">
                            <FormLabel color={"gray.600"}>Description</FormLabel>
                            <Input
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                type="text"
                                placeholder="description"
                            />
                        </FormControl>

                        <FormControl isRequired mb="15px">
                            <FormLabel color={"gray.600"}>Note</FormLabel>
                            <Input
                                name="note"
                                value={formData.note}
                                onChange={handleChange}
                                type="text"
                                placeholder="Note"
                            />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            variant={"solid"}
                            color={"gray.700"}
                            _hover={{ backgroundColor: "#558B2F", color: "white" }}
                            backgroundColor={"#DCEDC8"}
                            mr={3}
                            onClick={handleSubmit}
                        >
                            ADD
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default AddProject;
