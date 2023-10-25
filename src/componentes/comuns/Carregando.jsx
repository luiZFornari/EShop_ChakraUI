import { Center, CircularProgress } from "@chakra-ui/react";

function Carregando(props) {
    return (
      <>
        {
          !props.carregando ?  props.children  :
          <Center >
            <CircularProgress isIndeterminate />
          </Center>
        }
      </>
  
    )
  }
  
export default Carregando;