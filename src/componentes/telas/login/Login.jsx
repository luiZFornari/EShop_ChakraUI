import { Navigate } from "react-router-dom";
import Autenticacao from "../../seguranca/Autenticacao";
import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { LockIcon } from "@chakra-ui/icons";
import Alerta from "../../comuns/Alerta";
import CampoEntrada from "../../comuns/CampoEntrada";

function Login() {
  const { pegaAutenticacao, gravaAutenticacao } = Autenticacao;

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [alerta, setAlerta] = useState({ status: "", message: "" });
  const [autenticado, setAutenticado] = useState(false);

  const acaoLogin = async (e) => {
    e.preventDefault();

    try {
      const body = {
        email: email,
        senha: senha,
      };
      await fetch(`${process.env.REACT_APP_ENDERECO_API}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
        .then((response) => response.json())
        .then((json) => {
          setAlerta({
            status: JSON.stringify(json.auth),
            message: JSON.stringify(json.message),
          });
          if (json.auth === true) {
            setAutenticado(true);
            gravaAutenticacao(json);
          }
        });
    } catch (err) {
      console.error(err.message);
    }

    try {
      const autenticacao = pegaAutenticacao();
      console.log(autenticacao);
      console.log("token: " + autenticacao.token);
      console.log("decoded: " + JSON.stringify(jwt_decode(autenticacao.token)));
    } catch (error) {
      console.log("Erro ao pegar usuario");
    }
  };

  useEffect(() => {
    const autenticacao = pegaAutenticacao();
    if (autenticacao != null) {
      console.log("autenticação não é null");
      if (autenticacao.auth === true) {
        setAutenticado(true);
      }
    }
  }, []);

  if (autenticado === true) {
    return <Navigate to="/privado" />;
  }

  return (
    <Center marginTop="5%">
      <Container p="5" borderWidth="1px" borderRadius="lg">
        <Alerta alerta={alerta} />
        <Center>
          <Box bg="tomato" w="8%" p={3} color="white" borderRadius="full">
            <Center>
              <LockIcon boxSize={4} />
            </Center>
          </Box>
        </Center>
        <Center>
          <Heading as="h3" size="lg">
            Login de Usuário
          </Heading>
        </Center>
        <Box p="5px">
          <form onSubmit={acaoLogin}>
            <CampoEntrada
              label="Email"
              id="email"
              msginvalido="Insira um email "
              msgvalido="Email Valido "
              requerido={true}
              readonly={false}
              name="Email"
              tipo="text"
              value={email}
              change={(e) => setEmail(e.target.value)}
            />
            <CampoEntrada
              requerido={true}
              name="Senha"
              change={(e) => setSenha(e.target.value)}
              readonly={false}
              value={senha}
              label="Senha"
              tipo="password"
              id="password"
              msginvalido="Insira a senha"
              msgvalido="Senha Valida "
            />
            <Button type="submit" w="100%" marginTop="5px">
              Efetuar Login
            </Button>
          </form>
        </Box>
      </Container>
    </Center>
  );
}

export default Login;
