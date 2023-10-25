import React from "react";
import {
  Link,
  Box,
  Flex,
  Text,
  Button,
  Stack,
  HStack,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Spacer,
  Heading,
  useMediaQuery,
  IconButton,
} from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";

const MenuPublico = (props) => {
  const [isSmallScreen] = useMediaQuery("(max-width: 500px)");

  return (
    <div>
      <Flex minWidth="max-content" alignItems="center" gap="2" bg="blue.500">
        {isSmallScreen ? (
          <>
            <Box p="6">
              <Heading  as="a"  href="/" size="md" color="white">
                Eshop
              </Heading>
            </Box>
            <Spacer />
            <Box p="3">
              <Menu bg="white">
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<HamburgerIcon />}
                  variant="outline"
                  bg="white"
                />
                <MenuList>
                  <MenuItem as="a" href="/">
                    Home
                  </MenuItem>
                  <MenuItem as="a" href="/login">
                    Login
                  </MenuItem>
                  <MenuItem as="a" href="/sobre">
                    Sobre
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </>
        ) : (
          <>
            <Box p="6">
              <Heading as="a" href="/" size="md" color="white">
                Eshop
              </Heading>
            </Box>
            <Breadcrumb
              spacing="8px"
              separator={<ChevronRightIcon color="white" />}
            >
              <BreadcrumbItem >
                <BreadcrumbLink href="/" color="white">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem >
                <BreadcrumbLink href="/sobre" color="white">
                  Sobre
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem >
                <BreadcrumbLink href="/login" color="white">
                  Login
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </>
        )}
      </Flex>
      <Outlet />
    </div>
  );
};

export default MenuPublico;
