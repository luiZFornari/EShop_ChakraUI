import { useContext, useMemo } from "react";
import Alerta from "../../comuns/Alerta";
import ProdutoContext from "./ProdutoContext";
import { formatoMoeda } from "../../comuns/Uteis";
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
    useContext(ProdutoContext);

  return (
    <TableContainer p="3">
      <Table variant="striped">
        <TableCaption>Produtos</TableCaption>
        <Thead>
          <Tr>
            <Th>Codigo</Th>
            <Th>Nome</Th>
            <Th>Descricao</Th>
            <Th>Valor</Th>
            <Th>Quantidade</Th>
            <Th>Ativo</Th>
            <Th>Cadastro</Th>
            <Th>Categoria</Th>
            <Th isNumeric>
              <Button
                variant="solid"
                aria-label="Novo Produto"
                onClick={() => novoObjeto()}
              >
                Novo Produto
              </Button>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {listaObjetos.map((row) => (
            <Tr key={row.codigo}>
              <Td>{row.codigo}</Td>
              <Td>{row.nome}</Td>
              <Td>{row.descricao}</Td>
              <Td>{formatoMoeda(row.valor)}</Td>
              <Td>{row.quantidade_estoque}</Td>
              <Td>{row.ativo ? "Sim" : "Nao"}</Td>
              <Td>{row.data_cadastro}</Td>
              <Td>{row.categoria_nome}</Td>
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
            <Th>Descricao</Th>
            <Th>Valor</Th>
            <Th>Quantidade</Th>
            <Th>Ativo</Th>
            <Th>Cadastro</Th>
            <Th>Categoria</Th>
            <Th isNumeric>Ações</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
}

export default Tabela;
