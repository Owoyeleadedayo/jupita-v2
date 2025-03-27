import { Button, Flex, Table, Tbody, Td, Text, Th, Thead, Tr, useDisclosure } from "@chakra-ui/react";
import { MdOutlineSettings } from "react-icons/md";
import NewUserModal from "./NewUserModal";
import ManageRoleModal from "./ManageRoleModal";

const Team = () => {
    const teamTable = [
      {
        no: "1",
        name: "Almadeisojfh hdjdkdfll.pdf",
        email: "williams@getjupita.com",
        status: "Active",
        role: "Owner",
        date: "Dec 21, 2024 11:05PM",
      },
      {
        no: "2",
        name: "Almadeisojfh hdjdkdfll.pdf",
        email: "williams@getjupita.com",
        status: "Active",
        role: "Super Admin",
        date: "Dec 21, 2024 11:05PM",
      },
      {
        no: "3",
        name: "Almadeisojfh hdjdkdfll.pdf",
        email: "williams@getjupita.com",
        status: "Active",
        role: "Super Admin",
        date: "Dec 21, 2024 11:05PM",
      },
    ];

    const { isOpen: openNewUser, onClose: closeNewUser, onOpen: onOpenNewUser } = useDisclosure();
    const {
      isOpen: isOpenRoles,
      onClose: onCloseRoles,
      onOpen: onOpenRole,
    } = useDisclosure();
  return (
    <>
      <Flex
        width={"100%"}
        height={"420px"}
        bgColor={"#FFFFFF"}
        my={"20px"}
        p={"20px"}
        direction={"column"}
        gap={"20px"}
        borderRadius={"10px"}
        boxShadow={"md"}
      >
        <Flex
          width={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Text
            fontFamily={"Nunito Sans"}
            fontSize={"22px"}
            fontWeight={700}
            color={"#0A1629"}
          >
            Users
          </Text>
          <Flex gap={"10px"}>
            <Flex justifyContent={"center"} alignItems="center" height={"100%"}>
              <Button
                height={"33px"}
                fontFamily={"Nunito Sans"}
                fontSize={"14px"}
                fontWeight={700}
                color={"#7D8592"}
                display={"flex"}
                justifyContent={"center"}
                alignItems="center"
                gap={"3px"}
                onClick={onOpenRole}
              >
                <Flex fontSize={"22px"} pr={"5px"} color={"#000000"}>
                  <MdOutlineSettings fontSize={"17px"} />
                </Flex>
                Manage Roles
              </Button>
              <ManageRoleModal
                isOpenRoles={isOpenRoles}
                onCloseRoles={onCloseRoles}
              />
            </Flex>
            <Flex onClick={onOpenNewUser}>
              <Button
                variant={"none"}
                height={"33px"}
                bg={"#1F5AA3"}
                fontFamily={"Nunito Sans"}
                fontSize={"14px"}
                fontWeight={700}
                color={"#FFFFFF"}
                textTransform={"capitalize"}
              >
                Invite user
              </Button>
              <NewUserModal
                openNewUser={openNewUser}
                closeNewUser={closeNewUser}
              />
            </Flex>
          </Flex>
        </Flex>
        <Flex>
          <Table>
            <Thead>
              <Tr>
                <Th
                  fontFamily={"Nunito Sans"}
                  fontSize={"16px"}
                  fontWeight={700}
                  color={"#0A1629"}
                >
                  S/N
                </Th>
                <Th
                  fontFamily={"Nunito Sans"}
                  fontSize={"16px"}
                  fontWeight={700}
                  color={"#0A1629"}
                >
                  Name
                </Th>
                <Th
                  fontFamily={"Nunito Sans"}
                  fontSize={"16px"}
                  fontWeight={700}
                  color={"#0A1629"}
                >
                  Email Address
                </Th>
                <Th
                  fontFamily={"Nunito Sans"}
                  fontSize={"16px"}
                  fontWeight={700}
                  color={"#0A1629"}
                >
                  Status
                </Th>
                <Th
                  fontFamily={"Nunito Sans"}
                  fontSize={"16px"}
                  fontWeight={700}
                  color={"#0A1629"}
                >
                  Role
                </Th>
                <Th
                  fontFamily={"Nunito Sans"}
                  fontSize={"16px"}
                  fontWeight={700}
                  color={"#0A1629"}
                >
                  Creation date
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {teamTable.map((item, index) => (
                <Tr key={index}>
                  <Td
                    fontFamily={"Nunito Sans"}
                    fontSize={"16px"}
                    fontWeight={500}
                  >
                    {item.no}
                  </Td>
                  <Td
                    fontFamily={"Nunito Sans"}
                    fontSize={"16px"}
                    fontWeight={500}
                  >
                    {item.name}
                  </Td>
                  <Td
                    fontFamily={"Nunito Sans"}
                    fontSize={"16px"}
                    fontWeight={500}
                  >
                    {item.email}
                  </Td>
                  <Td
                    fontFamily={"Nunito Sans"}
                    fontSize={"16px"}
                    fontWeight={700}
                    color={"#067B58"}
                  >
                    {item.status}
                  </Td>
                  <Td
                    fontFamily={"Nunito Sans"}
                    fontSize={"16px"}
                    fontWeight={500}
                  >
                    {item.role}
                  </Td>
                  <Td
                    fontFamily={"Nunito Sans"}
                    fontSize={"16px"}
                    fontWeight={500}
                  >
                    {item.date}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Flex>
      </Flex>
    </>
  );
}

export default Team
