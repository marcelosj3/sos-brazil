import { Box, Flex } from '@chakra-ui/react';

interface IAssistanceBulletSlider {
  scrollPosition: number;
  scrollElementDistance: number;
  handleScrollTo: (state: number) => void;
  bulletQuantity: number;
}

export const AssistanceBulletSlider = ({
  scrollPosition,
  scrollElementDistance,
  handleScrollTo,
  bulletQuantity,
}: IAssistanceBulletSlider) => {
  const bullets = Array.from(Array(bulletQuantity).keys());

  return (
    <Flex
      marginTop="40px"
      position="relative"
      display={['flex', 'flex', 'flex', 'none']}
    >
      {bullets.map((index) => (
        <Box
          key={index}
          h="10px"
          w="10px"
          borderRadius="50%"
          bg="primary.300"
          marginLeft={index ? '16px' : '0px'}
          cursor="pointer"
          onClick={() => handleScrollTo(index + 1)}
        />
      ))}
      <Box
        position="absolute"
        h="10px"
        w="10px"
        borderRadius="50%"
        bg="secondary.300"
        left={[
          `${Math.floor(
            (scrollPosition - 16) / ((scrollElementDistance - 16) / 26)
          )}px`,
          `${Math.floor(
            (scrollPosition - 32) / ((scrollElementDistance - 32) / 26)
          )}px`,
          `${Math.floor(
            (scrollPosition - 32) / ((scrollElementDistance - 32) / 26)
          )}px`,
        ]}
      />
    </Flex>
  );
};
