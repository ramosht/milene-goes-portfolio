import { useEffect, useState } from 'react';
import Data from '../../../config/data';
import Main from '../../../template/Main';
import Title from '../../../components/Title';
import MenuCases from '../../../components/MenuCases';
import PageWithSidebar from '../../../components/PageWithSidebar';
import Cases from '../../../components/Cases';
import Case from '../../../components/Case';
import PageWrapper from '../../../components/PageWrapper';

type Case = {
  id: string;
  title?: string;
  url?: string;
  image?: string;
};

const PageCases = () => {
  const [cases, setCases] = useState<Case[]>([]);

  useEffect(() => {
    const items: Case[] = Data.portaisDeNoticia.map(item => ({
      id: item.title,
      title: item.title,
      url: item.link,
    }));
    setCases(items);
  }, []);

  return (
    <Main current="jobs">
      <Title>Portais de Notícias</Title>
      <PageWithSidebar>
        <MenuCases current="portais-de-noticia" />

        <PageWrapper>
          <Cases>
            {cases &&
              cases.map((currentCase: Case) => (
                <Case key={currentCase.id}>
                  <h3>{currentCase.title}</h3>
                  <a
                    href={currentCase.url || '#'}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {currentCase.url}
                  </a>
                </Case>
              ))}
          </Cases>
        </PageWrapper>
      </PageWithSidebar>
    </Main>
  );
};

export default PageCases;
