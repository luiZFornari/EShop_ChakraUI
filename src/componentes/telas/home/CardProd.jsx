import { useContext } from "react";
import HomeContext from "./HomeContext";
import { formatoMoeda } from "../../comuns/Uteis";
import { NavLink } from "react-router-dom";
import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

function CardProd() {
  const { listaObjetos } = useContext(HomeContext);

  return (
    <div>
      <SimpleGrid minChildWidth="250px" spacing="50px" p='10px' >
        {listaObjetos.length > 0 &&
          listaObjetos.map((objeto) => (
            <>
              {objeto.ativo && (
                <NavLink
                  role="button "
                  exact
                  to={`produto/${objeto.codigo}`}
                  style={{ border: "1px" }}
                  key={objeto.codigo}
                >
                  <Card maxW="sm" p="5px" m="5px">
                    <CardBody>
                      <Stack mt="6" spacing="3">
                        <Heading size="md">{objeto.nome}</Heading>
                        <Divider />
                        <Text>{objeto.categoria_nome}</Text>
                        <Divider/>
                        <Text>Estoque: {objeto.quantidade_estoque}</Text>
                      </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                      <Text color="blue.600" fontSize="2xl">
                        {formatoMoeda(objeto.valor)}
                      </Text>
                    </CardFooter>
                  </Card>
                </NavLink>
              )}
            </>
          ))}
      </SimpleGrid>
    </div>
  );
}

export default CardProd;
