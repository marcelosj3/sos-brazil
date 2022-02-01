import { ReactNode } from "react";
import { Center, Flex, Image } from "@chakra-ui/react";

import MedicalIcon from "../../assets/Icons/medical.svg";
import HealthyFoodIcon from "../../assets/Icons/healthy-food.svg";
import LegalAssistanceIcon from "../../assets/Icons/legal-assistance.svg";
import LoveAndCareIcon from "../../assets/Icons/love-and-care.svg";

interface IAssistanceCard {
  icon: string;
  children: ReactNode;
}

export const AssistanceCard = ({ icon, children }: IAssistanceCard) => {
  return (
    <Flex
      flexDirection="column"
      maxW="250px"
      padding="8px"
      scrollSnapAlign="center"
    >
      <Center>
        {icon === "medical" && <Image src={MedicalIcon} />}
        {icon === "healthyFood" && <Image src={HealthyFoodIcon} />}
        {icon === "legalAssistance" && <Image src={LegalAssistanceIcon} />}
        {icon === "loveAndCare" && <Image src={LoveAndCareIcon} />}
      </Center>
      <Flex flexDirection="column" alignItems="center">
        {children}
      </Flex>
    </Flex>
  );
};
