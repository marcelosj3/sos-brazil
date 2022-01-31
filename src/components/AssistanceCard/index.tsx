import { Center, Flex, Image } from '@chakra-ui/react';
import { ReactNode } from 'react';

import MedicalIcon from '../../assets/Icons/medical.svg';
import HealthyFoodIcon from '../../assets/Icons/healthy-food.svg';
import LegalAssistanceIcon from '../../assets/Icons/legal-assistance.svg';
import LoveAndCareIcon from '../../assets/Icons/love-and-care.svg';

interface IAssistanceCard {
  medical?: boolean;
  healthyFood?: boolean;
  legalAssistance?: boolean;
  loveAndCare?: boolean;
  children: ReactNode;
}

export const AssistanceCard = ({
  medical,
  healthyFood,
  legalAssistance,
  loveAndCare,
  children,
}: IAssistanceCard) => {
  return (
    <Flex
      flexDirection="column"
      maxW="250px"
      padding="8px"
      scrollSnapAlign="center"
    >
      <Center>
        {medical && <Image src={MedicalIcon} />}
        {healthyFood && <Image src={HealthyFoodIcon} />}
        {legalAssistance && <Image src={LegalAssistanceIcon} />}
        {loveAndCare && <Image src={LoveAndCareIcon} />}
      </Center>
      <Flex flexDirection="column" alignItems="center">
        {children}
      </Flex>
    </Flex>
  );
};
