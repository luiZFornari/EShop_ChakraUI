import { useContext } from "react";
import { formatoMoeda } from "../../comuns/Uteis";
import AvaliacaoContext from "./AvaliacaoContext";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Card,
  CardBody,
  CardFooter,
  Center,
  Divider,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

function ItensProduto() {
  const { produto } = useContext(AvaliacaoContext);

  return (
    <div>
      <Center>
        <Card w="100%" maxW="1000">
          <CardBody>
            <Stack mt="6" spacing="3">
              <Heading>{produto.nome}</Heading>
              <Divider />
              <Text color="blue.600" as="b" fontSize="2xl">
                {formatoMoeda(produto.valor)}
              </Text>
            </Stack>
          </CardBody>

          <CardFooter>
            <Stack>
              <Text as="sub" fontSize="sm">
                Estoque: {produto.quantidade_estoque}
              </Text>
              <Text fontSize="sm">Lançamento: {produto.data_cadastro}</Text>
            </Stack>
          </CardFooter>
        </Card>
      </Center>

      <Center p="3">
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
                  Descrição
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>{produto.descricao}</AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Center>
    </div>
  );
}

export default ItensProduto;
