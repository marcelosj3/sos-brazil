import { Box } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import image from "../../assets/crianças_capstone_desktop.jpg";

export const Home = () => {
  return (
    <Box
      bgImage={image}
      w="100vw"
      h="100vh"
      bgSize="cover"
      backgroundPosition="center"
    >
      <Header />
      Home
    </Box>
  );
};
