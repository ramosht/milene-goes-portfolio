import * as S from '../../components/styles/interesses/styles';
import Main from '../../template/Main';
import Title from '../../components/Title';
import LinkSection from '../../components/LinkSection';
import SidebarMenu from '../../components/SidebarMenu';
import PageWithSidebar from '../../components/PageWithSidebar';
import PageWrapper from '../../components/PageWrapper';

const Page = () => {
  return (
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
  );
};

export default Page;
