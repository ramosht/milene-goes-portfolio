import * as S from '../../components/styles/interesses/styles';
import Main from '../../template/Main';
import Title from '../../components/Title';
import LinkSection from '../../components/LinkSection';
import SidebarMenu from '../../components/SidebarMenu';
import PageWithSidebar from '../../components/PageWithSidebar';
import PageWrapper from '../../components/PageWrapper';

const Page = () => {
  return (
    <Main current="depoimentos">
      <Title>Depoimentos</Title>
      <PageWithSidebar>
        <SidebarMenu>
          <LinkSection to="/formacao">Formação</LinkSection>
          <LinkSection to="/sobre">Sobre</LinkSection>
          <LinkSection to="/premiacoes">Premiações</LinkSection>
          <LinkSection to="/interesses">Interesses</LinkSection>
        </SidebarMenu>

        <PageWrapper></PageWrapper>
      </PageWithSidebar>
    </Main>
  );
};

export default Page;
