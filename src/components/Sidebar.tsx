"use client";

import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Button,
  Image,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from "react-icons/fi";
import { IconType } from "react-icons";
import { useEffect, useState } from "react";
import SI from '../assets/images/support.png'
import { IoChatbubbleOutline } from "react-icons/io5";
import { MdOutlineLogin } from "react-icons/md";
import { useNavigate } from "react-router-dom";

interface LinkItemProps {
  name: string;
  icon: IconType;
  path?: string;
}

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: React.ReactNode;
  name: string;
  activePage: string;
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
  path?: string;
}

interface MobileProps extends FlexProps {
  onOpen: () => void;
  activePage: string;
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
  activePage: string;
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
}

const LinkItems: Array<LinkItemProps> = [
  { name: "Dashboard", icon: FiHome, path: "/dashboard" },
  { name: "Applications", icon: FiTrendingUp, path: "/applications" },
  { name: "Clients", icon: FiCompass, path: "/clients" },
  { name: "Credit Search", icon: FiStar, path: "/credit-search" },
  { name: "Analyze", icon: FiStar, path: "/analyze" },
  { name: "Decide", icon: FiStar, path: "/decide" },
  { name: "Logs", icon: FiSettings, path: "/logs" },
  { name: "Settings", icon: FiSettings, path: "/settings" },
];

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
    const [activePage, setActivePage] = useState<string>(() => {
      const savedPage = localStorage.getItem("activePage");
      return savedPage || "/dashboard";
    });

    useEffect(() => {
      if (!localStorage.getItem("activePage")) {
        localStorage.setItem("activePage", "/dashboard");
        setActivePage("/dashboard");
      }
    }, []);

   const handleSetActivePage: React.Dispatch<React.SetStateAction<string>> = (
     page
   ) => {
     const newPage = typeof page === "function" ? page(activePage) : page;
     setActivePage(newPage);
     localStorage.setItem("activePage", newPage);
   };
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      overflowY={"auto"}
      sx={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="4" justifyContent="space-between">
        <Text
          fontFamily={"Nunito Sans"}
          fontWeight={700}
          fontSize={"16px"}
          color={"#000000"}
        >
          PLUTO MICROFINANCE BANK - 345678
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem
          key={link.name}
          name={link.name}
          icon={link.icon}
          activePage={activePage}
          setActivePage={handleSetActivePage}
          path={link?.path}
          onClick={onClose}
        >
          {link.name}
        </NavItem>
      ))}
      <Flex mx="4" pt="50px">
        <Flex
          width={"100%"}
          height={"168px"}
          justifyContent={"center"}
          alignItems={"center"}
          direction={"column"}
          position={"relative"}
          bg={"#e8eef6"}
          borderRadius={"8px"}
        >
          <Box
            width={"139px"}
            height={"124px"}
            position={"absolute"}
            mb={"100px"}
          >
            <Image
              src={SI}
              width={"100%"}
              height={"100%"}
              objectFit={"contain"}
            />
          </Box>
          <Flex position={"absolute"} bottom={2}>
            <Button
              bgColor={"#1F5AA3"}
              gap={"5px"}
              fontFamily={"Nunito Sans"}
              fontWeight={600}
              fontSize={"16px"}
              color={"#FFFFFF"}
              variant={"none"}
            >
              <IoChatbubbleOutline fontSize={"20px"} />
              <Text pt={"2px"}>Support</Text>
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <Flex my={"20px"} mx="4">
        <Button
          width={"100%"}
          justifyContent={"flex-start"}
          gap={"12px"}
          fontFamily={"Nunito Sans"}
          fontWeight={600}
          fontSize={"16px"}
          color={"#7D8592"}
          _hover={{
            bg: "#1F5AA3",
            color: "white",
          }}
        >
          {" "}
          <MdOutlineLogin />
          Logout
        </Button>
      </Flex>
    </Box>
  );
};

const NavItem = ({
  icon,
  children,
  name,
  activePage,
  setActivePage,
  path,
  onClick,
}: NavItemProps) => {
    const navigate = useNavigate();
    const handleNavigation = async () => {
      setActivePage(name);

      await new Promise((resolve) => setTimeout(resolve, 300));

      navigate(`${path}`);
    };
  return (
    <Box
      as="a"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
      onClick={onClick}
    >
      <Flex
        align="center"
        px={"12px"}
        py={"12px"}
        my={"4px"}
        mx={"4px"}
        borderRadius="lg"
        role="group"
        cursor="pointer"
        fontFamily={"Nunito Sans"}
        fontWeight={600}
        fontSize={"16px"}
        bg={activePage === name ? "#1F5AA3" : "transparent"}
        color={activePage === name ? "white" : "#7D8592"}
        _hover={{
          bg: "#1F5AA3",
          color: "white",
        }}
        onClick={handleNavigation}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
};

const MobileNav = ({ onOpen, activePage, ...rest }: MobileProps) => {
  const [avatar, setAvatar] = useState(
    "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
  );
  const [user, setUser] = useState({ name: "Williams..." });

  // Handle image upload
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatar(imageUrl);
    }
  };

  // Handle role change
  const handleRoleChange = (role: string) => {
    const name = role === "Admin" ? "Williams..." : "Super User";
    setUser({ name });
  };

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      //   borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "space-between" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        fontSize={"36px"}
        fontWeight={700}
        fontFamily={"Nunito Sans"}
        color={"#1F5AA3"}
      >
        {activePage === "/dashboard" ? "Dashboard" : activePage}
      </Text>

      <HStack spacing={{ base: "0", md: "16px" }}>
        <IconButton
          size="lg"
          variant="outline"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack p={"10px"} borderRadius={"10px"} bg={"#f4f9fd"}>
                <Avatar size={"sm"} src={avatar} />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">{user.name}</Text>
                  {/* <Text fontSize="xs" color="White">
                    {user.role}
                  </Text> */}
                </VStack>

                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>

            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem>
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  id="avatar-upload"
                  onChange={handleImageChange}
                />
                <label
                  htmlFor="avatar-upload"
                  style={{ cursor: "pointer", width: "100%" }}
                >
                  Change Profile Picture
                </label>
              </MenuItem>

              <MenuDivider />

              <MenuItem onClick={() => handleRoleChange("Admin")}>
                Switch to Admin
              </MenuItem>
              <MenuItem onClick={() => handleRoleChange("Super Admin")}>
                Switch to Super Admin
              </MenuItem>
              <MenuDivider />
              <Flex mx="4px">
                <Button
                  width={"100%"}
                  justifyContent={"flex-start"}
                  gap={"12px"}
                  fontFamily={"Nunito Sans"}
                  fontWeight={600}
                  fontSize={"16px"}
                  color={"#7D8592"}
                  variant={"none"}
                >
                  {" "}
                  <MdOutlineLogin />
                  Logout
                </Button>
              </Flex>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activePage, setActivePage] = useState<string>(() => {
    return localStorage.getItem("activePage") || "Dashboard";
  });

  return (
    <Box minH="100%" bg={"#f4f9fd"}>
      <SidebarContent
        onClose={onClose}
        activePage={activePage}
        setActivePage={setActivePage}
        display={{ base: "none", md: "block" }}
      />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerContent bg={"transparent"}>
          <SidebarContent
            onClose={onClose}
            activePage={activePage}
            setActivePage={setActivePage}
          />
        </DrawerContent>
      </Drawer>
      {/* MobileNav */}
      <MobileNav onOpen={onOpen} activePage={activePage} />
      <Box ml={{ base: 0, md: 60 }} p="2">
        {/* Content */}
      </Box>
    </Box>
  );
};


export default Sidebar;
