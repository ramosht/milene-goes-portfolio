import Main from '../../template/Main';
import Title from '../../components/Title';
import LinkSection from '../../components/LinkSection';
import SidebarMenu from '../../components/SidebarMenu';
import PageWithSidebar from '../../components/PageWithSidebar';
import PageWrapper from '../../components/PageWrapper';
import * as S from '../../components/styles/about/styles';
import Head from 'next/head';

const Sobre = () => {
  return (
    <>
      <Head>
        <title>Milene Góes | Sobre mim</title>
        <meta
          name="description"
          content="Uma contadora de boas histórias. Gosto de ouvir, falar e escrever: sou uma entusiasta das palavras e apaixonada por pessoas!"
        />
      </Head>
      <Main current="about">
        <Title>O que me define são as palavras</Title>
        <PageWithSidebar>
          <SidebarMenu>
            <LinkSection to="/interesses">Interesses</LinkSection>
            <LinkSection to="/formacao">Formação</LinkSection>
            <LinkSection to="/depoimentos">Depoimentos</LinkSection>
            <LinkSection to="/premiacoes">Premiações</LinkSection>
          </SidebarMenu>

          <PageWrapper>
            <S.ProfileImageWrapper>
              <S.Image
                src="/img/profile.jpeg"
                alt="Foto de perfil da Milene Goes"
              />
            </S.ProfileImageWrapper>
            <p>
              Uma contadora de boas histórias: é assim que me defino. Gosto de
              ouvir, falar e escrever: sou uma entusiasta das palavras e
              apaixonada por pessoas! O contato humanizado me ajuda a
              compreender as diferentes realidades da sociedade e a desenvolver
              empatia e veracidade em cada texto que produzo.
            </p>
            <p>
              Minha trajetória no universo da comunicação teve início em 2008,
              quando entrei na faculdade de Jornalismo. Minha primeira
              experiência profissional foi em 2011, como estagiária na Rede Bom
              Dia / Diário de São Paulo, onde produzia reportagens para as
              editorias Geral, Polícia, Economia e Cultura. Essa vivência em
              jornalismo diário e “Hard News” me fez ter um entendimento na
              prática como o jornalismo é essencial para a comunidade. Após o
              período de estágio, fui efetivada e passei a integrar a equipe
              online dos portais Rede Bom Dia e Diário de São Paulo, onde
              produzia reportagens, tanto para o impresso, quanto para o online.
              As histórias que contava me fez ser premiada em um tradicional
              concurso de direitos humanos oferecido pela Associação Sorocabana
              de Imprensa (ASI), o “Prêmio ASI Schaeffler de Direitos Humanos”
              com uma reportagem realizada no hospital do Grupo de Pesquisa e
              Assistência ao Câncer Infantil (Gpaci), em Sorocaba–SP.
            </p>
            <p>
              Em assessoria de imprensa, atuei no segmento de comunicação
              corporativa, com planejamento e estratégias de comunicação e
              marketing voltado para a imagem institucional nos veículos de
              comunicação. Trabalhei com instituições como o Senac e Centro das
              Indústrias do Estado de São Paulo (Ciesp). Na Veolia Brasil,
              multinacional de gestão ambiental e economia circular com atuação
              em 43 países, trabalhei por sete anos como assessora de imprensa e
              gerenciamento de crise institucional. Nessa mesma empresa, tive a
              oportunidade de atuar com endomarketing e marketing digital, com
              divulgação de textos no site da Veolia e redes sociais dos
              trabalhos oferecidos pela empresa com base nas estratégias do
              grupo e stakeholders.
            </p>
            <p>
              A habilidade com a escrita me deu a oportunidade de transitar em
              diversas áreas da comunicação, me fazendo uma profissional aberta
              para conhecer e atuar com diferentes ferramentas estratégicas. Já
              realizei trabalhos de redação com técnicas de copywriting, SEO e
              gatilhos mentais voltados para marketing de vendas. Também
              desenvolvi trabalhos de redação de textos para blogs e produção de
              podcasts para Faculdade de Engenharia de Sorocaba (Facens). Por
              fim, no marketing político atuei em 2020 com campanha eleitoral
              para vereadores, com produção de posts para redes sociais, textos
              para informativos e produção de vídeos.
            </p>
            <p>
              Essas experiências em diversos segmentos me faz acreditar que a
              comunicação torna-se cada vez mais essencial na formação de uma
              sociedade justa e igualitária e que a informação de qualidade é
              necessária. Desta forma, pauto o meu trabalho sempre buscando um
              olhar diferente saindo da minha zona de conforto todos os dias.
            </p>
          </PageWrapper>
        </PageWithSidebar>
      </Main>
    </>
  );
};

export default Sobre;
