import LinkSection from '../LinkSection';
import SidebarMenu from '../SidebarMenu';

import * as S from './styles';

type ComponentProps = {
  current?:
    | 'jornal-impresso'
    | 'assessoria-de-imprensa'
    | 'gestao-de-crise-institucional'
    | 'marketing-politico'
    | 'portais-de-noticia'
    | 'producao-de-conteudo'
    | 'producao-de-podcast'
    | 'textos-para-blog'
    | 'copywriting-e-seo'
    | 'endomarketing'
    | 'video';
};

const Component: React.FC<ComponentProps> = ({ current }) => {
  return (
    <S.Wrapper>
      <SidebarMenu>
        <S.Link isCurrent={current === 'jornal-impresso'}>
          <LinkSection to="/cases/jornal-impresso">Jornal Impresso</LinkSection>
        </S.Link>

        <S.Link isCurrent={current === 'portais-de-noticia'}>
          <LinkSection to="/cases/portais-de-noticia">
            Portais de Notícia
          </LinkSection>
        </S.Link>

        <S.Link isCurrent={current === 'textos-para-blog'}>
          <LinkSection to="/cases/textos-para-blog">
            Textos para Blog
          </LinkSection>
        </S.Link>

        <S.Link isCurrent={current === 'copywriting-e-seo'}>
          <LinkSection to="/cases/copywriting-e-seo">
            Copywriting e estratégia de SEO
          </LinkSection>
        </S.Link>

        <S.Link isCurrent={current === 'producao-de-conteudo'}>
          <LinkSection to="/cases/producao-de-conteudo">
            Produção de conteúdo
          </LinkSection>
        </S.Link>

        <S.Link isCurrent={current === 'assessoria-de-imprensa'}>
          <LinkSection to="/cases/assessoria-de-imprensa">
            Assessoria de Imprensa
          </LinkSection>
        </S.Link>

        <S.Link isCurrent={current === 'endomarketing'}>
          <LinkSection to="/cases/endomarketing">Endomarketing</LinkSection>
        </S.Link>

        <S.Link isCurrent={current === 'gestao-de-crise-institucional'}>
          <LinkSection to="/cases/gestao-de-crise-institucional">
            Gestão de Crise Institucional
          </LinkSection>
        </S.Link>

        <S.Link isCurrent={current === 'producao-de-podcast'}>
          <LinkSection to="/cases/producao-de-podcast">
            Produção de Podcast
          </LinkSection>
        </S.Link>

        <S.Link isCurrent={current === 'marketing-politico'}>
          <LinkSection to="/cases/marketing-politico">
            Marketing Político
          </LinkSection>
        </S.Link>

        <S.Link isCurrent={current === 'video'}>
          <LinkSection to="/cases/marketing-politico">Vídeo</LinkSection>
        </S.Link>
      </SidebarMenu>
    </S.Wrapper>
  );
};

export default Component;
