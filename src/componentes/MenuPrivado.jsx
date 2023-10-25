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
  MenuGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import Autenticacao from "./seguranca/Autenticacao";

const MenuPrivado = (props) => {
  const [isSmallScreen] = useMediaQuery("(max-width: 500px)");
  const autenticacao = Autenticacao.pegaAutenticacao();

  return (
    <div>
      <Flex minWidth="max-content" alignItems="center" gap="2" bg="blue.500">
        {isSmallScreen ? (
          <>
            <Box p="6">
              <Heading as="a" href="/privado" size="md" color="white">
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
                  <MenuItem as="a" href="/privado">
                    Home
                  </MenuItem>
                  <MenuDivider />

                  <MenuGroup
                    title={
                      autenticacao
                        ? "Usuário: " + autenticacao.nome_usuario
                        : "Usuário"
                    }
                  >
                    {autenticacao ? (
                      <MenuItem
                        as="a"
                        href="/"
                        onClick={() => Autenticacao.logout()}
                      >
                        Logout
                      </MenuItem>
                    ) : (
                      <MenuItem as="a" href="/login">
                        Login
                      </MenuItem>
                    )}
                  </MenuGroup>
                  {autenticacao && (
                    <>
                      <MenuDivider />
                      <MenuGroup title="Manutenções">
                        <MenuItem as="a" href="/privado/produto">
                          Produto
                        </MenuItem>
                        <MenuItem as="a" href="/privado/categoria">
                          Categoria
                        </MenuItem>
                      </MenuGroup>
                    </>
                  )}
                  <MenuDivider />
                  <MenuItem as="a" href="/privado/sobre">
                    Sobre
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </>
        ) : (
          <>
            <Box p="6">
              <Heading size="md" color="white">
                <Link href="/privado">Eshop</Link>
              </Heading>
            </Box>
            <Breadcrumb
              spacing="8px"
              separator={<ChevronRightIcon color="white" />}
            >
              <BreadcrumbItem>
                <BreadcrumbLink color="white" href="/privado">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink href="/privado/sobre" color="white">
                  Sobre
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <Menu>
                  <MenuButton p="3" color="white">
                    Manutenções
                  </MenuButton>
                  <MenuList>
                    <MenuItem as="a" href="/privado/produto">
                      Produto
                    </MenuItem>
                    <MenuItem as="a" href="/privado/categoria">
                      Categoria
                    </MenuItem>
                  </MenuList>
                </Menu>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <Menu>
                  <MenuButton p="3" color="white">
                    {autenticacao
                      ? "Usuário: " + autenticacao.nome_usuario
                      : "Usuário"}
                  </MenuButton>
                  <MenuList>
                    {autenticacao ? (
                      <MenuItem
                        as="a"
                        href="/"
                        onClick={() => Autenticacao.logout()}
                      >
                        Logout
                      </MenuItem>
                    ) : (
                      <MenuItem as="a" href="/login">
                        Login
                      </MenuItem>
                    )}
                  </MenuList>
                </Menu>
              </BreadcrumbItem>
            </Breadcrumb>
          </>
        )}
      </Flex>
      <Outlet />
    </div>
  );
};

export default MenuPrivado;
