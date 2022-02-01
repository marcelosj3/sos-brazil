import { Box } from "@chakra-ui/react";
import { Header } from "../../components/Header";

import { GeneralInfo } from "./Sections/GeneralInfo";
import { NewsContainer } from "./Sections/NewsContainer";
import { OfferedAssistance } from "./Sections/OfferedAssistance";

export const Home = () => {
  return (
    <Box scrollSnapType="y mandatory">
      <Header />
      <GeneralInfo />
      <OfferedAssistance />
      <NewsContainer />
    </Box>
  );
};
