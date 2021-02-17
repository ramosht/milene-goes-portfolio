import { useEffect, useState } from 'react';
import Data from '../../../config/data';
import Main from '../../../template/Main';
import Title from '../../../components/Title';
import Description from '../../../components/Description';
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
    const items: Case[] = Data.copywriting.map(item => ({
      id: item.title,
      title: item.title,
      url: item.link,
    }));
    setCases(items);
  }, []);

  return (
    <Main current="jobs">
      <Title>Cases de trabalhos</Title>

      <Description>
        Os textos foram produzidos para o blog Siga Pregão. No entanto, foram
        assinados por pessoas da equipe da empresa.
      </Description>

      <PageWithSidebar>
        <MenuCases current="copywriting-e-seo" />

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
