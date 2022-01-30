import { useEffect, useState } from 'react';
import { Box, Heading, useMediaQuery } from '@chakra-ui/react';
import AOS from 'aos';

import { AssistanceBox } from '../../../../components/AssistanceBox';
import { AssistanceBulletSlider } from './assistanceBulletSlider';

import 'aos/dist/aos.css';
import './style.css';

interface ISelectValueOption {
  [key: string]: number;
}

interface ISelectValue {
  [key: string]: ISelectValueOption;
}

export const OfferedAssistance = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollValue, setScrollValue] = useState(0);

  const [from0ToSm] = useMediaQuery('(max-width: 479px)');
  const [fromSmToMd] = useMediaQuery(
    '(min-width: 480px) and (max-width: 767px)'
  );
  const [fromMdToLg] = useMediaQuery(
    '(min-width: 768px) and (max-width: 991px)'
  );

  const selectValue: ISelectValue = {
    from0ToSm: {
      first: 16,
      second: 336,
      third: 656,
      fourth: 976,
    },
    fromSmToMd: {
      first: 32,
      second: 452,
      third: 872,
      fourth: 1292,
    },
    fromMdToLg: {
      first: 32,
      second: 702,
      third: 1372,
      fourth: 2042,
    },
  };

  const handleScrollTo = (index: string) => {
    let value = 0;

    if (from0ToSm) {
      value = selectValue.from0ToSm[index];
    } else if (fromSmToMd) {
      value = selectValue.fromSmToMd[index];
    } else if (fromMdToLg) {
      value = selectValue.fromMdToLg[index];
    }

    setScrollValue(value);
  };

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
      <AssistanceBox
        value={scrollValue}
        setScrollPosition={setScrollPosition}
      />
      <AssistanceBulletSlider
        scrollPosition={scrollPosition}
        handleScrollTo={handleScrollTo}
      />
    </Box>
  );
};
