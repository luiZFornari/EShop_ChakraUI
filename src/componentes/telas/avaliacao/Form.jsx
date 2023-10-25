import { useContext } from "react";
import Alerta from "../../comuns/Alerta";
import CampoEntrada from "../../comuns/CampoEntrada";
import Dialogo from "../../comuns/Dialogo";
import CampoSelect from "../../comuns/CampoSelect";
import AvaliacaoContext from "./AvaliacaoContext";

function Form() {
  const {
    objeto,
    handleChange,
    acaoCadastrarAvaliacao,
    alerta,
    abreDialogo,
    setAbreDialogo,
  } = useContext(AvaliacaoContext);

  const notas = [1, 2, 3, 4, 5];

  return (
    <>
      <Dialogo
        id="modalEdicao"
        titulo="Avalição"
        open={abreDialogo}
        setOpen={setAbreDialogo}
        acaoCadastrar={acaoCadastrarAvaliacao}
        idform="formulario"
        maxWidth="sm"
        objeto={objeto}
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
          id="txtAutor"
          label="Autor"
          tipo="text"
          name="autor"
          value={objeto.autor}
          change={handleChange}
          requerido={true}
          readonly={false}
          maxlength={50}
          msgvalido="Autor OK"
          msginvalido="Informe o autor"
        />
        <CampoEntrada
          label="Email"
          id="email"
          msginvalido="Insira um email "
          msgvalido="Email Valido "
          requerido={true}
          readonly={false}
          name="email"
          tipo="text"
          value={objeto.email}
          change={handleChange}
        />
        <CampoEntrada
          id="txtTexto"
          label="Texto"
          tipo="text"
          name="texto"
          value={objeto.texto}
          change={handleChange}
          requerido={true}
          readonly={false}
          maxlength={250}
          msgvalido="Texto OK"
          msginvalido="Informe o texto"
        />
        <CampoSelect
          id="selectNota"
          label="Nota"
          idLabel="labelNota"
          name="nota"
          value={objeto.nota}
          change={handleChange}
          requerido={true}
          msgvalido="Nota OK"
          msginvalido="Informe a nota"
        >
          {notas.map((nota) => (
            <option name="nota" value={nota} key={nota}>
              {nota}
            </option>
          ))}
        </CampoSelect>
        <CampoEntrada
          value={objeto.data}
          id="txtDataCadastro"
          name="data"
          label="Data de Cadastro"
          tipo="date"
          change={handleChange}
          msgvalido="OK certo"
          msginvalido="Informe a data de cadastro"
          requerido={true}
          readonly={false}
          maxCaracteres={12}
        />
      </Dialogo>
    </>
  );
}

export default Form;
