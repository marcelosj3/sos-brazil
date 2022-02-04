import { Box } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { AboutUs } from "./Sections/AboutUs";

import { GeneralInfo } from "./Sections/GeneralInfo";
import { NewsContainer } from "./Sections/NewsContainer";
import { OfferedAssistance } from "./Sections/OfferedAssistance";
import { OurPartnersContainer } from "./Sections/PartnersCarousel";

export const Home = () => {
  return (
    <Box scrollSnapType="y mandatory">
      <Header />
      <GeneralInfo />
      <OfferedAssistance />
      <NewsContainer />
      <OurPartnersContainer />
      <AboutUs />
    </Box>
  );
};
