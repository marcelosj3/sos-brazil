import { GeneralInfo } from "./Sections/GeneralInfo";
import { OfferedAssistance } from "./Sections/OfferedAssistance";
import { Header } from "../../components/Header";

export const Home = () => {
  return (
    <>
      <Header />
      <GeneralInfo />
      <OfferedAssistance />
    </>
  );
};
