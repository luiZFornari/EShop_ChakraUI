import { useContext } from "react";
import Autenticacao from "../../seguranca/Autenticacao";
import AvaliacaoContext from "./AvaliacaoContext";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

function AcordionAvaliacao(props) {
  const { novoObjeto, listaAvaliacoes, editarObjeto, remover } =
    useContext(AvaliacaoContext);

  let mediaAvaliacao = 0;
  if (listaAvaliacoes.length > 0) {
    listaAvaliacoes.map((objeto) => (mediaAvaliacao += objeto.nota));
    mediaAvaliacao = mediaAvaliacao / listaAvaliacoes.length;
  }

  const autenticacao = Autenticacao.pegaAutenticacao();

  return (
    <div>
      <Center>
        <Accordion
          allowToggle
          w="100%"
          maxW="1000"
          borderWidth="1px"
          borderRadius="lg"
        >
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Avaliações
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Center>
                <Button
                  variant="solid"
                  size="sm"
                  aria-label="Nova avaliação"
                  onClick={() => novoObjeto()}
                >
                  Nova avaliação
                </Button>
              </Center>

              {listaAvaliacoes.map((objeto) => (
                <Card key={objeto.codigo} p="2" m="2">
                  <CardHeader>
                    <Flex>
                      {objeto.autor} <Spacer />
                      {objeto.nota}/5
                    </Flex>
                  </CardHeader>
                  <Divider color="gray.200" />
                  <CardBody>{objeto.texto}</CardBody>
                  <Divider color="gray.200" />
                  <CardFooter>
                    <Flex minWidth="100%">
                      <Box size="sm">
                        {autenticacao && (
                          <ButtonGroup>
                            <Button
                              item
                              key="editar"
                              onClick={() => editarObjeto(objeto.codigo)}
                              title="Editar"
                              aria-label="Editar"
                              size="sm"
                              bg="blue.500"
                            >
                              <EditIcon color="white" />
                            </Button>
                            <Button
                              item
                              key="remover"
                              onClick={() => remover(objeto.codigo)}
                              title="Apagar"
                              aria-label="Apagar"
                              size="sm"
                              bg="crimson"
                            >
                              <DeleteIcon color="white" />
                            </Button>
                          </ButtonGroup>
                        )}
                      </Box>

                      <Spacer />
                      {objeto.data}
                    </Flex>
                  </CardFooter>
                </Card>
              ))}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Center>
    </div>
  );
}

export default AcordionAvaliacao;
