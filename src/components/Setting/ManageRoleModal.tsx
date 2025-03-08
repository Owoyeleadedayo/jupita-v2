import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import SuperAdmin from "./SuperAdmin";
import Operator from "./Operator";

interface RolesPage {
  isOpenRoles: boolean;
  onCloseRoles: () => void;
}

const ManageRoleModal = ({ isOpenRoles, onCloseRoles }: RolesPage) => {
  const [status, setStatus] = useState("super_admin");

  const roles = [
    { title: "Super Admin", status: "super_admin" },
    { title: "Operator", status: "operator" },
    { title: "Support", status: "support" },
  ];
  return (
    <Modal isOpen={isOpenRoles} onClose={onCloseRoles} size="full">
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <Grid templateColumns="repeat(12, 1fr)">
          <GridItem colSpan={4}>
            <Flex
              width={"270px"}
              height={"820px"}
              m={"20px"}
              bg={"#FFFFFF"}
              direction="column"
              gap={"30px"}
              borderRadius={'10px'}
              boxShadow={'2xl'}
            >
              <Flex pt={"15px"} pl={"20px"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={600}
                  fontSize={"16px"}
                  color={"#1F5AA3"}
                >
                  Manage Roles
                </Text>
              </Flex>
              <Divider />
              <Flex direction="column" gap={"10px"}>
                {roles.map((item, index) => (
                  <Flex key={index} onClick={() => setStatus(item.status)}>
                    <Flex
                      width={"300px"}
                      height={"50px"}
                      bgColor={status === item.status ? "#F4F9FD" : "#FFFFFF"}
                      mx={"5px"}
                      fontFamily={"Nunito Sans"}
                      fontWeight={status === item.status ? 700 : 400}
                      fontSize={"14px"}
                      color={status === item.status ? "#000" : "#000000"}
                      justifyContent={"start"}
                      alignItems={"center"}
                      pl={"20px"}
                      borderRadius={"8px"}
                      cursor={'pointer'}
                      _hover={{
                        bgColor: "#F4F9FD",
                        color: "#000000",
                      }}
                    >
                      {item.title}
                    </Flex>
                  </Flex>
                ))}
              </Flex>
            </Flex>
          </GridItem>
          <GridItem colSpan={8}>
            {status === "super_admin" && <Box>{<SuperAdmin />}</Box>}
            {status === "operator" && <Box>{<Operator />}</Box>}
            {status === "support" && <Box>Support</Box>}
            {status === "custom_roles" && <Box>Support</Box>}
          </GridItem>
        </Grid>
      </ModalContent>
    </Modal>
  );
};

export default ManageRoleModal;
