import { Grid, Heading, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { AssistanceCard } from '../AssistanceCard';

interface IAssistanceBox {
  value: number;
  setScrollPosition: (state: number) => void;
}
export const AssistanceBox = ({ value, setScrollPosition }: IAssistanceBox) => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    container.current?.scrollTo({ left: value, behavior: 'smooth' });
  }, [value]);

  return (
    <Grid
      ref={container}
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
      onScroll={(e) => {
        setScrollPosition(e.currentTarget.scrollLeft);
      }}
      sx={{
        '::-webkit-scrollbar': {
          height: '0px',
          width: '0px',
        },
        '::-webkit-scrollbar-thumb': {
          background: 'transparent',
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
  );
};
