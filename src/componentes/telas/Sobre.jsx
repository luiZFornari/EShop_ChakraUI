import { Center, Container, Heading, Link, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

function Sobre() {
  return (
    <Center>
      <Container p="1%" m="1%" maxW="container.sm">
        <Text fontSize="xl">
          Sistema desenvolvido para estudo no projeto de pesquisa intitulado:
        </Text>
        <Heading>
          Estudo Comparativo entre Bibliotecas de Componentes de Interface de
          Usuário para ReactJS.
        </Heading>
        <Text fontSize="md">Início da Execução: 01/09/2023</Text>
        <Text fontSize="md">Término da Execução: 31/08/2024</Text>
        <Text fontSize="md">
          Número de registro do projeto na PROPESP: PE08230723/059
        </Text>
      </Container>
    </Center>
  );
}

export default Sobre;
