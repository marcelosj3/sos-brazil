import { Box, Flex } from '@chakra-ui/react';

interface IAssistanceBulletSlider {
  scrollPosition: number;
  handleScrollTo: (state: string) => void;
}

export const AssistanceBulletSlider = ({
  scrollPosition,
  handleScrollTo,
}: IAssistanceBulletSlider) => {
  return (
    <Flex
      marginTop="40px"
      position="relative"
      display={['flex', 'flex', 'flex', 'none']}
    >
      <Box
        h="10px"
        w="10px"
        borderRadius="50%"
        bg="primary.300"
        onClick={() => handleScrollTo('first')}
      />
      <Box
        h="10px"
        w="10px"
        borderRadius="50%"
        bg="primary.300"
        marginLeft="16px"
        onClick={() => handleScrollTo('second')}
      />
      <Box
        h="10px"
        w="10px"
        borderRadius="50%"
        bg="primary.300"
        marginLeft="16px"
        onClick={() => handleScrollTo('third')}
      />
      <Box
        h="10px"
        w="10px"
        borderRadius="50%"
        bg="primary.300"
        marginLeft="16px"
        onClick={() => handleScrollTo('fourth')}
      />
      <Box
        position="absolute"
        h="10px"
        w="10px"
        borderRadius="50%"
        bg="secondary.300"
        left={[
          `${Math.floor((scrollPosition - 16) / 12.3)}px`,
          `${Math.floor((scrollPosition - 32) / 16.15)}px`,
          `${Math.floor((scrollPosition - 32) / 25.7)}px`,
        ]}
      />
    </Flex>
  );
};
