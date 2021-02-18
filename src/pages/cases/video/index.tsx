import Main from '../../../template/Main';
import MenuCases from '../../../components/MenuCases';
import Cases from '../../../components/Cases';
import PageWrapper from '../../../components/PageWrapper';
import PageWithSidebar from '../../../components/PageWithSidebar';
import Head from 'next/head';
import Title from '../../../components/Title';
import ReactPlayer from 'react-player';
import * as S from '../../../components/styles/video/styles';

const PageCases = () => {
  return (
    <>
      <Head>
        <title>Milene Góes | Cases: Vídeo</title>
        <meta
          name="description"
          content="Cases de trabalhos que realizei em veículos de comunicação e em todas as áreas em que atuei"
        />
      </Head>
      <Main current="jobs">
        <Title>Vídeo</Title>
        <PageWithSidebar>
          <MenuCases current="video" />

          <PageWrapper>
            <S.Video>
              <ReactPlayer
                controls
                volume={1}
                url="/video/Portfólio de vídeo.mp4"
              />
            </S.Video>
          </PageWrapper>
        </PageWithSidebar>
      </Main>
    </>
  );
};

export default PageCases;
