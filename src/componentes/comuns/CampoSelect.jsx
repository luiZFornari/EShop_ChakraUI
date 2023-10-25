import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Select,
} from "@chakra-ui/react";

function CampoSelect(props) {
  return (
    <FormControl isInvalid={props.value === "" && props.requerido === true}>
      <FormLabel>{props.label}</FormLabel>
      <Select
        id={props.id}
        name={props.name}
        onChange={props.change}
        placeholder={props.label}
        isRequired={props.requerido}
        defaultValue={props.value}
        errorBorderColor="crimson"
      >
        {props.children}
      </Select>
      {props.value === "" && props.requerido === true ? (
        <FormErrorMessage paddingLeft="10px">
          {props.msginvalido}
        </FormErrorMessage>
      ) : (
        <FormHelperText paddingLeft="10px">{props.msgvalido}</FormHelperText>
      )}
    </FormControl>
  );
}

export default CampoSelect;
