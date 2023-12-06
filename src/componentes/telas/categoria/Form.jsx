import { useContext } from "react";
import Alerta from "../../comuns/Alerta";
import CampoEntrada from "../../comuns/CampoEntrada";
import Dialogo from "../../comuns/Dialogo";
import CategoriaContext from "./CategoriaContext";

function Form() {
  const {
    objeto,
    handleChange,
    acaoCadastrar,
    alerta,
    abreDialogo,
    setAbreDialogo,
  } = useContext(CategoriaContext);

  return (
    <>
      <Dialogo
        id="modalEdicaoComentario"
        titulo="Comentario"
        open={abreDialogo}
        setOpen={setAbreDialogo}
        acaoCadastrar={acaoCadastrar}
        idform="formulario"
        maxWidth="sm"
      >
        <Alerta alerta={alerta} />
        <CampoEntrada
          id="txtCodigo"
          label="Codigo"
          tipo="number"
          name="codigo"
          value={objeto.codigo}
          change={handleChange}
          requerido={false}
          readonly={true}
        />
        <CampoEntrada
          id="txtNome"
          label="Nome"
          tipo="text"
          name="nome"
          value={objeto.nome}
          change={handleChange}
          requerido={true}
          readonly={false}
          maxlength={50}
          msgvalido="OK certo"
          msginvalido="Informe o nome"
        />
      </Dialogo>
    </>
  );
}

export default Form;
