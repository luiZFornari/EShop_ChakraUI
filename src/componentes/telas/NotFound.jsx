import { Center, Heading, Link, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

function NotFound() {
    return (
        <>
            <Center  p='5%'>
                <div>
                    <h1>404</h1>
                    <Heading>Página não encontrada.</Heading>  
                    <Text fontSize='md'> O recurso que você está procurando não existe</Text>
                    <Link href="/" >Ir para página inicial</Link>                    
                </div>
            </Center>
        </>
    )
}

export default NotFound;