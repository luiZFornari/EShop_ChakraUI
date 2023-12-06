import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";

function CampoEntrada({
  value,
  name,
  label,
  tipo,
  requerido,
  id,
  msginvalido,
  msgvalido,
  change,
  readonly,
  maxCaracteres,
}) {
  return (
    <FormControl isInvalid={value === "" && requerido === true}>
      <FormLabel>{label}</FormLabel>
      <Input
        type={tipo}
        isRequired={requerido}
        id={id}
        name={name}
        defaultValue={value}
        onChange={change}
        isReadOnly={readonly}
        maxLength={maxCaracteres}
        errorBorderColor="crimson"
      />
      {requerido && value === "" ? (
        <FormErrorMessage paddingLeft="10px">{msginvalido}</FormErrorMessage>
      ) : (
        <FormHelperText paddingLeft="10px">{msgvalido}</FormHelperText>
      )}
    </FormControl>
  );
}

export default CampoEntrada;
