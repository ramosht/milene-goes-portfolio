import { useEffect, useState } from 'react';
import Data from '../../../config/data';
import Main from '../../../template/Main';
import MenuCases from '../../../components/MenuCases';
import Cases from '../../../components/Cases';
import Case from '../../../components/Case';
import PageWrapper from '../../../components/PageWrapper';
import PageWithSidebar from '../../../components/PageWithSidebar';
import Head from 'next/head';

type Case = {
  id: string;
  title?: string;
  url?: string;
};

const PageCases = () => {
  const [cases, setCases] = useState<Case[]>([]);

  useEffect(() => {
    const items: Case[] = Data.jornalImpresso.map(item => ({
      id: item.title,
      title: item.title,
      url: item.url,
    }));
    setCases(items);
  }, []);

  return (
    <>
      <Head>
        <title>Milene Góes | Cases: Endomarketing</title>
        <meta
          name="description"
          content="Cases de trabalhos que realizei em veículos de comunicação e em todas as áreas em que atuei"
        />
      </Head>
      <Main current="jobs">
        <PageWithSidebar>
          <MenuCases current="endomarketing" />

          <PageWrapper>
            <Cases>
              <Case>
                <h3>Jornal Espaço Veólia</h3>
                <a
                  href="https://drive.google.com/file/d/17KF7j3ThTu2XID_CngkQ0w4XuMnL9ZJl/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="linkJornalImpresso"
                >
                  Ver case
                </a>
              </Case>
            </Cases>
          </PageWrapper>
        </PageWithSidebar>
      </Main>
    </>
  );
};

export default PageCases;
