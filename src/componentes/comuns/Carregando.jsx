import { Center, CircularProgress } from "@chakra-ui/react";

function Carregando(props) {
  return (
    <>
      {!props.carregando ? (
        props.children
      ) : (
        <Center h="500px">
          <CircularProgress isIndeterminate />
        </Center>
      )}
    </>
  );
}

export default Carregando;
