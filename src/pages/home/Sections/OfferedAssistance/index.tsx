import { useEffect } from 'react';
import { Box, Grid, Heading, Text } from '@chakra-ui/react';
import AOS from 'aos';

import { AssistanceCard } from '../../../../components/AssistanceCard';

import 'aos/dist/aos.css';
import './style.css';

export const OfferedAssistance = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <Box
      h="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      data-aos="justifyFix"
    >
      <Heading
        fontSize={['2xl', '3xl', '4xl']}
        marginBottom="20px"
        textAlign="center"
        marginTop="40px"
        data-aos="showElement"
      >
        Assistências oferecidas
      </Heading>
      <Grid
        bg="primary.100"
        paddingY={['32px', '56px']}
        paddingX={['16px', '32px']}
        templateColumns={[
          'repeat(4,300px)',
          'repeat(4,400px)',
          'repeat(4,650px)',
          'repeat(2,400px)',
        ]}
        templateRows={[
          'repeat(1,300px)',
          'repeat(1,300px)',
          'repeat(1,300px)',
          'repeat(2,250px)',
        ]}
        justifyItems="center"
        justifyContent={['normal', 'normal', 'normal', 'center']}
        alignItems={['normal', 'normal', 'normal', 'center']}
        gap="20px"
        borderRadius="8px"
        margin={['0px', '0px', '0px', '16px']}
        marginTop={['60px', '40px', '20px']}
        w={['300px', '400px', '650px', '900px', '1000px']}
        overflowY="hidden"
        overflowX={['scroll', 'scroll', 'scroll', 'hidden']}
        scrollSnapType="x mandatory"
        data-aos="SlideFromAbove"
        sx={{
          '::-webkit-scrollbar': {
            height: '5px',
            width: '5px',
          },
          '::-webkit-scrollbar-track': {
            borderRadius: '10px',
          },
          '::-webkit-scrollbar-thumb': {
            background: 'primary.300',
          },
          '::-webkit-scrollbar-thumb:hover': {
            background: 'primary.400',
          },
        }}
      >
        <AssistanceCard medical>
          <Heading fontSize="lg" marginY="20px">
            Assistência médica
          </Heading>
          <Text color="gray.250">
            As lick i the shoes eat owner's food experiences short bursts of
            poo-phoria after going to the loo but meow meow you are my owner
          </Text>
        </AssistanceCard>

        <AssistanceCard healthyFood>
          <Heading fontSize="lg" marginY="20px">
            Comida saudável
          </Heading>
          <Text color="gray.250">
            As lick i the shoes eat owner's food experiences short bursts of
            poo-phoria after going to the loo but meow meow you are my owner
          </Text>
        </AssistanceCard>

        <AssistanceCard legalAssistance>
          <Heading fontSize="lg" marginY="20px">
            Assistência Jurídica
          </Heading>
          <Text color="gray.250">
            As lick i the shoes eat owner's food experiences short bursts of
            poo-phoria after going to the loo but meow meow you are my owner
          </Text>
        </AssistanceCard>

        <AssistanceCard loveAndCare>
          <Heading fontSize="lg" marginY="20px">
            Cuidados e amparo
          </Heading>
          <Text color="gray.250">
            As lick i the shoes eat owner's food experiences short bursts of
            poo-phoria after going to the loo but meow meow you are my owner
          </Text>
        </AssistanceCard>
      </Grid>
    </Box>
  );
};
