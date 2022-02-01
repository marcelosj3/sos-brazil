import { useEffect, useState } from "react";
import { Box, Heading, useMediaQuery } from "@chakra-ui/react";
import AOS from "aos";

import { AssistanceBox } from "../../../../components/AssistanceBox";
import { AssistanceBulletSlider } from "./assistanceBulletSlider";

import "aos/dist/aos.css";
import "./style.css";

interface ISelectValueOption {
  [key: string]: number;
}

interface ISelectValue {
  [key: string]: ISelectValueOption;
}

const selectValue: ISelectValue = {
  from0ToSm: {
    elementDistance: 336,
    1: 16,
    2: 336,
    3: 656,
    4: 976,
  },
  fromSmToMd: {
    elementDistance: 452,
    1: 32,
    2: 452,
    3: 872,
    4: 1292,
  },
  fromMdToLg: {
    elementDistance: 702,
    1: 32,
    2: 702,
    3: 1372,
    4: 2042,
  },
};

export const OfferedAssistance = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollValue, setScrollValue] = useState(0);
  const [scrollElementDistance, setScrollElementDistance] = useState(0);

  const [from0ToSm] = useMediaQuery("(max-width: 479px)");
  const [fromSmToMd] = useMediaQuery(
    "(min-width: 480px) and (max-width: 767px)"
  );
  const [fromMdToLg] = useMediaQuery(
    "(min-width: 768px) and (max-width: 991px)"
  );

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  useEffect(() => {
    if (from0ToSm) {
      setScrollElementDistance(selectValue.from0ToSm.elementDistance);
    } else if (fromSmToMd) {
      setScrollElementDistance(selectValue.fromSmToMd.elementDistance);
    } else if (fromMdToLg) {
      setScrollElementDistance(selectValue.fromMdToLg.elementDistance);
    }
  }, [from0ToSm, fromSmToMd, fromMdToLg]);

  const handleScrollTo = (index: number) => {
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

  return (
    <Box
      id="assistencia"
      h="100vh"
      minH={["700px", "700px", "700px", "900px"]}
      paddingTop="85px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      data-aos="justifyFix"
    >
      <Heading
        fontSize={["2xl", "3xl", "4xl"]}
        textAlign="center"
        marginBottom="32px"
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
        scrollElementDistance={scrollElementDistance}
        handleScrollTo={handleScrollTo}
        bulletQuantity={4}
      />
    </Box>
  );
};
