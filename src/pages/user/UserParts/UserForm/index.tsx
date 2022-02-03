import { Box, Button, Input } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import { useAuth } from "../../../../contexts/AuthContext";
import { useUser } from "../../../../contexts/UserContext";

export const UserForm = () => {
  const { user, accessToken } = useAuth();
  const { id } = useParams();
  const { userAtt, userData, userMan } = useUser();

  const userId = (id && id) || "";

  interface Idata {
    name: string;
    email: string;
    social_number: string;
    password: string;
  }

  const test = {
    email: "josue@joao.com",
    name: "josue",
    social_number: "123456789",
    password: "123456",
  };
  const attDados = (usuario: string, token: string, obj: Idata) => {
    userAtt(usuario, token, obj);
    userData(usuario, token);
  };

  console.log(userMan);

  return (
    <Box>
      {/* <Header /> */}
      <Button
        position="absolute"
        z-index="2"
        onClick={() => {
          attDados(userId, accessToken, test);
        }}
      >
        att dados
      </Button>
      user
    </Box>
  );
};
