import Main from '../../template/Main';
import Title from '../../components/Title';
import LinkSection from '../../components/LinkSection';
import SidebarMenu from '../../components/SidebarMenu';
import PageWithSidebar from '../../components/PageWithSidebar';
import PageWrapper from '../../components/PageWrapper';
import Head from 'next/head';

const Page = () => {
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
        <PageWithSidebar>
          <SidebarMenu>
            <LinkSection to="/formacao">Formação</LinkSection>
            <LinkSection to="/sobre">Sobre</LinkSection>
            <LinkSection to="/depoimentos">Depoimentos</LinkSection>
            <LinkSection to="/interesses">Interessess</LinkSection>
          </SidebarMenu>

          <PageWrapper></PageWrapper>
        </PageWithSidebar>
      </Main>
    </>
  );
};

export default Page;
