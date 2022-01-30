import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';

import backgroundImage from '../../../../assets/indigenous-brazilian-people-background.png';

export const GeneralInfo = () => {
  return (
    <Flex
      h="100vh"
      w="100%"
      backgroundImage={backgroundImage}
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Heading
        fontSize={['1xl', '4xl', '5xl']}
        color="gray.100"
        marginBottom={['32px', '48px']}
        maxW={['300px', '1200px']}
        textAlign="center"
      >
        Reunindo informações, trazendo esperança
      </Heading>
      <Text
        color="gray.100"
        marginBottom={['48px', '80px']}
        maxW={['150px', '350px', '600px']}
        textAlign="center"
      >
        Asdflkjaertvlkjasntvkjn (sits on keyboard) leave hair on owner's clothes
        and stare at guinea pigs or yowling nonstop the whole night do i like
        standing on litter cuz i sits when i have spaces, my cat buddies have no
        litter i live in luxury cat life.
      </Text>
      <Flex flexDirection={['column', 'row']}>
        <Button
          bg="primary.300"
          color="gray.300"
          h={['40px', '64px']}
          w={['160px', '216px']}
          marginBottom={['20px', '0']}
          _hover={{ bg: 'primary.200' }}
          _focus={{}}
        >
          Quero Ajudar
        </Button>
        <Button
          bg="secondary.300"
          color="gray.100"
          h={['40px', '64px']}
          w={['160px', '216px']}
          marginLeft={['0', '40px', '80px']}
          _hover={{ bg: 'secondary.200' }}
          _focus={{}}
        >
          Preciso de ajuda
        </Button>
      </Flex>
    </Flex>
  );
};
