import { Alert, AlertDescription, AlertIcon } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const Alerta = ({ alerta }) => {
  const [exibir, setExibir] = useState(false);

  useEffect(() => {
    setExibir(true);
    setTimeout(() => {
      setExibir(false);
    }, 5000);
  }, [alerta]);

  return (
    <div>
      {alerta.message.length > 0 && exibir && (
        <Alert status={alerta.status === true ? "error" : "success"} m="1">
          <AlertIcon />
          <AlertDescription>{alerta.message}</AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default Alerta;
