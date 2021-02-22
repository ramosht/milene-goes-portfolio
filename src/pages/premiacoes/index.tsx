import Main from '../../template/Main';
import Title from '../../components/Title';
import * as S from '../../components/styles/producao-de-conteudo/styles';
import PageWithSidebar from '../../components/PageWithSidebar';
import PageWrapper from '../../components/PageWrapper';
import Head from 'next/head';
import { md } from '../../../styles/breakpoints';
import { useCallback, useEffect, useState } from 'react';
import Lightbox from '../../components/Lightbox';
import Description from '../../components/Description';

type Image = {
  id: string;
  thumbnail: string;
  original: string;
  title: string;
};

const images: Image[] = [];

const Page = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    setViewportWidth(window.innerWidth);
  }, []);

  const openViewer = useCallback(index => {
    setStartIndex(index);
    setViewerIsOpen(true);
  }, []);

  return (
    <>
      <Head>
        <title>Milene Góes | Premiações</title>
        <meta
          name="description"
          content="Infomações sobre o Prêmio ASI Shaeffler de Direitos Humanos"
        />
      </Head>
      <Main current="premiacoes">
        <Title>Premiações</Title>

        <Description>
          Em 2013 fui premiada em segundo lugar na categoria Jornal Impresso com
          o Prêmio Asi Schaeffler de Direitos Humanos, um concurso jornalístico
          da cidade de Sorocaba - SP da Associação Sorocabana de Imprensa em
          parceria com a Shaeffler Group - multinacional do setor automotivo. A
          reportagem tratou sobre o projeto pedagógico Classe Hospitalar,
          promovido pelo Governo do Estado de São Paulo e as crianças assistidas
          por esse programa no hospital do câncer infantil de Sorocaba, o GPACI
          - Grupo de Pesquisa e Assistência ao Câncer Infantil.
        </Description>

        <S.Gallery>
          {images.map((item, index) => (
            <S.Thumbnail
              key={item.id}
              src={item.original}
              alt={item.title}
              onClick={() => openViewer(index)}
            />
          ))}
        </S.Gallery>

        {viewportWidth >= md && (
          <>
            {viewerIsOpen && (
              <Lightbox
                startIndex={startIndex}
                images={images}
                setStartIndex={setStartIndex}
                setViewerIsOpen={setViewerIsOpen}
              />
            )}
          </>
        )}
      </Main>
    </>
  );
};

export default Page;
