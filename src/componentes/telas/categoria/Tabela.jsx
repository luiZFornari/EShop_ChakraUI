import { useContext, useMemo } from "react";
import CategoriaContext from "./CategoriaContext";
import {
  Button,
  ButtonGroup,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

function Tabela() {
  const { alerta, listaObjetos, remover, editarObjeto, novoObjeto } =
    useContext(CategoriaContext);

  return (
    <TableContainer p="3">
      <Table variant="striped">
        <TableCaption>Categorias</TableCaption>
        <Thead>
          <Tr>
            <Th>Codigo</Th>
            <Th>Nome</Th>
            <Th isNumeric>
              <Button
                variant="solid"
                aria-label="Nova avaliação"
                onClick={() => novoObjeto()}
              >
                Nova Categoria
              </Button>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {listaObjetos.map((row) => (
            <Tr key={row.codigo}>
              <Td>{row.codigo}</Td>
              <Td>{row.nome}</Td>
              <Td isNumeric>
                <ButtonGroup>
                  <Button
                    key="editar"
                    onClick={() => editarObjeto(row.codigo)}
                    title="Editar"
                    aria-label="Editar"
                    size="sm"
                    bg="blue.500"
                  >
                    <EditIcon color="white" />
                  </Button>
                  <Button
                    key="remover"
                    onClick={() => remover(row.codigo)}
                    title="Apagar"
                    aria-label="Deletar"
                    size="sm"
                    bg="crimson"
                  >
                    <DeleteIcon color="white" />
                  </Button>
                </ButtonGroup>
              </Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Codigo</Th>
            <Th>Nome</Th>
            <Th isNumeric>Ações</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
}

export default Tabela;
