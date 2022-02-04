import { useEffect, useState } from "react";
import { Flex, Box, Heading, Text, Select, Grid } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { api } from "../../services/api";

interface IState {
  [key: string]: string;
}

interface IDataState {
  description: string;
  name: string;
  phone: string;
  id: number;
  state: IState;
}

export const Help = () => {
  const [currentState, setCurrentState] = useState<Array<IDataState>>(
    [] as Array<IDataState>
  );

  const [phone, setPhone] = useState<string>();

  useEffect(() => {
    api
      .get("/help")
      .then((response) => {
        setCurrentState(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleOnchange = (e: string) => {
    setPhone(e);
  };

  return (
    <Flex flexDirection={"column"}>
      <Header />
      <Box textAlign={"center"} pt="100px" w="100vw">
        {" "}
        <Heading>Quem pode me ajudar</Heading>
        <Text h="50px" color="gray.250" fontSize={"xl"}></Text>
      </Box>
      <Grid
        w="100vw"
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        gridTemplateColumns="repeat(auto-fill,300px)"
        gap="25px"
      >
        {currentState.map((state, index) =>
          Object.keys(state.state).length > 0 ? (
            <Box
              key={index}
              bg="white"
              w="250px"
              h="205px"
              margin="5px"
              textAlign={"center"}
              borderRadius="8px"
              display={"flex"}
              flexDirection="column"
              justifyContent={"space-around"}
              boxShadow="dark-lg"
            >
              <Text fontSize={"xl"} fontFamily={"heading"} color="gray.300">
                {state.name}
              </Text>
              {phone && (
                <Text
                  fontFamily={"heading"}
                  color="secondary.300"
                  fontSize={"2xl"}
                >
                  {phone}
                </Text>
              )}
              <Text color="gray.250" fontSize={"xl"}>
                {state.description}
              </Text>
              <Select
                _focus={{}}
                border="none"
                placeholder="Selecione seu estado"
                onChange={(e) => handleOnchange(e.currentTarget.value)}
              >
                {Object.keys(state.state).map((value, index) => (
                  <option value={Object.values(state.state)[index]}>
                    {value}
                  </option>
                ))}
              </Select>
            </Box>
          ) : (
            <Box
              border="none"
              key={index}
              bg="white"
              w="250px"
              h="205px"
              margin="5px"
              textAlign={"center"}
              borderRadius="8px"
              display={"flex"}
              flexDirection="column"
              justifyContent={"space-around"}
              boxShadow="dark-lg"
            >
              {" "}
              <Text fontSize={"xl"} fontFamily={"heading"} color="gray.300">
                {state.name}
              </Text>
              <Text
                fontFamily={"heading"}
                color="secondary.300"
                fontSize={"2xl"}
              >
                {state.phone}
              </Text>
              <Text color="gray.250" fontSize={"xl"}>
                {state.description}
              </Text>
            </Box>
          )
        )}
      </Grid>
    </Flex>
  );
};
