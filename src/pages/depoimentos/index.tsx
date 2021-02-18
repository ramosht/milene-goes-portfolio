import * as S from '../../components/styles/depoimentos/styles';
import Main from '../../template/Main';
import Title from '../../components/Title';
import Depoimento from '../../components/Depoimento';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronRight } from '@styled-icons/boxicons-regular/ChevronRight';
import { ChevronLeft } from '@styled-icons/boxicons-regular/ChevronLeft';
import Head from 'next/head';

const Page = () => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    nextArrow: <ChevronRight />,
    prevArrow: <ChevronLeft />,
    infinite: true,
  };

  return (
    <>
      <Head>
        <title>Milene Góes | Depoimentos</title>
        <meta
          name="description"
          content="Depoimentos e recomendações de pessoas que trabalharam comigo"
        />
      </Head>
      <Main current="depoimentos">
        <Title>Depoimentos</Title>

        <S.Wrapper>
          <Slider {...settings}>
            <Depoimento
              image="/img/depoimentos/heloisa-vendramini.jpg"
              name="Heloísa Vendramini, Gerente Senac Campinas"
              text="Milene é uma profissional altamente capacitada e carismática, capaz de inspirar as pessoas a se comunicarem melhor e provocar mudanças significativas e positivas, tanto para o indivíduo como a sociedade. Tê-la como assessora de imprensa foi uma experiência incrível."
            />

            <Depoimento
              image="/img/depoimentos/rodrigo-buzin.jpeg"
              name="Rodrigo Buzin Siqueira do Amaral, Gerente Senac Sorocaba"
              text="Nossa instituição preza muito pela qualidade da comunicação e por um relacionamento assertivo com os diversos veículos de imprensa. A Milene prestou serviços durante um bom tempo conosco, sempre coerente com nossas premissas."
            />
          </Slider>
        </S.Wrapper>
      </Main>
    </>
  );
};

export default Page;
