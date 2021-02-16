import Main from '../../template/Main';
import Title from '../../components/Title';
import PageWithSidebar from '../../components/PageWithSidebar';
import Formacao from '../../components/Formacao';
import Curso from '../../components/Curso';
import Level from '../../components/Level';
import LinkSection from '../../components/LinkSection';
import SidebarMenu from '../../components/SidebarMenu';
import PageWrapper from '../../components/PageWrapper';

import * as S from './styles';

const FormacaoPage = () => {
  return (
    <Main current="about">
      <Title>Formação</Title>
      <PageWithSidebar>
        <SidebarMenu>
          <LinkSection to="/interesses">Interesses</LinkSection>
          <LinkSection to="/sobre">Quem sou eu?</LinkSection>
        </SidebarMenu>

        <PageWrapper>
          <Formacao
            title="MBA Executivo em Gestão de Recursos Humanos"
            university="ESAMC"
            period="2017 - 2018"
            description="Escola Superior de Administração, Marketing e Comunicação."
          />
          <Formacao
            title="Comunicação social com habilitação em jornalismo"
            university="UNISO"
            period="2008 - 2011"
            description="Universidade de Sorocaba"
          />
          <Title>Cursos</Title>
          <Curso
            title="Do planejamento a Execução de Marketing Digital"
            university="ESPN"
            year="2020"
            description="Escola Superior de Propaganda e Marketing"
          />
          <Curso
            title="A Reinvenção da Comunicação Interna em Tempos de Pandemia"
            university="ESPN"
            year="2020"
            description="Escola Superior de Propaganda e Marketing"
          />
          <Curso
            title="Marketing Digital – Cenários, Tendências e Ferramentas"
            university="Centro Universitário Belas Artes de São Paulo"
            year="2019"
          />
          <Curso
            title="Curso de Extensão - Novas Tendências de Marketing"
            university="FATEC Itu"
            year="2018"
          />

          <Title>Línguas</Title>
          <S.Language>
            <S.TitleLanguage>
              Inglês <Level level={3} />
            </S.TitleLanguage>
            <span className="category">Intermediário - cursando</span>
          </S.Language>
          <S.Language>
            <S.TitleLanguage>
              Espanhol <Level level={3} />
            </S.TitleLanguage>
            <span className="category">Intermediário</span>
            <p>
              Prática em escrita, leitura e conversação com experiência de
              comunicação com seis países da América Latina.
            </p>
          </S.Language>

          <Title>Conhecimentos</Title>
          <S.Conhecimentos>
            <S.Conhecimento>
              Google ADS <Level level={3} />
            </S.Conhecimento>
            <S.Conhecimento>
              Google Analytics <Level level={4} />
            </S.Conhecimento>
            <S.Conhecimento>
              Facebook ADS <Level level={3} />
            </S.Conhecimento>
            <S.Conhecimento>
              Wordpress <Level level={3} />
            </S.Conhecimento>
            <S.Conhecimento>
              Postgraim <Level level={5} />
            </S.Conhecimento>
            <S.Conhecimento>
              mLabs <Level level={5} />
            </S.Conhecimento>
            <S.Conhecimento>
              Indesign <Level level={3} />
            </S.Conhecimento>
          </S.Conhecimentos>
        </PageWrapper>
      </PageWithSidebar>
    </Main>
  );
};

export default FormacaoPage;
