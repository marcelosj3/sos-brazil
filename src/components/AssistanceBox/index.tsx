import { useRef, useEffect } from "react";
import { Grid, Heading, Text } from "@chakra-ui/react";

import { AssistanceCard } from "../AssistanceCard";

interface IAssistanceBox {
  value: number;
  setScrollPosition: (state: number) => void;
}

interface ICardInfo {
  [key: string]: string;
}

export const AssistanceBox = ({ value, setScrollPosition }: IAssistanceBox) => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    container.current?.scrollTo({ left: value, behavior: "smooth" });
  }, [value]);

  const cardInfo: ICardInfo[] = [
    {
      icon: "medical",
      title: "Assistência médica",
      description: `Doe para instituições de assistência médica a populações em situação de vulnerabilidade e/ou locais remotos. Apoie a luta por saúde!`,
    },
    {
      icon: "healthyFood",
      title: "Segurança Alimentar",
      description: `Doe para instituições que trabalham levando comida saudável a mesa de milhares de brasileiros. Apoie a luta contra a fome!`,
    },
    {
      icon: "legalAssistance",
      title: "Assistência Jurídica",
      description: `Doe para que instituições voltadas para a assistência jurídica gratuita continuem assistindo quem mais precisa. Apoie a luta por direitos!`,
    },
    {
      icon: "loveAndCare",
      title: "Seguridade Social",
      description: `Doe para instituições voltadas para a Seguridade Social, resguardando direitos básicos como Moradia. Apoie a luta por habitação!`,
    },
  ];

  return (
    <Grid
      ref={container}
      bg="primary.100"
      paddingY={["32px", "56px"]}
      paddingX={["16px", "32px"]}
      templateColumns={[
        "repeat(4,300px)",
        "repeat(4,400px)",
        "repeat(4,650px)",
        "repeat(2,400px)",
      ]}
      templateRows={[
        "repeat(1,300px)",
        "repeat(1,300px)",
        "repeat(1,300px)",
        "repeat(2,250px)",
      ]}
      justifyItems="center"
      justifyContent={["normal", "normal", "normal", "center"]}
      alignItems={["normal", "normal", "normal", "center"]}
      gap="20px"
      borderRadius="8px"
      margin={["0px", "0px", "0px", "16px"]}
      marginTop={["30px", "40px", "20px"]}
      w={["300px", "400px", "650px", "900px", "1000px"]}
      overflowY="hidden"
      overflowX={["scroll", "scroll", "scroll", "hidden"]}
      scrollSnapType="x mandatory"
      data-aos="SlideFromAbove"
      onScroll={(e) => {
        setScrollPosition(e.currentTarget.scrollLeft);
      }}
      sx={{
        "::-webkit-scrollbar": {
          height: "0px",
          width: "0px",
        },
        "::-webkit-scrollbar-thumb": {
          background: "transparent",
        },
      }}
    >
      {cardInfo.map(({ icon, title, description }, index) => (
        <AssistanceCard key={index} icon={icon}>
          <Heading fontSize="lg" marginY="20px">
            {title}
          </Heading>
          <Text textAlign="justify" color="gray.250">
            {description}
          </Text>
        </AssistanceCard>
      ))}
    </Grid>
  );
};
