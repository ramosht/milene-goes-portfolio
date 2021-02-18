import { useEffect, useState, useCallback } from 'react';
import Data from '../../../config/data';
import Main from '../../../template/Main';
import Title from '../../../components/Title';
import MenuCases from '../../../components/MenuCases';
import PageWithSidebar from '../../../components/PageWithSidebar';
import PageWrapper from '../../../components/PageWrapper';
import Lightbox from '../../../components/Lightbox';

import * as S from '../../../components/styles/marketing-politico/styles';
import { md } from '../../../../styles/breakpoints';
import Head from 'next/head';

type Case = {
  id: string;
  thumbnail: string;
  original: string;
  title: string;
};

const PageCases = () => {
  const [cases, setCases] = useState<Case[]>([]);
  const [startIndex, setStartIndex] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    console.log(window.innerWidth);
    setViewportWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    const items = Data.marketingPolitico.map(item => ({
      id: item.alt,
      thumbnail: item.url,
      original: item.url,
      title: item.alt,
    }));
    setCases(items);
  }, []);

  const openViewer = useCallback(index => {
    setStartIndex(index);
    setViewerIsOpen(true);
  }, []);

  return (
    <>
      <Head>
        <title>Milene Góes | Cases: Marketing Político</title>
        <meta
          name="description"
          content="Cases de trabalhos que realizei em veículos de comunicação e em todas as áreas em que atuei"
        />
      </Head>
      <Main current="jobs">
        <Title>Cases de trabalhos</Title>
        <PageWithSidebar>
          <MenuCases current="marketing-politico" />

          <PageWrapper>
            <S.Gallery>
              {cases.map((item, index) => (
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
                    images={cases}
                    setStartIndex={setStartIndex}
                    setViewerIsOpen={setViewerIsOpen}
                  />
                )}
              </>
            )}
          </PageWrapper>
        </PageWithSidebar>
      </Main>
    </>
  );
};

export default PageCases;
